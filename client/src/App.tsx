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
import Admin from "@/pages/Admin";
import Contact from "@/pages/Contact";
import WebsiteLanding from "@/pages/WebsiteLanding";
import AIVideosLanding from "@/pages/AIVideosLanding";
import SEOLanding from "@/pages/SEOLanding";
import SocialMediaPRLanding from "@/pages/SocialMediaPRLanding";
import InfluencerMarketingLanding from "@/pages/InfluencerMarketingLanding";
import PerformanceMarketingLanding from "@/pages/PerformanceMarketingLanding";
import ConversionRetentionLanding from "@/pages/ConversionRetentionLanding";
import ProductGrowthLanding from "@/pages/ProductGrowthLanding";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import BlogDetail from "@/pages/BlogDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/partners" component={Partners} />
      <Route path="/case-study" component={CaseStudy} />
      <Route path="/career" component={Career} />
      <Route path="/our-diary" component={Blog} />
      <Route path="/our-diary/:id" component={BlogDetail} />
      <Route path="/blog" component={() => { window.location.replace('/our-diary'); return null; }} />
      <Route path="/admin" component={Admin} />
      <Route path="/contact" component={Contact} />
      <Route path="/website-9999" component={WebsiteLanding} />
      <Route path="/ai-videos-10000" component={AIVideosLanding} />
      <Route path="/seo-landing" component={SEOLanding} />
      <Route path="/social-media-pr-landing" component={SocialMediaPRLanding} />
      <Route path="/influencer-marketing-landing" component={InfluencerMarketingLanding} />
      <Route path="/performance-marketing-landing" component={PerformanceMarketingLanding} />
      <Route path="/conversion-retention-landing" component={ConversionRetentionLanding} />
      <Route path="/product-growth-landing" component={ProductGrowthLanding} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
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
