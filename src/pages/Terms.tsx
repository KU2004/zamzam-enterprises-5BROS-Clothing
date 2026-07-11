import { Seo } from "../components/Seo";

export default function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions | 5BROS Clothing" description="Review the terms of service for inquiries, manufacturing projects, and apparel procurement with 5BROS Clothing." canonicalPath="/terms" keywords="terms and conditions clothing manufacturer, apparel manufacturing terms" />
      <section className="pt-40 pb-20 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Terms & Conditions
          </p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl max-w-3xl">
            Terms and conditions
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Please review these terms before placing an order or using our services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-luxe max-w-4xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-charcoal">Agreement</h2>
            <p className="mt-3">
              By engaging with 5BROS Clothing for manufacturing, wholesale, or private-label services, you agree to the terms outlined here.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Orders & Payments</h2>
            <p className="mt-3">
              All orders are subject to confirmation, availability, and agreed pricing. Payment terms will be clearly outlined in your purchase agreement or quotation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Product Specifications</h2>
            <p className="mt-3">
              Final product specifications, colors, sizes, and customization details must be approved before production begins to avoid delays or discrepancies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Liability</h2>
            <p className="mt-3">
              Our liability for any claim is limited to the value of the specific transaction unless otherwise required by law.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
