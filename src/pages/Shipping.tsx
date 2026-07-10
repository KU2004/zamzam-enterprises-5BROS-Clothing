export default function Shipping() {
  return (
    <>
      <section className="pt-40 pb-20 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Shipping Policy
          </p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl max-w-3xl">
            Shipping and delivery
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            We aim to make every shipment transparent, secure, and timely.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-luxe max-w-4xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-charcoal">Processing Time</h2>
            <p className="mt-3">
              Production and dispatch timelines depend on the order size, fabric availability, and customization requirements. We will share an estimated timeline during confirmation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">International Shipping</h2>
            <p className="mt-3">
              We ship to clients worldwide using trusted carriers. Shipping charges and delivery estimates may vary based on destination and package size.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Delivery Updates</h2>
            <p className="mt-3">
              Once dispatched, tracking details will be shared where available so you can follow your order until it arrives.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Damages or Delays</h2>
            <p className="mt-3">
              If a shipment is delayed or damaged in transit, please contact us immediately so we can help resolve the issue quickly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
