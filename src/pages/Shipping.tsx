import { Seo } from "../components/Seo";

export default function Shipping() {
  return (
    <>
      <Seo title="Shipping Policy | International Apparel Delivery" description="Learn about 5BROS Clothing’s international shipping process, packaging standards, and order dispatch support." canonicalPath="/shipping" keywords="international shipping apparel, clothing export shipping, garment shipping policy" />
      <section className="pt-40 pb-20 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Shipping Policy
          </p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl max-w-3xl">
            Shipping and delivery
          </h1>
          <p className="mt-5 max-w-2xl text-foreground/90 text-lg">
            We aim to make every shipment transparent, secure, and timely.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-luxe max-w-4xl space-y-8 text-foreground/90 text-[1.02rem] leading-relaxed">
          <div>
            <h2 className="font-display text-2xl md:text-[1.35rem] font-semibold text-foreground">Shipping Coverage</h2>
            <p className="mt-3 text-[1.02rem]">
              We ship our products across India through trusted logistics and transport partners. Shipping is available to dealers, distributors, wholesalers, retailers, institutional buyers, and corporate customers.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Order Processing</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Orders are processed only after confirmation and receipt of the applicable advance or full payment, or as per approved credit terms.</li>
              <li>Standard processing time is 1–3 business days, subject to product availability and production schedules.</li>
              <li>Bulk, customized, or branded orders may require additional processing time, which will be communicated at the time of order confirmation.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Dispatch Timeline</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Ready-stock orders are generally dispatched within 2–5 business days.</li>
              <li>Customized or bulk manufacturing orders are dispatched as per the mutually agreed production schedule.</li>
              <li>Dispatch timelines are estimates and may vary due to production requirements, transportation delays, public holidays, or unforeseen circumstances.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Shipping Charges</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Shipping and transportation charges are charged as per the order value, destination, weight, and transport mode unless otherwise agreed in writing.</li>
              <li>Any loading, unloading, insurance, or special handling charges, where applicable, shall be borne by the buyer unless specifically agreed by ZamZam Enterprises.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Delivery</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Delivery timelines depend on the destination and the transport partner.</li>
              <li>While we strive for timely delivery, ZamZam Enterprises is not liable for delays caused by transporters, weather conditions, natural disasters, strikes, government restrictions, or other events beyond our control.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Risk &amp; Ownership</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>The risk of loss or damage passes to the buyer once the goods are handed over to the transporter.</li>
              <li>Ownership of the goods remains with ZamZam Enterprises until full payment has been received.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Shipment Inspection</h2>
            <p className="mt-3 text-[1.02rem]">
              Customers are requested to inspect the shipment immediately upon delivery. Any shortage, damage, or visible tampering should be noted with the transporter at the time of delivery.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Shipping Claims</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Any claim for shortage, transit damage, incorrect shipment, or manufacturing defect must be reported within 48 hours of delivery.</li>
              <li>Claims must include the invoice number, photographs of the package and products, and any supporting transport documents.</li>
              <li>Claims received after the prescribed period may not be accepted.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Partial Shipments</h2>
            <p className="mt-3 text-[1.02rem]">
              In certain cases, large or bulk orders may be dispatched in multiple shipments to ensure faster delivery. Customers will be informed if partial shipments are required.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Delivery Address</h2>
            <p className="mt-3 text-[1.02rem]">
              Customers are responsible for providing complete and accurate delivery information. ZamZam Enterprises shall not be responsible for delays or additional charges arising from incorrect or incomplete address details.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Order Tracking</h2>
            <p className="mt-3 text-[1.02rem]">
              Tracking details or transporter information will be shared whenever available after the order has been dispatched.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl md:text-[1.35rem] font-semibold text-foreground">Contact Us</h2>
            <p className="mt-3 text-lg">
              For any shipping-related queries, customers may contact ZamZam Enterprises through our official customer support channels during business hours.
            </p>
            <a
              href="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-charcoal"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
