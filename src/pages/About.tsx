import { FadeUp } from "../components/FadeUp";
import { useRef, type ReactNode } from "react";
import hero1 from "../assets/hero-1.jpg";
import hero4 from "../assets/hero-4.jpg";
import founder from "../assets/founder.jpeg";
import aboutusv from "../videos/aboutusv-h264.mp4";

function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <section className="relative pt-40 pb-20 bg-muted/30 border-b border-border">
      <div className="container-luxe grid gap-14 lg:grid-cols-[minmax(0,1fr)_360px] items-center">
        <div>
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> {eyebrow}
          </p>
          <h1 className="mt-6 font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.05] max-w-4xl">
            {title}
          </h1>
          {sub && (
            <p className="mt-6 max-w-2xl text-black text-base sm:text-lg text-justify" dangerouslySetInnerHTML={{ __html: sub }} />
          )}
        </div>
        <div>
          <div className="group overflow-hidden rounded-[2rem] border-2 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
            <img
              src={founder}
              alt="Founder"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="font-display text-lg font-semibold text-charcoal">
              Azhar Qureshi
            </p>
            <p className="text-sm text-muted-foreground">
              Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const milestones = [
  {
    year: "2021",
    t: "Founded",
    d: "5BROS established in Mumbai.",
  },
  {
    year: "2021",
    t: "First Order",
    d: "Shipped our first private label order.",
  },
  {
    year: "2023",
    t: "Scaling Up ",
    d: "3 states 7 cities",
  },
  {
    year: "2024",
    t: "Scaling Up",
    d: "9 states 16 cities.",
  },
  {
    year: "2025",
    t: "ZED Certification ",
    d: "Recognised by MSME for quality and operational excellence.",
  },
];

export default function About() {
  const boxedRef = useRef<HTMLVideoElement | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="An apparel, engineered for global brands."
        sub="Welcome to Zam Zam Enterprises, the proud manufacturer behind our own clothing brands <strong>5BROS</strong>, <strong>BE BASIC</strong> and <strong>HTH</strong>. Based in Mumbai, we specialize in premium-quality T-shirt manufacturing designed for comfort, style, and everyday fashion.

At Zam Zam Enterprises, we believe clothing is more than just fashion — it is a reflection of personality, confidence, and lifestyle. Through our brand <strong>5BROS</strong>, <strong>BE BASIC</strong> and <strong>HTH</strong> we are committed to creating trendy, durable, and affordable apparel for today's youth.

From our manufacturing unit in Chembur, we supply our products to different cities across India, building strong relationships with <strong>distributors</strong>, <strong>wholesalers</strong> and <strong>corporate sectors</strong> who trust our quality and service."
      />

      <section className="py-16 flex items-center justify-center">
        <div className="w-full max-w-6xl px-4">
          <div className="mb-8 text-center">
            <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center justify-center gap-3">
              <span className="gold-line" /> Factory Tour
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight max-w-4xl mx-auto text-charcoal">
              Step inside the <span className="whitespace-nowrap">5BROS factory</span>.
            </h2>
          </div>
          <div className="bg-black rounded-md overflow-hidden shadow-2xl">
            <video
              ref={boxedRef}
              src={aboutusv}
              poster={hero4}
              className="w-full h-full aspect-video object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={(e) => console.error('Video error:', e.currentTarget.error?.message)}
              onLoadedMetadata={() => {
                console.log('Video loaded:', aboutusv);
                try {
                  if (boxedRef.current) {
                    /* keep existing behavior in case needed later */
                  }
                } catch (e) {}
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <FadeUp>
            <img
              src={hero1}
              alt="Factory"
              className="aspect-4/5 w-full object-cover"
              loading="lazy"
            />
          </FadeUp>
          <FadeUp delay={120}>
            <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold">
              Our Story
            </p>
            <h2 className="mt-5 font-display font-bold text-4xl md:text-5xl leading-tight">
              Apparel Craftmanship
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
              Before founding Zam Zam Enterprises, We gained
              valuable experience in the textile and apparel industry,
              developing a deep understanding of garment manufacturing, fabric
              sourcing, product quality, and customer requirements. He
              recognised the growing demand for high-quality, affordable, and
              reliable apparel across India and international markets, and
              founded Simnani Enterprise to create a brand that combines
              quality, comfort, and value while building strong, trust-based
              customer relationships.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
              We recognized the growing demand for high-quality, affordable, and reliable apparel products across India and international markets. We saw an opportunity to create a brand that combines quality, comfort, and value.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
              The inspiration came from a desire to build a trusted apparel company that delivers premium-quality garments while maintaining competitive pricing and strong customer relationships. We envisioned creating a brand that customers could rely on for consistent quality and service.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container-luxe grid gap-10 md:grid-cols-3">
          {[
            {
              t: "Mission",
              d: "Empower global brands with consistent, ethical and premium apparel manufacturing — order after order.",
            },
            {
              t: "Vision",
              d: "Be the most trusted private label apparel partner from India for the next generation of global brands.",
            },
            {
              t: "Values",
              d: "Craft, transparency, accountability and partnership. We build long-term relationships, not transactions.",
            },
          ].map((c, i) => (
            <FadeUp key={c.t} delay={i * 100}>
              <div className="h-full border border-border bg-white p-10">
                <span className="font-display text-5xl text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {c.d}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      
      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe">
          <FadeUp className="max-w-2xl">
            <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold">
              Milestones
            </p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">
              A timeline of growth.
            </h2>
          </FadeUp>
          <div className="mt-16 relative border-l border-border ml-2">
            {milestones.map((m, i) => (
              <FadeUp
                key={m.year}
                delay={i * 80}
                className="relative pl-10 pb-12 last:pb-0"
              >
                <span className="absolute -left-1.75 top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
                <span className="font-display text-3xl text-gold">
                  {m.year}
                </span>
                <h3 className="mt-2 font-display text-xl">{m.t}</h3>
                <p className="mt-1 text-muted-foreground text-sm max-w-xl">
                  {m.d}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
