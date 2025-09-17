import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Heart, MessageCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

// Import generated blog images
import growthWorkspaceImg from "@assets/generated_images/Digital_marketing_workspace_setup_7653e34b.png";
import performanceMarketingImg from "@assets/generated_images/Performance_marketing_results_display_301089da.png";
import conversionFunnelImg from "@assets/generated_images/Conversion_funnel_optimization_charts_a2d062d6.png";
import aiMarketingImg from "@assets/generated_images/AI_marketing_tools_interface_49f50fcd.png";

type BlogPost = {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  likes: number;
};

// Blog Detail Schema Markup Component
function BlogPostSchema({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.content.substring(0, 160),
    "image": post.mediaUrl,
    "author": {
      "@type": "Organization",
      "name": "Growth11"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Growth11",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growth11.in/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How We Scaled Nojoto to 80L MAU: Lessons in Product-Led Growth",
    category: "Growth Strategy",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    mediaType: "image",
    mediaUrl: growthWorkspaceImg,
    likes: 127,
    content: `Building a product from zero to 80 lakh monthly active users is no small feat. At Nojoto, we learned invaluable lessons about product-led growth that we now apply to help our clients at Growth11 Ajmer achieve similar scale.

## The Bootstrap Beginning

In 2017, when we started Nojoto, we had a clear vision: create a platform where people could share their stories through short-form content. But having a vision and building a scalable product are two very different challenges.

Our journey began with understanding our core user behavior. We discovered that storytelling isn't just about content creation – it's about community, engagement, and authentic connection.

## Key Growth Strategies That Worked

### 1. Community-First Approach
We prioritized building a strong community over rapid user acquisition. This meant:
- Fostering authentic relationships between creators
- Creating features that encouraged meaningful interactions
- Building moderation systems that maintained quality

### 2. Data-Driven Product Decisions
Every feature we built was backed by user behavior data:
- A/B testing new functionality with small user groups
- Analyzing retention cohorts to understand what kept users engaged
- Using analytics to identify and fix drop-off points in the user journey

### 3. Performance Marketing at Scale
Once we had product-market fit, we invested heavily in performance marketing:
- Multi-channel acquisition strategies across social platforms
- Conversion funnel optimization that improved our cost per acquisition by 40%
- Influencer partnerships that brought authentic user growth

## Lessons for D2C Brands

The principles we applied at Nojoto directly translate to D2C brands:

**Focus on Retention Before Acquisition**: It's easier to grow revenue from existing customers than to acquire new ones. We achieved 65% monthly active user retention by month 3.

**Build for Virality**: Every feature should have a social component. At Nojoto, users sharing their content outside the platform brought 30% of new users organically.

**Measure What Matters**: Vanity metrics don't build businesses. Focus on metrics that directly correlate with revenue and user lifetime value.

## The Growth11 Approach

Today at Growth11, we help businesses implement these same strategies:
- Performance marketing campaigns that scale profitably
- Product analytics setup to measure what matters
- Community building strategies that create loyal customer bases
- Conversion optimization that turns visitors into customers

## Key Takeaways

1. **Product-Market Fit First**: No amount of marketing can save a product users don't love
2. **Community Builds Retention**: Engaged communities have 5x higher lifetime value
3. **Data Drives Decisions**: Every optimization should be backed by user behavior data
4. **Scale Systematically**: Build systems that can handle growth before you need them

The journey from bootstrap to 80L MAU taught us that sustainable growth comes from understanding your users deeply, building products they love, and scaling systematically.

At Growth11 Ajmer, we're now helping other entrepreneurs and businesses apply these lessons to achieve similar growth trajectories in their respective markets.

---

*Ready to scale your business with proven growth strategies? Connect with Growth11 Ajmer for a free growth consultation.*`
  },
  {
    id: "2", 
    title: "Performance Marketing for D2C Brands: A Complete Guide",
    category: "Marketing",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    mediaType: "image",
    mediaUrl: performanceMarketingImg,
    likes: 143,
    content: `Performance marketing has become the backbone of successful D2C brands. In our experience helping businesses scale at Growth11 Ajmer, we've seen how the right performance marketing strategy can transform a small business into a market leader.

## What is Performance Marketing?

Performance marketing is a data-driven approach where you pay for specific actions - clicks, leads, or sales. Unlike traditional advertising, every rupee spent is measurable and accountable.

## The D2C Performance Marketing Framework

### 1. Foundation Setup
Before running any ads, establish these fundamentals:

**Analytics Tracking**
- Google Analytics 4 with enhanced ecommerce
- Facebook Pixel with custom conversions
- Server-side tracking for iOS 14.5+ privacy changes

**Conversion Funnel Mapping**
- Awareness → Interest → Consideration → Purchase
- Identify drop-off points and optimization opportunities
- Set up conversion tracking for each stage

### 2. Channel Strategy

**Google Ads**
- Search campaigns for high-intent keywords
- Shopping campaigns for product visibility  
- Display remarketing for abandoned cart recovery
- YouTube ads for brand awareness and product demos

**Meta Ads (Facebook & Instagram)**
- Lookalike audiences based on your best customers
- Interest targeting for new customer acquisition
- Retargeting campaigns for website visitors
- Catalog ads for dynamic product promotion

**Other Channels**
- LinkedIn for B2B products
- Pinterest for lifestyle brands
- Amazon PPC for marketplace presence

### 3. Creative Strategy

**Video Content**
- Product demos and unboxing videos
- Customer testimonials and reviews
- Behind-the-scenes brand stories
- User-generated content campaigns

**Static Creatives**
- Product photography with lifestyle context
- Before/after comparisons
- Feature callouts and benefit-focused copy
- Social proof and trust signals

## Campaign Optimization Tactics

### 1. Audience Segmentation
- New vs. returning customers
- Purchase behavior segments
- Geographic and demographic splits
- Lookalike audiences at different percentages (1%, 2%, 5%)

### 2. Budget Allocation
- 70% to proven winning campaigns
- 20% to scaling successful ad sets
- 10% to testing new audiences and creatives

### 3. Bidding Strategies
- Start with manual bidding to understand costs
- Move to automated bidding once you have data
- Use target ROAS bidding for mature campaigns

## Key Metrics to Track

### Primary KPIs
- **ROAS (Return on Ad Spend)**: Revenue / Ad Spend
- **CPA (Cost Per Acquisition)**: Ad Spend / Number of Customers
- **LTV:CAC Ratio**: Customer Lifetime Value / Customer Acquisition Cost

### Secondary Metrics
- Click-through rates (CTR)
- Conversion rates by channel
- Average order value (AOV)
- Time to payback (how long to recover acquisition cost)

## Common Mistakes to Avoid

1. **Optimizing Too Early**: Let campaigns run for at least 7 days before making changes
2. **Ignoring Attribution**: Use attribution modeling to understand the customer journey
3. **Single Channel Focus**: Diversify across multiple channels for stability
4. **Creative Fatigue**: Refresh ad creatives every 2-3 weeks
5. **Not Testing**: Always have 2-3 ad sets testing different audiences or creatives

## Growth11's Performance Marketing Results

Here are some results we've achieved for our clients:

- **Fashion D2C Brand**: 4.2x ROAS, 65% reduction in CPA
- **Health Supplement Brand**: 380% increase in online sales
- **Home Decor Brand**: 250% improvement in conversion rate

## Advanced Strategies

### 1. Customer Journey Optimization
Map out the entire customer journey and create touchpoints at each stage:
- Awareness: Blog content and social media
- Consideration: Email nurture sequences
- Decision: Retargeting ads with special offers
- Retention: Loyalty programs and referral systems

### 2. Seasonal Planning
Plan campaigns around:
- Festival seasons (Diwali, Christmas, etc.)
- Industry-specific seasons
- Black Friday and sale periods
- New product launches

### 3. Influencer Integration
- Micro-influencers for authentic engagement
- Macro-influencers for reach and brand awareness  
- Long-term brand partnerships vs one-off campaigns
- Performance-based influencer compensation

## Getting Started: Your 90-Day Plan

**Days 1-30: Foundation**
- Set up tracking and analytics
- Create customer personas
- Develop initial creative assets
- Launch small test campaigns

**Days 31-60: Optimization**
- Analyze performance data
- Scale winning campaigns
- Pause underperforming ads
- Expand to additional channels

**Days 61-90: Scale**
- Increase budgets on profitable campaigns
- Test new audiences and creatives
- Implement advanced strategies
- Plan for sustainable growth

## Conclusion

Performance marketing success comes from systematic testing, data-driven decisions, and continuous optimization. At Growth11 Ajmer, we've helped numerous D2C brands achieve profitable growth through strategic performance marketing.

The key is starting with solid fundamentals, testing consistently, and scaling what works. Remember, every brand is different - what works for one may not work for another. The secret is finding your unique formula through disciplined experimentation.

---

*Ready to scale your D2C brand with performance marketing? Contact Growth11 for a custom strategy consultation.*`
  },
  {
    id: "3",
    title: "Building Conversion Funnels That Actually Convert",
    category: "Conversion",
    date: "Dec 5, 2024", 
    readTime: "10 min read",
    mediaType: "image",
    mediaUrl: conversionFunnelImg,
    likes: 118,
    content: `A well-designed conversion funnel is the difference between a website that gets traffic and one that generates revenue. At Growth11 Ajmer, we've optimized hundreds of conversion funnels, and here's what we've learned works.

## Understanding Conversion Funnels

A conversion funnel maps the journey visitors take from first discovering your brand to becoming paying customers. Each stage requires different strategies and optimizations.

## The Modern Conversion Funnel

### 1. Awareness Stage
**Goal**: Attract the right audience
**Tactics**:
- SEO-optimized blog content
- Social media presence
- Paid advertising campaigns
- Influencer partnerships

**Key Metrics**:
- Traffic volume and sources
- Brand awareness surveys
- Social media reach and engagement

### 2. Interest Stage  
**Goal**: Capture attention and build trust
**Tactics**:
- Valuable content offers (ebooks, guides)
- Email list building
- Social proof and testimonials
- Product demonstrations

**Key Metrics**:
- Email signup rates
- Content engagement metrics
- Time on site and pages per session

### 3. Consideration Stage
**Goal**: Nurture leads and address objections
**Tactics**:
- Email nurture sequences
- Retargeting campaigns
- Free trials or samples
- Comparison guides and case studies

**Key Metrics**:
- Email open and click rates
- Retargeting ad performance
- Lead quality scores

### 4. Purchase Stage
**Goal**: Convert prospects into customers  
**Tactics**:
- Streamlined checkout process
- Limited-time offers
- Exit-intent popups
- Trust signals (security badges, guarantees)

**Key Metrics**:
- Conversion rate
- Average order value
- Cart abandonment rate

### 5. Retention Stage
**Goal**: Turn customers into repeat buyers and advocates
**Tactics**:
- Onboarding sequences
- Loyalty programs
- Referral systems
- Customer success initiatives

**Key Metrics**:
- Customer lifetime value
- Repeat purchase rate
- Net promoter score

## Funnel Optimization Strategies

### Landing Page Optimization

**Headlines That Convert**
- Focus on benefits, not features
- Use power words and emotional triggers
- Test different value propositions
- Match ad copy to landing page headlines

**Social Proof Elements**
- Customer testimonials with photos
- Trust badges and security certifications
- User reviews and ratings
- Media mentions and awards

**Call-to-Action (CTA) Optimization**
- Use action-oriented language
- Create urgency and scarcity
- Test button colors, sizes, and placement
- Ensure CTAs are mobile-friendly

### Email Marketing Optimization

**Welcome Series**
- Send immediately after signup
- Set expectations for future emails
- Provide immediate value
- Guide new subscribers to key content

**Nurture Sequences**
- Segment based on interests and behavior
- Provide valuable, non-promotional content
- Use storytelling to build connection
- Include soft calls-to-action

**Abandoned Cart Recovery**
- Send within 1 hour of abandonment
- Include product images and details
- Offer incentives (discounts, free shipping)
- Create urgency with limited-time offers

### Checkout Optimization

**Reduce Friction**
- Minimize form fields
- Offer guest checkout option
- Display progress indicators
- Ensure mobile optimization

**Build Trust**
- Show security badges
- Display money-back guarantees
- Include customer service contact info
- Use trusted payment methods

**Combat Abandonment**
- Offer multiple payment options
- Show total costs upfront
- Provide exit-intent offers
- Send follow-up emails for incomplete purchases

## Advanced Funnel Strategies

### 1. Multi-Channel Funnels
Don't rely on a single channel. Create touchpoints across:
- Organic search (SEO)
- Paid search (Google Ads)
- Social media (organic and paid)
- Email marketing
- Content marketing
- Influencer partnerships

### 2. Behavioral Triggers
Set up automated responses based on user behavior:
- Welcome emails for new subscribers
- Browse abandonment campaigns
- Win-back campaigns for inactive users
- Cross-sell campaigns for recent purchasers

### 3. Personalization
Use data to create personalized experiences:
- Dynamic content based on past behavior
- Personalized product recommendations
- Customized email content
- Tailored landing pages for different segments

## Measuring Funnel Performance

### Key Conversion Metrics

**Overall Funnel Metrics**
- Overall conversion rate (visitors to customers)
- Average customer acquisition cost
- Customer lifetime value
- Return on marketing investment

**Stage-Specific Metrics**
- Traffic-to-lead conversion rate
- Lead-to-customer conversion rate
- Email open and click rates
- Landing page conversion rates

### Analytics Setup

**Google Analytics 4**
- Set up enhanced ecommerce tracking
- Create custom conversions for each funnel stage
- Use attribution modeling to understand the customer journey
- Set up audience segments for retargeting

**Heatmap Tools**
- Hotjar or Crazy Egg for user behavior insights
- Identify where users drop off
- Understand how users interact with your pages
- Optimize based on actual user behavior

## Common Funnel Problems and Solutions

### Problem: High Traffic, Low Conversions
**Solutions**:
- Review traffic quality and sources
- Optimize landing pages for relevance
- Improve value proposition clarity
- Add social proof and trust signals

### Problem: High Cart Abandonment
**Solutions**:
- Simplify checkout process
- Show all costs upfront
- Offer multiple payment options
- Implement cart abandonment email sequences

### Problem: Low Email Engagement
**Solutions**:
- Segment your email list
- Improve subject lines
- Send emails at optimal times
- Provide more value in content

## Real-World Results

Here are some funnel optimizations we've implemented at Growth11:

**E-commerce Fashion Brand**
- Implemented abandoned cart recovery: 25% recovery rate
- Optimized product pages: 35% increase in conversion rate
- Added urgency elements: 20% boost in average order value

**SaaS Company**
- Redesigned signup flow: 40% improvement in trial conversions
- Implemented email nurture sequence: 60% increase in trial-to-paid conversion
- Added social proof: 15% lift in landing page conversions

## Your Funnel Optimization Checklist

✅ **Audit Current Performance**
- Identify bottlenecks in your existing funnel
- Analyze drop-off points
- Review current conversion rates by stage

✅ **Optimize High-Impact Areas First**
- Focus on stages with the biggest conversion gaps
- Start with quick wins before complex changes
- Test one element at a time

✅ **Set Up Proper Tracking**
- Implement comprehensive analytics
- Create conversion goals for each stage
- Set up attribution modeling

✅ **Create Testing Plan**
- Prioritize tests based on potential impact
- Run tests for statistical significance
- Document results for future reference

## Conclusion

Building conversion funnels that actually convert requires understanding your customers deeply, removing friction at every step, and continuously optimizing based on data.

At Growth11 Ajmer, we've seen how small improvements in conversion rates can dramatically impact revenue. The key is taking a systematic approach, focusing on user experience, and never stopping the optimization process.

Remember: Your funnel is never "finished" - it's an ongoing optimization project that can always be improved.

---

*Need help optimizing your conversion funnel? Growth11 offers comprehensive funnel audits and optimization services. Contact us for a free consultation.*`
  },
  {
    id: "4",
    title: "The Future of AI in Digital Marketing",
    category: "Technology", 
    date: "Nov 28, 2024",
    readTime: "6 min read",
    mediaType: "image",
    mediaUrl: aiMarketingImg,
    likes: 135,
    content: `Artificial Intelligence is reshaping digital marketing at breakneck speed. At Growth11 Ajmer, we're at the forefront of implementing AI solutions for our clients. Here's what the future holds and how to prepare for it.

## The Current AI Marketing Landscape

AI in marketing isn't just a futuristic concept – it's happening right now. From chatbots to predictive analytics, AI tools are already transforming how we engage with customers and optimize campaigns.

## Key AI Applications in Marketing Today

### 1. Personalization at Scale
AI enables hyper-personalization that was impossible with traditional methods:

**Dynamic Content Creation**
- Personalized email subject lines and content
- Custom product recommendations
- Tailored website experiences based on user behavior
- Dynamic ad creative optimization

**Predictive Customer Behavior**
- Identify customers likely to churn
- Predict optimal purchase timing
- Forecast customer lifetime value
- Segment audiences based on future behavior

### 2. Campaign Optimization
AI is revolutionizing how we run and optimize marketing campaigns:

**Automated Bidding**
- Real-time bid adjustments based on conversion probability
- Budget allocation across channels and campaigns
- Performance prediction and optimization recommendations

**Creative Testing and Optimization**
- Automated A/B testing of ad creatives
- Performance prediction for new creative concepts
- Dynamic creative optimization based on audience segments

### 3. Customer Service Evolution
AI-powered customer service is becoming indistinguishable from human interaction:

**Advanced Chatbots**
- Natural language processing for better understanding
- Context awareness across conversation history
- Seamless handoff to human agents when needed
- Multi-language support with cultural sensitivity

## Emerging AI Trends for 2025 and Beyond

### 1. Generative AI Marketing
**AI Content Creation**
- Blog posts, social media content, and email campaigns
- Video script writing and basic video creation
- Podcast scripts and audio content
- SEO-optimized content at scale

**Visual Content Generation**
- Custom images for specific campaigns
- Product photos in different settings
- Brand-consistent design assets
- Video thumbnails and social media graphics

### 2. Voice and Conversational AI
**Voice Search Optimization**
- Content optimized for voice queries
- Local SEO for voice search
- Featured snippet optimization
- Conversational keyword targeting

**Advanced Virtual Assistants**
- AI sales representatives for complex B2B sales
- Personal shopping assistants for e-commerce
- AI-powered customer success managers
- Virtual event hosts and moderators

### 3. Predictive Marketing Intelligence
**Market Trend Prediction**
- Forecast industry trends and consumer behavior changes
- Predict viral content and trending topics
- Identify emerging market opportunities
- Competitive intelligence and strategy recommendations

**Customer Journey Optimization**
- Predict optimal touchpoints for each customer
- Personalized customer journey mapping
- Dynamic funnel optimization based on individual behavior
- Lifetime value optimization strategies

## How Growth11 is Implementing AI

At Growth11 Ajmer, we're already using AI to drive better results for our clients:

### Current AI Implementations

**Performance Marketing**
- Automated bid management across Google and Meta platforms
- Predictive audience creation and lookalike modeling
- Creative performance prediction and optimization
- Real-time campaign budget reallocation

**Content Marketing**
- AI-assisted content ideation and planning
- SEO optimization using natural language processing
- Social media post optimization for engagement
- Email subject line and content optimization

**Analytics and Insights**
- Automated reporting with AI-generated insights
- Anomaly detection in campaign performance
- Predictive analytics for customer behavior
- Attribution modeling using machine learning

### Upcoming AI Integrations

**Advanced Personalization Engine**
- Real-time website personalization
- Dynamic email content based on behavior
- Personalized video content creation
- AI-powered product recommendations

**Predictive Customer Success**
- Churn prediction and prevention campaigns
- Upselling and cross-selling optimization
- Customer health scoring
- Automated retention campaigns

## Preparing for the AI Marketing Future

### 1. Data Foundation
**Quality Data Collection**
- Implement first-party data collection strategies
- Ensure data accuracy and consistency
- Build comprehensive customer profiles
- Maintain data privacy and compliance

**Data Integration**
- Connect all marketing touchpoints
- Create unified customer data platforms
- Implement real-time data synchronization
- Build scalable data infrastructure

### 2. Skill Development
**AI Literacy for Marketers**
- Understand AI capabilities and limitations
- Learn to work with AI tools effectively
- Develop prompt engineering skills
- Stay updated on AI developments

**Technical Integration**
- Partner with AI-savvy development teams
- Invest in marketing technology stack upgrades
- Build internal AI expertise
- Create testing and experimentation frameworks

### 3. Ethical AI Implementation
**Responsible AI Use**
- Ensure transparency in AI-driven decisions
- Maintain human oversight of AI systems
- Protect customer privacy and data
- Avoid bias in AI algorithms

## Challenges and Considerations

### 1. Data Privacy and Ethics
- Balancing personalization with privacy
- Ensuring AI transparency and explainability
- Managing consent and data usage
- Building customer trust in AI systems

### 2. Technology Integration
- Choosing the right AI tools and platforms
- Integrating AI with existing marketing stack
- Managing costs and ROI of AI implementations
- Training teams on new AI technologies

### 3. Human-AI Collaboration
- Defining roles for humans vs AI
- Maintaining creative and strategic oversight
- Building AI-human feedback loops
- Preserving brand voice and authenticity

## The Growth11 AI Advantage

We help businesses navigate the AI marketing landscape by:

**Strategic AI Implementation**
- AI readiness assessment
- Custom AI strategy development
- Technology selection and integration
- Performance measurement and optimization

**Ongoing AI Optimization**
- Continuous learning and improvement
- Regular AI tool evaluation and updates
- Performance monitoring and reporting
- Team training and skill development

## Conclusion

The future of AI in digital marketing is incredibly exciting. While we're already seeing significant benefits from current AI applications, the next few years will bring even more transformative changes.

The key to success is starting now – building the data foundation, developing the right skills, and partnering with experts who understand both AI capabilities and marketing strategy.

At Growth11 Ajmer, we're committed to staying at the forefront of AI marketing innovations, helping our clients leverage these powerful tools to achieve unprecedented growth.

The question isn't whether AI will transform your marketing – it's whether you'll be ready to harness its power.

---

*Ready to explore AI marketing opportunities for your business? Contact Growth11 for an AI readiness assessment and strategy session.*`
  }
];

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [location, navigate] = useLocation();
  const [likes, setLikes] = useState(0);

  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    if (post) {
      setLikes(post.likes);
    }
  }, [post]);

  useSEO({
    title: post ? `${post.title} - Growth11 Ajmer Blog` : "Blog Post - Growth11 Ajmer",
    description: post ? post.content.substring(0, 160) : "Growth stories and insights from Growth11 Ajmer",
    ogTitle: post ? post.title : "Blog Post - Growth11 Ajmer",
    ogDescription: post ? post.content.substring(0, 160) : "Growth stories and insights from Growth11 Ajmer"
  });

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/our-diary")} data-testid="button-back-to-blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleBackToBlog = () => {
    navigate("/our-diary");
  };

  // Convert content paragraphs to JSX
  const renderContent = (content: string) => {
    const sections = content.split('\n\n');
    return sections.map((section, index) => {
      if (section.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{section.replace('## ', '')}</h2>;
      } else if (section.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{section.replace('### ', '')}</h3>;
      } else if (section.startsWith('**') && section.endsWith('**')) {
        return <h4 key={index} className="text-lg font-semibold mt-4 mb-2">{section.replace(/\*\*/g, '')}</h4>;
      } else if (section.startsWith('- ')) {
        const items = section.split('\n').filter(item => item.startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-muted-foreground">{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      } else if (section.startsWith('✅ ')) {
        const items = section.split('\n').filter(item => item.startsWith('✅ '));
        return (
          <ul key={index} className="space-y-2 mb-4">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-green-500 mt-0.5">✅</span>
                {item.replace('✅ ', '')}
              </li>
            ))}
          </ul>
        );
      } else if (section.includes('*') && !section.startsWith('*')) {
        // Handle italic text emphasis within paragraphs
        const parts = section.split('*');
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {parts.map((part, partIndex) => 
              partIndex % 2 === 1 ? <em key={partIndex}>{part}</em> : part
            )}
          </p>
        );
      } else if (section.startsWith('---')) {
        return <hr key={index} className="my-8 border-border" />;
      } else if (section.trim()) {
        return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{section}</p>;
      }
      return null;
    }).filter(Boolean);
  };

  return (
    <div className="min-h-screen">
      {post && <BlogPostSchema post={post} />}
      <Navigation />
      <main>
        <article className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={handleBackToBlog}
                className="hover-elevate"
                data-testid="button-back-to-blog"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[2/1] overflow-hidden rounded-lg mb-8">
              {post.mediaType === "video" ? (
                <video
                  src={post.mediaUrl}
                  className="w-full h-full object-cover"
                  controls
                  data-testid="video-blog-detail-hero"
                />
              ) : (
                <img 
                  src={post.mediaUrl}
                  alt={`${post.title} - Growth11 digital marketing blog post`}
                  className="w-full h-full object-cover"
                  data-testid="img-blog-detail-hero"
                />
              )}
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm" data-testid="badge-blog-detail-category">
                  {post.category}
                </Badge>
              </div>
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-blog-detail-title">
                {post.title}
              </h1>
              
              {/* Meta info */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2" data-testid="text-blog-detail-date">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2" data-testid="text-blog-detail-read-time">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              {/* Social Interactions */}
              <div className="flex items-center gap-4 pb-6 border-b border-border">
                <button 
                  onClick={handleLike}
                  className="flex items-center gap-2 hover:scale-105 transition-transform"
                  data-testid="button-blog-detail-like"
                >
                  <Heart className="h-5 w-5 hover:text-red-500 transition-colors" />
                  <span className="font-medium">{likes}</span>
                </button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="h-5 w-5" />
                  <span>Comments</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none" data-testid="content-blog-detail-body">
              {renderContent(post.content)}
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-muted/50 rounded-lg border">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Ready to grow your business?</h3>
                <p className="text-muted-foreground mb-4">
                  Get expert growth strategies and digital marketing solutions from Growth11 Ajmer.
                </p>
                <Button 
                  onClick={() => navigate("/contact")}
                  data-testid="button-blog-detail-cta"
                  className="hover-elevate"
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-8 text-center">
              <Button 
                variant="outline"
                onClick={handleBackToBlog}
                className="hover-elevate"
                data-testid="button-back-to-blog-bottom"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Posts
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}