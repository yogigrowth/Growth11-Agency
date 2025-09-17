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
  
  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        await apiRequest('/api/admin/status', 'GET', {});
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_authenticated', 'true');
      } catch (error) {
        setIsAuthenticated(false);
        sessionStorage.removeItem('admin_authenticated');
      }
    };
    
    checkAuthStatus();
  }, []);
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

  const handleLogin = async (data: LoginForm) => {
    try {
      const response = await apiRequest('/api/admin/login', 'POST', data) as any;
      
      if (response?.success) {
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
      await apiRequest('/api/admin/logout', 'POST', {});
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

  const form = useForm<InsertBlogPost>({
    resolver: zodResolver(insertBlogPostSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "",
      mediaType: "image",
      mediaUrl: "",
      published: false,
      likes: 0,
      comments: 0,
    },
  });

  // Fetch blog posts
  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  // Create blog post mutation
  const createPostMutation = useMutation({
    mutationFn: (data: InsertBlogPost) => apiRequest("/api/blog-posts", "POST", data),
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

  // Update blog post mutation
  const updatePostMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<InsertBlogPost> }) => 
      apiRequest(`/api/blog-posts/${id}`, "PATCH", data),
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

  // Delete blog post mutation
  const deletePostMutation = useMutation({
    mutationFn: (id: string) => apiRequest(`/api/blog-posts/${id}`, "DELETE"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog-posts"] });
      toast({ title: "Success", description: "Blog post deleted successfully!" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete blog post", variant: "destructive" });
    },
  });

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
      mediaType: (post.mediaType as "image" | "video") || "image",
      mediaUrl: post.mediaUrl || "",
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
    if (confirm("Are you sure you want to delete this blog post?")) {
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
                Blog Management
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-admin-description">
                Create, edit, and manage your Growth11 blog posts
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Create/Edit Form */}
              {isCreating && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle data-testid="text-form-title">
                      {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
                    </CardTitle>
                    <CardDescription>
                      {editingPost ? "Update your blog post details" : "Add a new blog post to your website"}
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
                                  <Input placeholder="Blog post title" {...field} data-testid="input-title" />
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
                          name="mediaType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Media Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-media-type">
                                    <SelectValue placeholder="Select media type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="image">Image</SelectItem>
                                  <SelectItem value="video">Video</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="content"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Content</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Full blog post content" 
                                  className="min-h-[300px]"
                                  {...field} 
                                  data-testid="textarea-content"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="mediaUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Media URL</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="https://example.com/media.jpg" 
                                  {...field}
                                  value={field.value || ""}
                                  data-testid="input-media-url"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

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
                    Create New Blog Post
                  </Button>
                </div>
              )}

              {/* Blog Posts List */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold" data-testid="text-posts-list">Existing Blog Posts</h2>
                
                {isLoading ? (
                  <div className="text-center py-8" data-testid="text-loading">
                    Loading blog posts...
                  </div>
                ) : posts.length === 0 ? (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <p className="text-muted-foreground" data-testid="text-no-posts">
                        No blog posts yet. Create your first blog post to get started!
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
                            {post.mediaType} content
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