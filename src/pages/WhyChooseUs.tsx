import { Link } from "react-router-dom";
import { BadgeCheck, Factory, MessageCircleMore, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { FadeUp } from "../components/FadeUp";
import hero2 from "../assets/hero-2.jpg";

const reasons = [
  {
    title: "Premium quality control",
    description:
      "Every order is built with strict in-line inspection, material checks, and finish standards that protect your brand reputation.",
    icon: BadgeCheck,
  },
  {
    title: "Flexible manufacturing scale",
    description:
      "From small batch launches to large-volume production, our team adapts quickly without compromising consistency or delivery.",
    icon: Factory,
  },
  {
    title: "Reliable global delivery",
    description:
      "We plan production and logistics carefully so your collections arrive on time, with complete visibility from start to finish.",
    icon: Truck,
  },
  {
    title: "Export-ready compliance",
    description:
      "Our operations are aligned with the standards buyers expect, helping your business move smoothly across international markets.",
    icon: ShieldCheck,
  },
  {
    title: "Design and development support",
    description:
      "We collaborate closely on product development, fit, trims, and finishing so your idea becomes a compelling final garment.",
    icon: Sparkles,
  },
  {
    title: "Clear communication",
    description:
      "You get a responsive team that keeps you informed, solves issues fast, and turns complex production into a simple partnership.",
    icon: MessageCircleMore,
  },
] as const;

export default function WhyChooseUs() {
  return (
    <>
      <section className="relative h-[32rem] overflow-hidden bg-black">
        <img
          src={hero2}
          alt="Why choose 5BROS Clothing"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container-luxe flex h-full items-center">
          <FadeUp className="max-w-3xl text-white">
            <p className="flex items-center gap-3 text-sm md:text-base uppercase tracking-[0.32em] text-gold">
              <span className="gold-line" /> Why Choose Us
            </p>
            <h1 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
              Built for brands that value quality, speed, and trust.
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
              From concept to delivery, 5BROS Clothing combines skilled craftsmanship, modern manufacturing, and dependable service to support your next collection.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="container-luxe">
          <FadeUp className="max-w-2xl">
            <p className="gold-label">
              <span className="gold-line" /> What sets us apart
            </p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              A manufacturing partner focused on your brand’s success.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              We bring together strong production discipline, attentive support, and a deep understanding of apparel brands that want consistency without compromise.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.title} delay={index * 60}>
                  <div className="h-full rounded-[1.75rem] border border-border bg-white/70 p-7 shadow-sm shadow-black/5 backdrop-blur">
                    <div className="inline-flex rounded-full border border-gold/20 bg-gold/10 p-3 text-gold">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 font-display text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">{item.description}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-charcoal-foreground">
        <div className="container-luxe flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <p className="gold-label">
              <span className="gold-line" /> Ready to start
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
              Let’s create apparel that reflects your standards and your brand story.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-white hover:text-charcoal"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
