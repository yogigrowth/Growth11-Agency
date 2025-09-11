import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4" data-testid="badge-terms-of-service">
              Legal Information
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-terms-of-service-title">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground" data-testid="text-terms-of-service-subtitle">
              Effective Date: September 11, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using the services provided by Yogi Growth LLP ("Company," "we," "our," or "us"), 
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
                please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                Yogi Growth LLP provides digital marketing and technology services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Website development and design</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Social media marketing and PR</li>
                <li>Performance marketing campaigns</li>
                <li>Influencer marketing</li>
                <li>AI video creation</li>
                <li>Product management and growth strategies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Service Agreement and Payments</h2>
              <h3 className="text-xl font-semibold mb-3">Project Scope</h3>
              <p className="text-muted-foreground mb-4">
                All services will be provided according to the agreed project scope, timeline, and deliverables as outlined in individual service agreements.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Payment terms will be specified in individual service agreements</li>
                <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to the specific terms of each service agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                To ensure successful project delivery, clients agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Provide accurate and complete information</li>
                <li>Respond to requests for feedback and approvals in a timely manner</li>
                <li>Provide necessary access to accounts, platforms, and resources</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <h3 className="text-xl font-semibold mb-3">Client-Owned Content</h3>
              <p className="text-muted-foreground mb-4">
                Clients retain ownership of their existing intellectual property, including trademarks, copyrights, and proprietary content.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Work Product</h3>
              <p className="text-muted-foreground mb-4">
                Upon full payment, clients will own the final deliverables created specifically for their project. 
                We retain the right to use general methodologies, techniques, and know-how developed during the engagement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground mb-4">
                We respect the confidential nature of client information and agree to maintain confidentiality regarding proprietary business information, 
                trade secrets, and other sensitive data shared during our engagement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted by law, Yogi Growth LLP shall not be liable for any indirect, incidental, 
                special, or consequential damages arising out of or relating to our services. Our total liability shall not exceed 
                the total amount paid by the client for the specific services in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Service Modifications and Termination</h2>
              <h3 className="text-xl font-semibold mb-3">Modifications</h3>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify our services and these Terms at any time. Material changes will be communicated to clients in advance.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Termination</h3>
              <p className="text-muted-foreground mb-4">
                Either party may terminate services with written notice. Termination terms and conditions will be specified in individual service agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of Indian courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions regarding these Terms of Service, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold mb-2">Yogi Growth LLP</p>
                <p className="text-muted-foreground mb-1">Email: Satya.yogigrowth@gmail.com</p>
                <p className="text-muted-foreground">Phone: +91 70144 31277</p>
              </div>
            </section>

            <section className="mb-8">
              <p className="text-sm text-muted-foreground">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}