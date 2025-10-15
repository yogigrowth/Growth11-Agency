import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { blogPosts } from "../shared/schema";
import "dotenv/config";

const seedBlogPosts = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is required");
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const db = drizzle(pool);

  console.log("Seeding blog posts...");

  const seedData = [
    {
      title: "How We Scaled Nojoto to 80L MAU: Lessons in Product-Led Growth",
      content: "Product-led growth has become the cornerstone of successful scaling strategies. In our journey with Nojoto, we discovered that the key to reaching 80 lakh Monthly Active Users lies in creating a product that sells itself through exceptional user experience and organic growth mechanics.\n\nOur strategy focused on three core pillars: user acquisition through viral loops, retention through engagement mechanics, and monetization through value-first approaches. Each decision was data-driven, and every feature was built with the user's natural workflow in mind.\n\nThe results speak for themselves - 80 lakh MAU with sustainable growth metrics and healthy unit economics.",
      category: "Growth Strategy",
      media: null,
      published: true,
      likes: 127,
      comments: 0
    },
    {
      title: "Performance Marketing for D2C Brands: A Complete Guide",
      content: "Performance marketing has become the backbone of successful D2C brands. In our experience helping businesses scale at Growth11 Ajmer, we've seen how the right performance marketing strategy can transform a small business into a market leader.\n\nFrom Facebook Ads to Google Shopping, from influencer collaborations to affiliate networks - the performance marketing landscape is vast. But success comes from understanding your unit economics, optimizing your funnel, and scaling what works.\n\nIn this comprehensive guide, we break down the exact frameworks we use to help D2C brands achieve profitability and scale sustainably.",
      category: "Marketing",
      media: null,
      published: true,
      likes: 143,
      comments: 0
    },
    {
      title: "Building Conversion Funnels That Actually Convert",
      content: "Conversion funnels are the backbone of any successful digital marketing strategy. At Growth11, we've helped dozens of companies optimize their funnels to achieve conversion rates that seemed impossible before our intervention.\n\nThe secret? Understanding user psychology, removing friction points, and testing relentlessly. A great funnel doesn't just move users from point A to point B - it guides them through a journey that feels natural and valuable.\n\nWe've seen conversion rate improvements of 300%+ by applying these principles consistently across awareness, consideration, and decision stages.",
      category: "Conversion",
      media: null,
      published: true,
      likes: 118,
      comments: 0
    },
    {
      title: "The Future of AI in Digital Marketing",
      content: "Artificial Intelligence is revolutionizing digital marketing in ways we couldn't imagine just a few years ago. From personalized content creation to predictive analytics, AI is helping businesses connect with their customers more effectively than ever before.\n\nAt Growth11, we're already seeing the impact: AI-powered ad optimization, automated content generation, predictive customer behavior modeling, and intelligent chatbots that actually understand context.\n\nThe future isn't coming - it's already here. Businesses that embrace AI now will have a massive competitive advantage in the coming years.",
      category: "Technology",
      media: null,
      published: true,
      likes: 135,
      comments: 0
    }
  ];

  try {
    // Insert seed data
    const result = await db
      .insert(blogPosts)
      .values(seedData)
      .returning();

    console.log(`✅ Successfully seeded ${result.length} blog posts`);
    result.forEach(post => {
      console.log(`   - ${post.title}`);
    });
  } catch (error) {
    console.error("❌ Error seeding blog posts:", error);
    throw error;
  }
};

seedBlogPosts()
  .then(() => {
    console.log("✅ Seeding complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  });
