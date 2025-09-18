import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSEO } from "@/hooks/useSEO";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { insertBlogPostSchema } from "@shared/schema";
import { Plus, Edit, Trash2, Eye, Calendar, LogOut } from "lucide-react";
import type { BlogPost, InsertBlogPost } from "@shared/schema";
import { z } from "zod";

const categories = [
  "Growth Strategy",
  "Marketing", 
  "Conversion",
  "Technology",
  "Case Study",
  "Insights"
];

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Admin() {
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const { toast } = useToast();

  useSEO({
    title: "Admin Panel - Growth11 Blog Management",
    description: "Admin panel for managing Growth11 blog posts and content",
  });

  // Login form
  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Blog post form - moved before conditional return
  const form = useForm<InsertBlogPost>({
    resolver: zodResolver(insertBlogPostSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "",
      media: "",
      published: false,
      likes: 0,
      comments: 0,
    },
  });

  // Fetch blog posts - moved before conditional return
  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
    enabled: isAuthenticated, // Only fetch when authenticated
  });

  // Create blog post mutation - moved before conditional return
  const createPostMutation = useMutation({
    mutationFn: (data: InsertBlogPost) => apiRequest("POST", "/api/blog-posts", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog-posts"] });
      toast({ title: "Success", description: "Blog post created successfully!" });
      setIsCreating(false);
      form.reset();
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to create blog post", variant: "destructive" });
    },
  });

  // Update blog post mutation - moved before conditional return
  const updatePostMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<InsertBlogPost> }) => 
      apiRequest("PATCH", `/api/blog-posts/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog-posts"] });
      toast({ title: "Success", description: "Blog post updated successfully!" });
      setEditingPost(null);
      form.reset();
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to update blog post", variant: "destructive" });
    },
  });

  // Delete blog post mutation - moved before conditional return
  const deletePostMutation = useMutation({
    mutationFn: (id: string) => apiRequest("DELETE", `/api/blog-posts/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog-posts"] });
      toast({ title: "Success", description: "Blog post deleted successfully!" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete blog post", variant: "destructive" });
    },
  });
  
  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        await apiRequest('GET', '/api/admin/status');
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_authenticated', 'true');
      } catch (error) {
        setIsAuthenticated(false);
        sessionStorage.removeItem('admin_authenticated');
      }
    };
    
    checkAuthStatus();
  }, []);

  const handleLogin = async (data: LoginForm) => {
    try {
      const response = await apiRequest('POST', '/api/admin/login', data);
      const result = await response.json();
      
      if (result?.success) {
        sessionStorage.setItem('admin_authenticated', 'true');
        setIsAuthenticated(true);
        toast({ title: "Login successful", description: "Welcome to admin panel" });
        loginForm.reset();
      } else {
        toast({ title: "Login failed", description: "Invalid credentials", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Login failed", description: "Invalid credentials", variant: "destructive" });
    }
  };

  const handleLogout = async () => {
    try {
      await apiRequest('POST', '/api/admin/logout');
    } catch (error) {
      // Continue logout even if API call fails
    }
    
    sessionStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
    setIsCreating(false);
    setEditingPost(null);
    toast({ title: "Logged out", description: "You have been logged out" });
  };

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Admin Login</CardTitle>
                <CardDescription>Enter your credentials to access the admin panel</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                    <FormField
                      control={loginForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter username" 
                              {...field} 
                              data-testid="input-admin-username"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input 
                              type="password"
                              placeholder="Enter password" 
                              {...field} 
                              data-testid="input-admin-password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full"
                      data-testid="button-admin-login"
                    >
                      Login
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const onSubmit = (data: InsertBlogPost) => {
    if (editingPost) {
      updatePostMutation.mutate({ id: editingPost.id, data });
    } else {
      createPostMutation.mutate(data);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsCreating(true);
    form.reset({
      title: post.title,
      content: post.content,
      category: post.category,
      media: post.media || "",
      published: post.published || false,
      likes: post.likes || 0,
      comments: post.comments || 0,
    });
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingPost(null);
    form.reset();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this diary entry?")) {
      deletePostMutation.mutate(id);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 relative">
              <div className="absolute top-0 right-0">
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  data-testid="button-admin-logout"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
              <Badge variant="outline" className="mb-4" data-testid="badge-admin-page">
                Admin Panel
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-admin-title">
                Our Diary Management
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-admin-description">
                Create, edit, and manage your Growth11 diary entries
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Create/Edit Form */}
              {isCreating && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle data-testid="text-form-title">
                      {editingPost ? "Edit Diary Entry" : "Create New Diary Entry"}
                    </CardTitle>
                    <CardDescription>
                      {editingPost ? "Update your diary entry details" : "Add a new diary entry to your website"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                  <Input placeholder="Diary entry title" {...field} data-testid="input-title" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-category">
                                      <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {categories.map((category) => (
                                      <SelectItem key={category} value={category}>
                                        {category}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="content"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Content</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Full diary entry content" 
                                  className="min-h-[300px]"
                                  {...field} 
                                  data-testid="textarea-content"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Media Upload Section */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Media</label>
                            <span className="text-xs text-muted-foreground">
                              Upload file or paste URL
                            </span>
                          </div>
                          
                          <div className="border-2 border-dashed border-muted rounded-lg p-6">
                            <div className="text-center space-y-4">
                              <div className="mx-auto w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-2">
                                  Drag and drop your image or video here, or click to browse
                                </p>
                                <input
                                  type="file"
                                  accept="image/*,video/*"
                                  className="hidden"
                                  id="media-upload"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      // Handle file upload logic here
                                      form.setValue('media', file.name);
                                    }
                                  }}
                                  data-testid="input-file-upload"
                                />
                                <label
                                  htmlFor="media-upload"
                                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90"
                                >
                                  Choose File
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                              <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                              <span className="bg-background px-2 text-muted-foreground">
                                Or paste URL
                              </span>
                            </div>
                          </div>

                          <FormField
                            control={form.control}
                            name="media"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input 
                                    placeholder="https://example.com/image.jpg or https://youtube.com/watch?v=..." 
                                    {...field}
                                    value={field.value || ""}
                                    data-testid="input-media-url"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="flex items-center space-x-4">
                          <FormField
                            control={form.control}
                            name="published"
                            render={({ field }) => (
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <Button
                                    type="button"
                                    variant={field.value ? "default" : "outline"}
                                    onClick={() => field.onChange(!field.value)}
                                    data-testid="button-publish-toggle"
                                  >
                                    {field.value ? "Unpublish" : "Publish"}
                                  </Button>
                                </FormControl>
                                <Label className="text-sm text-muted-foreground">Publication Status</Label>
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="flex gap-4">
                          <Button 
                            type="submit" 
                            disabled={createPostMutation.isPending || updatePostMutation.isPending}
                            data-testid="button-save-post"
                          >
                            {editingPost ? "Update Post" : "Create Post"}
                          </Button>
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={handleCancel}
                            data-testid="button-cancel"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}

              {/* Create New Post Button */}
              {!isCreating && (
                <div className="mb-8">
                  <Button 
                    onClick={() => setIsCreating(true)}
                    className="hover-elevate"
                    data-testid="button-create-new"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Diary Entry
                  </Button>
                </div>
              )}

              {/* Blog Posts List */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold" data-testid="text-posts-list">Existing Diary Entries</h2>
                
                {isLoading ? (
                  <div className="text-center py-8" data-testid="text-loading">
                    Loading diary entries...
                  </div>
                ) : posts.length === 0 ? (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <p className="text-muted-foreground" data-testid="text-no-posts">
                        No diary entries yet. Create your first diary entry to get started!
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                      <Card key={post.id} className="hover-elevate" data-testid={`card-post-${post.id}`}>
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge 
                              variant={post.published ? "default" : "secondary"}
                              data-testid={`badge-status-${post.id}`}
                            >
                              {post.published ? "Published" : "Draft"}
                            </Badge>
                            <Badge variant="outline" data-testid={`badge-category-${post.id}`}>
                              {post.category}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg leading-tight" data-testid={`text-title-${post.id}`}>
                            {post.title}
                          </CardTitle>
                          <CardDescription data-testid={`text-media-type-${post.id}`}>
                            {post.media ? "Has media content" : "Text content"}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1" data-testid={`text-date-${post.id}`}>
                              <Calendar className="h-4 w-4" />
                              {new Date(post.createdAt!).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1" data-testid={`text-engagement-${post.id}`}>
                              <Eye className="h-4 w-4" />
                              {post.likes} likes
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleEdit(post)}
                              data-testid={`button-edit-${post.id}`}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleDelete(post.id)}
                              data-testid={`button-delete-${post.id}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}