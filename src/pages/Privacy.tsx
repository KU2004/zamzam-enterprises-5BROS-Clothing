import { Seo } from "../components/Seo";

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy | 5BROS Clothing" description="Read 5BROS Clothing’s privacy notice for website visitors, inquiries, and data handling practices." canonicalPath="/privacy" keywords="privacy policy clothing manufacturer, data privacy apparel website" />
      <section className="pt-40 pb-20 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Privacy Policy
          </p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl max-w-3xl">
            Privacy policy
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            We respect your privacy and are committed to handling your information responsibly.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-luxe max-w-4xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-charcoal">Information We Collect</h2>
            <p className="mt-3">
              We may collect your name, email address, phone number, company details, and inquiry information when you contact us or request a quote.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">How We Use It</h2>
            <p className="mt-3">
              Your information is used to respond to inquiries, discuss orders, provide quotations, and improve our services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Data Protection</h2>
            <p className="mt-3">
              We take reasonable steps to protect personal data from unauthorized access, misuse, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Your Choices</h2>
            <p className="mt-3">
              You may contact us at any time to request access to, correction of, or deletion of your personal data where applicable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
