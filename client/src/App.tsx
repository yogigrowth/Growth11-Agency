import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Partners from "@/pages/Partners";
import CaseStudy from "@/pages/CaseStudy";
import Career from "@/pages/Career";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/partners" component={Partners} />
      <Route path="/case-study" component={CaseStudy} />
      <Route path="/career" component={Career} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <FloatingContactButtons />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
