import { Seo } from "../components/Seo";
import { Button } from "../components/ui/button";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | 5BROS Clothing"
        description="Read ZamZam Enterprises' privacy notice for website visitors, customers, and business partners."
        canonicalPath="/privacy"
        keywords="privacy policy clothing manufacturer, data privacy apparel website"
      />

      <section className="pt-40 pb-20 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Privacy Policy
          </p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl max-w-3xl">
            Privacy policy
          </h1>
          <p className="mt-5 max-w-2xl text-black">
            We respect your privacy and are committed to protecting the personal and business information of our customers, dealers, distributors, wholesalers, retailers, institutional buyers, and business partners worldwide.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-luxe max-w-4xl space-y-8 text-black leading-relaxed">
          <p>
            This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you visit the 5BROS website or conduct business with us.
          </p>

          <div>
            <h2 className="font-display text-2xl text-charcoal">1. Scope</h2>
            <p className="mt-3">
              This Privacy Policy applies to all visitors, customers, dealers, distributors, wholesalers, retailers, and business partners located in India and other countries who access our website or use our products and services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">2. Information We Collect</h2>
            <p className="mt-3">
              We may collect the following information:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Name, company name, and designation</li>
              <li>Email address and mobile/telephone number</li>
              <li>Billing, shipping, and business addresses</li>
              <li>GSTIN, VAT, Tax Identification Number (TIN), or other applicable business registration details</li>
              <li>Import–Export Code (IEC) or other trade-related information, where applicable</li>
              <li>Order history, quotations, invoices, and payment details</li>
              <li>Website usage information such as IP address, browser type, device information, cookies, and analytics data</li>
              <li>Any information voluntarily provided through enquiry forms, emails, WhatsApp, or other communication channels</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">3. How We Use Your Information</h2>
            <p className="mt-3">Your information may be used to:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Process enquiries, quotations, orders, and deliveries</li>
              <li>Verify business credentials and customer identity</li>
              <li>Provide customer support and after-sales service</li>
              <li>Improve our products, website, and business operations</li>
              <li>Send order updates, promotional offers, catalogues, and business communications (where permitted by applicable law)</li>
              <li>Comply with legal, regulatory, taxation, customs, and export requirements</li>
              <li>Prevent fraud and protect our legitimate business interests</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">4. Sharing of Information</h2>
            <p className="mt-3">
              We do not sell, rent, or trade your personal or business information.
            </p>
            <p className="mt-3">
              We may share information with logistics, courier, freight forwarding, customs, and shipping partners; payment service providers and financial institutions; IT service providers, website hosting providers, and software vendors; government authorities, customs authorities, courts, or regulatory agencies where required by applicable law; and professional advisers such as auditors, legal advisers, and accountants.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">5. International Data Transfers</h2>
            <p className="mt-3">
              As we serve customers in India and other countries, your information may be transferred to, stored, or processed in countries where we or our service providers operate. We take reasonable measures to ensure that such transfers are carried out securely and in accordance with applicable data protection laws.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">6. Cookies and Analytics</h2>
            <p className="mt-3">
              Our website may use cookies and similar technologies to improve user experience, analyse website traffic, remember preferences, and enhance website performance. You may disable cookies through your browser settings, although some features of the website may not function properly.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">7. Data Security</h2>
            <p className="mt-3">
              We implement reasonable administrative, technical, and organisational safeguards to protect your information against unauthorised access, loss, misuse, alteration, or disclosure. However, no method of internet transmission or electronic storage is completely secure.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">8. Data Retention</h2>
            <p className="mt-3">
              We retain information only for as long as necessary to fulfil business purposes, contractual obligations, legal and regulatory requirements, taxation, accounting, dispute resolution, and enforcement of our agreements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">9. Your Rights</h2>
            <p className="mt-3">
              Subject to applicable laws in your country, you may have the right to request access to your personal information, request correction of inaccurate or incomplete information, request deletion of your information where legally permitted, withdraw consent where processing is based on consent, and opt out of marketing communications at any time.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">10. Third-Party Websites</h2>
            <p className="mt-3">
              Our website may contain links to third-party websites. ZamZam Enterprises is not responsible for the privacy practices, content, or security of such external websites.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">11. Children's Privacy</h2>
            <p className="mt-3">
              Our website and services are intended solely for business and commercial purposes and are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">12. Changes to This Privacy Policy</h2>
            <p className="mt-3">
              We reserve the right to update or modify this Privacy Policy at any time. The revised version will become effective upon publication on our website. Continued use of our website or services after such changes constitutes acceptance of the revised Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">13. Governing Law</h2>
            <p className="mt-3">
              For customers in India, this Privacy Policy shall be governed by the laws of India. For international customers, applicable local laws may also apply where required. Any disputes relating to business with ZamZam Enterprises shall, unless otherwise agreed in writing, be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India.
            </p>
          </div>

          <div className="pt-10 mt-8 border-t border-border">
            <h2 className="font-display text-2xl text-charcoal">14. Contact Us</h2>
            <p className="mt-3 text-base md:text-lg text-black">
              ZamZam Enterprises<br />
              Brand: 5BROS<br />
              Mumbai, Maharashtra, India
            </p>
            <p className="mt-3 text-base md:text-lg text-black">
              For any questions regarding this Privacy Policy or your personal information, please contact us through the official contact details provided on our website.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
