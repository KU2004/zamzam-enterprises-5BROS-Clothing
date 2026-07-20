import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Award, CheckCircle2, Globe2, Headphones, Layers, Package, Sparkles, Truck } from "lucide-react";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";
import { DesktopClientMarquee } from "../components/DesktopClientMarquee";
import { MobileClientMarquee } from "../components/MobileClientMarquee";
import Contact from "./Contact";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";
import pRound from "../assets/product-roundneck.jpg";
import pRound5 from "../assets/roundneck5.jpeg";
import pPolo from "../assets/product-polo.jpg";
import pOver from "../assets/product-oversized.jpg";
import pHood from "../assets/product-hoodie.jpg";
import pUni from "../assets/product-uniform.jpg";
import pSport from "../assets/product-sports.jpg";

const slides = [
  {
    img: hero1,
    eyebrow: "Export Manufacturing",
    title: "Manufacturing Premium Apparel\nFor Global Brands",
    sub: "Private label, OEM and ODM apparel manufacturing from India for international clothing brands, importers and wholesalers.",
  },
  {
    img: hero2,
    eyebrow: "Private Label",
    title: "OEM & ODM Solutions\nFor International Buyers",
    sub: "Flexible production support for export-ready brands that need premium quality, reliable lead times and strong communication.",
  },
  {
    img: hero3,
    eyebrow: "Worldwide Shipping",
    title: "Premium Apparel Delivered\nWith Confidence",
    sub: "From sampling and production to packaging and logistics, our export workflow is designed for dependable delivery.",
  },
  {
    img: hero4,
    eyebrow: "Global Supply",
    title: "Bulk Manufacturing\nFor Retail, Uniform and Fashion Brands",
    sub: "Serving clients across the Middle East, Europe, Africa and Asia with a disciplined manufacturing partner.",
  },
];

const productCards = [
  { name: "Round Neck", img: pRound, href: "/products/round-neck" },
  { name: "Polo", img: pPolo, href: "/products/polo" },
  { name: "Oversized", img: pOver, href: "/products/oversized" },
  { name: "Hoodies", img: pHood, href: "/products/hoodies" },
  { name: "Custom Label", img: pUni, href: "/products/custom-label" },
  { name: "Activewear", img: pSport, href: "/products/activewear" },
];

const why = [
  { icon: Sparkles, title: "Premium Materials", desc: "Hand-picked fabrics and finished garments that meet the expectations of high-value international buyers." },
  { icon: Package, title: "Low MOQ", desc: "Flexible production planning for pilot launches, brand growth and larger export consignments." },
  { icon: Award, title: "Private Label", desc: "Full OEM and ODM support with custom branding, trims, packaging and product development guidance." },
  { icon: Layers, title: "Apparel Customization", desc: "Tailored fabric, fit, silhouette and finishing details for collections that need strong market impact." },
  { icon: Headphones, title: "Dedicated Manager", desc: "One responsive point of contact to keep communication clear from sampling through shipment." },
  { icon: CheckCircle2, title: "Fast Turnaround", desc: "Pilot samples quickly and scale into confident production cycles without losing quality control." },
  { icon: Globe2, title: "Export Ready", desc: "A manufacturing partner aligned with compliance, documentation and buyer expectations across regions." },
  { icon: Truck, title: "Global Shipping", desc: "Production coordination and export planning support for dependable delivery to your market." },
];

