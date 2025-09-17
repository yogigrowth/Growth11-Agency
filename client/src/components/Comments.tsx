import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Comment, InsertComment } from "@shared/schema";

interface CommentsProps {
  blogPostId: string;
}

export default function Comments({ blogPostId }: CommentsProps) {
  const [newComment, setNewComment] = useState({ authorName: "", content: "" });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch comments for this blog post
  const {
    data: comments = [],
    isLoading,
    error,
  } = useQuery<Comment[]>({
    queryKey: ["/api/blog-posts", blogPostId, "comments"],
    enabled: !!blogPostId,
  });

  // Create comment mutation
  const createCommentMutation = useMutation({
    mutationFn: (commentData: InsertComment) =>
      apiRequest("POST", `/api/blog-posts/${blogPostId}/comments`, commentData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/api/blog-posts", blogPostId, "comments"],
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/blog-posts", blogPostId],
      });
      setNewComment({ authorName: "", content: "" });
      toast({
        title: "Comment added!",
        description: "Your comment has been posted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to post your comment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.authorName.trim() || !newComment.content.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in both your name and comment.",
        variant: "destructive",
      });
      return;
    }

    createCommentMutation.mutate({
      blogPostId,
      authorName: newComment.authorName.trim(),
      content: newComment.content.trim(),
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString: string | Date) => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (error) {
    return (
      <div className="text-center text-muted-foreground py-8">
        <p>Failed to load comments. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Comments Header */}
      <div className="flex items-center gap-2">
        <MessageCircle className="h-6 w-6" />
        <h3 className="text-xl font-semibold">
          Comments ({isLoading ? "..." : comments.length})
        </h3>
      </div>

      {/* Add Comment Form */}
      <Card data-testid="card-add-comment">
        <CardHeader>
          <h4 className="font-semibold">Leave a Comment</h4>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <Input
                data-testid="input-author-name"
                placeholder="Your name"
                value={newComment.authorName}
                onChange={(e) =>
                  setNewComment({ ...newComment, authorName: e.target.value })
                }
                className="w-full"
                maxLength={100}
              />
            </div>
            <div>
              <Textarea
                data-testid="textarea-comment-content"
                placeholder="Share your thoughts..."
                value={newComment.content}
                onChange={(e) =>
                  setNewComment({ ...newComment, content: e.target.value })
                }
                rows={4}
                className="w-full resize-none"
                maxLength={500}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              {newComment.content.length}/500 characters
            </p>
            <Button
              data-testid="button-submit-comment"
              type="submit"
              disabled={
                createCommentMutation.isPending ||
                !newComment.authorName.trim() ||
                !newComment.content.trim()
              }
            >
              {createCommentMutation.isPending ? (
                "Posting..."
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Post Comment
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-muted rounded w-32" />
                      <div className="h-4 bg-muted rounded w-full" />
                      <div className="h-4 bg-muted rounded w-3/4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : comments.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                No comments yet. Be the first to share your thoughts!
              </p>
            </CardContent>
          </Card>
        ) : (
          comments.map((comment) => (
            <Card key={comment.id} data-testid={`comment-${comment.id}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {getInitials(comment.authorName)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <p
                        className="font-semibold text-sm"
                        data-testid={`text-author-${comment.id}`}
                      >
                        {comment.authorName}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(comment.createdAt!)}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed whitespace-pre-wrap break-words"
                      data-testid={`text-content-${comment.id}`}
                    >
                      {comment.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}