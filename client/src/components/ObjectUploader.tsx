import { useState } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Upload, X } from "lucide-react";

interface ObjectUploaderProps {
  maxFileSize?: number;
  onComplete?: (uploadedUrl: string) => void;
  buttonClassName?: string;
  children?: ReactNode;
  accept?: string;
}

/**
 * A file upload component that handles uploading files to object storage
 * 
 * Features:
 * - File selection with file input
 * - Upload progress tracking
 * - Integration with backend object storage
 * - Automatic ACL policy setting
 */
export function ObjectUploader({
  maxFileSize = 10485760, // 10MB default
  onComplete,
  buttonClassName,
  children,
  accept = "image/*,video/*"
}: ObjectUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileSelect = (file: File) => {
    if (file.size > maxFileSize) {
      toast({
        title: "File too large",
        description: `File size must be less than ${Math.round(maxFileSize / 1024 / 1024)}MB`,
        variant: "destructive"
      });
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    try {
      // Get upload URL from backend
      let uploadResponse;
      let uploadData;
      try {
        uploadResponse = await apiRequest("POST", "/api/objects/upload");
        uploadData = await uploadResponse.json();
      } catch (error) {
        throw new Error("Failed to get upload URL from server. Please check your connection and try again.");
      }

      // Upload file directly to storage using presigned URL
      let uploadResult;
      try {
        uploadResult = await fetch(uploadData.uploadURL, {
          method: "PUT",
          body: selectedFile,
          headers: {
            "Content-Type": selectedFile.type,
          },
        });

        if (!uploadResult.ok) {
          throw new Error(`Storage upload failed: ${uploadResult.status} ${uploadResult.statusText}`);
        }
      } catch (error) {
        if (error instanceof Error && error.message.includes("Storage upload failed")) {
          throw error;
        }
        throw new Error("Failed to upload file to storage. Please check your connection and try again.");
      }

      // Update backend with uploaded media info
      let mediaResponse;
      let mediaData;
      try {
        mediaResponse = await apiRequest("PUT", "/api/media/upload", {
          mediaURL: uploadData.uploadURL,
        });
        mediaData = await mediaResponse.json();
      } catch (error) {
        throw new Error("File uploaded but failed to update media information. Please contact support if this persists.");
      }
      
      toast({
        title: "Upload successful",
        description: "Your file has been uploaded successfully"
      });

      onComplete?.(mediaData.objectPath);
      setSelectedFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to upload file. Please try again.";
      toast({
        title: "Upload failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="space-y-4">
      {!selectedFile ? (
        <div>
          <input
            type="file"
            accept={accept}
            className="hidden"
            id="file-upload"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileSelect(file);
            }}
            data-testid="input-file-upload"
          />
          <label
            htmlFor="file-upload"
            className={`cursor-pointer inline-flex items-center gap-2 ${buttonClassName}`}
          >
            {children || (
              <Button type="button" variant="outline">
                <Upload className="h-4 w-4" />
                Choose File
              </Button>
            )}
          </label>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              <span className="text-sm font-medium">{selectedFile.name}</span>
              <span className="text-xs text-muted-foreground">
                ({Math.round(selectedFile.size / 1024)} KB)
              </span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleRemoveFile}
              disabled={uploading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              onClick={handleUpload}
              disabled={uploading}
              data-testid="button-upload-confirm"
            >
              {uploading ? "Uploading..." : "Upload File"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleRemoveFile}
              disabled={uploading}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}