export default function ExportLandingPage() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setSlide((s) => (s + 1) % slides.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Seo
        title="Export Landing Page | 5BROS Clothing"
        description="Manufacturing premium private label, OEM, ODM and export-ready apparel for global brands from India."
        canonicalPath="/export"
        keywords="custom clothing manufacturer india, private label clothing manufacturer, export clothing manufacturer"
        locale="en_IN"
        section="Export"
      />

      <section id="hero" className="relative h-screen min-h-160 w-full overflow-hidden bg-black">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-800 ${i === slide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <img
              src={s.img}
              alt={s.title}
              className={`absolute inset-0 h-full w-full object-cover ${i === slide ? "kenburns" : ""}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/70" />
            <div className="relative z-10 container-luxe flex h-full flex-col justify-center text-white">
              <div className={`max-w-2xl transition-all duration-1000 ${i === slide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                <p className="gold-label">
                  <span className="gold-line" /> {s.eyebrow}
                </p>
                <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] font-medium md:whitespace-nowrap">
                  {s.title.split("\n").map((line, index) => (
                    <span key={`${s.title}-${index}`} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
                  {s.sub}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-charcoal hover:bg-gold-soft transition"
                  >
                    Request Export Quote <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center border border-white/40 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white hover:bg-white hover:text-charcoal transition"
                  >
                    Contact Export Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 left-0 right-0 z-20 container-luxe flex items-center justify-between text-white">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/60">
            {String(slide + 1).padStart(2, "0")} <span className="mx-2 text-white/30">/</span> {String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-px transition-all duration-500 ${i === slide ? "w-12 bg-gold" : "w-8 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="pt-10 pb-32 md:pt-14 md:pb-44 bg-background">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <FadeUp>
              <p className="gold-label">
                <span className="gold-line" /> About Us
              </p>
              <h1 className="mt-4 font-display text-2xl md:text-3xl leading-[1.05] font-bold text-foreground">
                Export manufacturing with quality, scale and trusted service.
              </h1>
              <p className="mt-6 text-foreground text-base leading-relaxed">
                5BROS Clothing supports export-focused brands with private label manufacturing, OEM and ODM production, and reliable international delivery from India. From premium basics to corporate apparel, we help buyers build collections with confidence.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 px-6 py-2 bg-gold text-charcoal text-sm font-semibold rounded-full hover:bg-gold-soft transition-all">
                About Us <ArrowRight size={16} />
              </Link>
            </FadeUp>
          </div>

          <div className="flex justify-center w-full">
            <div className="w-full max-w-xs rounded-[2rem] border-2 border-gold bg-white p-3 md:p-4 shadow-xl">
              <div className="rounded-[1.75rem] overflow-hidden bg-gray-200">
                <img src={pRound5} alt="Premium round neck t-shirt" className="w-full h-auto object-cover block" loading="eager" />
              </div>
              <div className="mt-4 text-center px-1">
                <p className="text-xs md:text-sm font-bold text-foreground">Export-Ready Manufacturing</p>
                <p className="text-xs text-foreground/70 mt-1 font-medium">Private Label | OEM & ODM | Worldwide Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="whyus" className="py-28 md:py-36 bg-background">
        <div className="container-luxe">
          <FadeUp className="max-w-4xl">
            <p className="gold-label">
              <span className="gold-line" /> Why Choose Us
            </p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-md md:max-w-none">Built for international brands that value consistency and trust.</h2>
          </FadeUp>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => {
              const Icon = w.icon;
              return (
                <FadeUp key={w.title} delay={i * 60}>
                  <div className="group h-full border border-border bg-white/60 backdrop-blur p-7 transition-all hover:border-gold hover:shadow-[0_20px_50px_-20px_rgba(212,175,55,0.4)]">
                    <div className="text-gold transition-colors group-hover:text-charcoal">
                      <Icon size={40} />
                    </div>
                    <h3 className="mt-5 font-display text-lg">{w.title}</h3>
                    <p className="mt-2 text-sm text-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="py-28 md:py-36 bg-muted/40">
        <div className="container-luxe">
          <FadeUp className="max-w-2xl">
            <p className="gold-label">
              <span className="gold-line" /> Products
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold">Our Export Product Range</h2>
            <p className="mt-5 text-foreground">A complete catalogue of premium apparel for private label, retail and corporate buyers — fully customisable for export.</p>
          </FadeUp>

          <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {productCards.map((p, i) => (
              <FadeUp key={p.name} delay={i * 80}>
                <Link to={p.href} className="group block">
                  <div className="relative aspect-4/5 overflow-hidden bg-muted">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 bg-gold px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-charcoal">
                        Quick View
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-center">
                    <h3 className="font-display text-xl font-bold text-center">{p.name}</h3>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="overflow-hidden border-y border-border bg-muted/30 py-28 md:py-32">
        <div className="container-luxe mb-12 flex items-center justify-between">
          <p className="gold-label">
            <span className="gold-line" /> Our Clients
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block">
            <DesktopClientMarquee />
          </div>
          <div className="block lg:hidden">
            <MobileClientMarquee />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe">
          <Contact
            title="Get Your Export Quote"
            description="Share your brief, target market and product requirements so our export team can prepare the right quotation and next steps."
            submitLabel="Request Export Quote"
          />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container-luxe">
          <FadeUp className="max-w-2xl">
            <p className="gold-label">
              <span className="gold-line" /> Frequently Asked Questions
            </p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Important export questions answered.
            </h2>
          </FadeUp>

          <div className="mt-10 grid gap-4">
            {[
              {
                question: "What is your minimum order quantity (MOQ)?",
                answer: "The MOQ depends on the product and customization requirements, but generally minimum is 300 pieces in 3 colors. Please contact us for specific details regarding your order.",
              },
              {
                question: "Do you provide samples before bulk production?",
                answer: "Yes, Our Local Sales representatives from your region or country will reach out to discuss your customization requirements and arrange the samples display upon request so you can verify the fabric, stitching, fit, and print quality before confirming a bulk order.",
              },
              {
                question: "How long does production take?",
                answer: "Following the Approval and Processing of the sample, full-scale production will commence immediately. A total volume of order will be ready for dispatch within 25 days. To ensure full transparency, we will provide you with regular, real-time production tracking updates at every stage of the process.",
              },
              {
                question: "Do you export your products?",
                answer: "Yes. ZamZam Enterprises is expanding into international markets, including Africa, and welcomes export inquiries.",
              },
              {
                question: "Do you offer custom T-shirt manufacturing?",
                answer: "Yes. We provide customized T-shirts with your company logo, event branding, promotional prints, and corporate designs.",
              },
            ].map((item) => (
              <FadeUp key={item.question} className="rounded-[1.5rem] border border-border bg-white p-6">
                <h3 className="font-display text-xl text-charcoal">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/80">{item.answer}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
