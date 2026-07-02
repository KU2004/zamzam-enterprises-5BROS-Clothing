import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Globe2,
  Headphones,
  Package,
  Shield,
  Sparkles,
  Truck,
} from "lucide-react";
import { FadeUp } from "../components/FadeUp";
import { Counter } from "../components/Counter";
import { SideNav } from "../components/SideNav";
import { DesktopClientMarquee } from "../components/DesktopClientMarquee";
import { MobileClientMarquee } from "../components/MobileClientMarquee";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import pRound from "../assets/product-roundneck.jpg";
import manfuBg from "../assets/manfu-bg.png";
import pPolo from "../assets/product-polo.jpg";
import pOver from "../assets/product-oversized.jpg";
import pHood from "../assets/product-hoodie.jpg";
import pUni from "../assets/product-uniform.jpg";
import pSport from "../assets/product-sports.jpg";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4";
import video5 from "../videos/video5.mp4";
import video6 from "../videos/video6.mp4";
import contactBg from "../assets/contactbg.png";
import indiaMap from "../assets/indiamap.png";
import fabricBg from "../assets/cotton-bg.png";

const slides = [
  {
    img: hero1,
    eyebrow: "Manufacturing Excellence",
    title: "Custom Apparel Manufacturing",
    sub: "From Concept to Creation — manufacturing excellence from India for global brands.",
  },
  {
    img: hero2,
    eyebrow: "Private Label",
    title: "OEM & ODM Solutions",
    sub: "Build your apparel brand with a trusted private label manufacturing partner.",
  },
  {
    img: hero3,
    eyebrow: "Sustainable Fabric",
    title: "Cotton, Crafted with Precision",
    sub: "Sustainable, breathable, certified — fabrics engineered for global quality standards.",
  },
  {
    img: hero4,
    eyebrow: "Global Supply",
    title: "Bulk Manufacturing, Globally Delivered",
    sub: "Serving clients across the Middle East, Europe, Africa and Asia.",
  },
];

const products = [
  { cat: "Round Neck", name: "Round Neck", img: pRound },
  { cat: "Polo", name: "Polo", img: pPolo },
  { cat: "Oversized", name: "Oversized", img: pOver },
  { cat: "Hoodies", name: "Hoodies & Sweatshirts", img: pHood },
  { cat: "Corporate", name: "Corporate", img: pUni },
  { cat: "Sportswear", name: "Sportswear", img: pSport },
];

const fabrics = [
  "100% Cotton", "Cotton Rich", "Bio-Washed ", "Poly Cotton",
  "French Terry", "Dry Fit", "Organic Cotton", "Recycled Fabric",
  "Custom GSM", "Custom Dyeing",
];

const process = [
  "Fabric Selection", "Pattern Development", "Cutting", "Printing",
  "Embroidery", "Quality Inspection", "Packing", "Global Shipping",
];

const why = [
  { icon: Sparkles, title: "Premium Materials", desc: "Hand-picked yarns and certified fabrics." },
  { icon: Package, title: "Low MOQ", desc: "Flexible order quantities for emerging brands." },
  { icon: Shield, title: "In-house QC", desc: "Multi-stage inspection on every batch." },
  { icon: Truck, title: "Global Shipping", desc: "Documentation and logistics handled end-to-end." },
  { icon: Award, title: "Private Label", desc: "Full OEM & ODM with your branding." },
  { icon: Headphones, title: "Dedicated Manager", desc: "One point of contact, always." },
  { icon: CheckCircle2, title: "Fast Turnaround", desc: "Pilot in weeks, scale in months." },
  { icon: Globe2, title: "Export Ready", desc: "MSME, GST, DGFT & AEPC certified." },
];


  const videos = [video1, video2, video3, video4, video5, video6];

export default function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <SideNav />
      {/* HERO SLIDER */}
      <section id="hero" className="relative h-screen min-h-160 w-full overflow-hidden bg-black">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-800 ${
              i === slide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={s.img}
              alt={s.title}
              className={`absolute inset-0 h-full w-full object-cover ${i === slide ? "kenburns" : ""}`}
              width={1920}
              height={1080}
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/70" />
            <div className="relative z-10 container-luxe flex h-full flex-col justify-center text-white">
              <div className={`max-w-2xl transition-all duration-1000 ${i === slide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                <p className="gold-label">
                  <span className="gold-line" /> {s.eyebrow}
                </p>
                <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] font-medium">
                  {s.title}
                </h1>
                <p className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
                  {s.sub}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/products"
                    className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-charcoal hover:bg-gold-soft transition"
                  >
                    Explore Products <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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

      {/* BRANDS */}
      <section id="brands" className="py-28 md:py-36 bg-background">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <p className="gold-label">
              <span className="gold-line" /> Our Brands
            </p>
          </div>
          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-3 items-stretch">
            <div className="h-full">
              <div className="block h-full overflow-hidden rounded-[2rem] container1 p-0 shadow-lg shadow-black/5">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={brand1}
                    alt="Brand 1"
                    className="h-full w-full object-contain transition-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="block h-full overflow-hidden rounded-[2rem] container1 p-0 shadow-lg shadow-black/5">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={brand2}
                    alt="Brand 2"
                    className="h-full w-full object-contain transition-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="block h-full overflow-hidden rounded-[2rem] container1 p-0 shadow-lg shadow-black/5">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={brand3}
                    alt="Brand 3"
                    className="h-full w-full object-contain transition-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="about" className="py-28 md:py-36 bg-background">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <FadeUp>
            <p className="gold-label">
              <span className="gold-line" /> Who we are
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1]">
              <span className="whitespace-nowrap">5BROS Clothing</span> — Crafting apparel for the world's most discerning brands.
            </h2>
            <p className="mt-6 text-muted-foreground text-base leading-relaxed">
              An apparel manufacturer based in India, specialising in custom t-shirts, uniforms
              and private label manufacturing for international businesses. Two decades of textile
              know-how, delivered through one disciplined supply chain.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground border-b border-gold pb-1 hover:gap-3 transition-all">
              Discover About Us <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <div className="grid grid-cols-2 gap-px bg-border">
            {[
              { n: 500, suf: "+", l: "Corporate Clients" },
              { n: 1, suf: "M+", l: "Garments Produced" },
              { n: 20, suf: "+", l: "Countries Served" },
              { n: 98, suf: "%", l: "Customer Satisfaction" },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 100} className="bg-background p-10">
                <div className="font-display text-5xl md:text-6xl text-foreground">
                  <Counter end={s.n} suffix={s.suf} />
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS SHOWCASE */}
      <section id="products" className="relative py-28 md:py-36 bg-background overflow-hidden">
        <img src={contactBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-100" />
        <div className="container-luxe relative z-10">
          <FadeUp className="max-w-2xl">
            <p className="gold-label">
              <span className="gold-line" /> Visual Excellence
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">See Our Quality in Motion.</h2>
            <p className="mt-5 text-muted-foreground">
              Watch our premium apparel collection come to life with professional model showcases highlighting craftsmanship and design.
            </p>
          </FadeUp>

          {/* Video Grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden bg-muted border border-border" style={{ aspectRatio: '3 / 4' }}>
                      <video
                        src={videos[i - 1]}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'%3E%3Crect fill='%23333' width='640' height='360'/%3E%3C/svg%3E"
                      />
                  </div>
                  <div className="mt-4">
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
{/* PRODUCT CATEGORIES */}
<section id="products" className="py-28 md:py-36 bg-muted/40">
  <div className="container-luxe">
    <FadeUp className="max-w-2xl">
      <p className="gold-label">
        <span className="gold-line" /> Collections
      </p>

      <h2 className="mt-6 font-display text-4xl md:text-5xl">
        Product Categories
      </h2>

      <p className="mt-5 text-muted-foreground">
        A complete catalogue of essentials, athletic and corporate apparel —
        fully customisable.
      </p>
    </FadeUp>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => (
        <FadeUp key={p.name} delay={i * 80}>
          <Link
            to={`/products?cat=${encodeURIComponent(p.cat)}`}
            className="group block"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-muted">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 bg-gold px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-charcoal">
                  Quick View
                  <ArrowRight size={12} />
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <h3 className="font-display text-xl">{p.name}</h3>
            </div>
          </Link>
        </FadeUp>
      ))}
    </div>
  </div>
</section>
      {/* FABRICS */}
      <section
        id="fabrics"
        className="relative py-28 md:py-36 overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={fabricBg}
          alt="Fabric Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(1.15)' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/20" />

        {/* Content */}
        <div className="container-luxe relative z-10">
          <FadeUp className="max-w-2xl">
            <p className="gold-label">
              <span className="gold-line" /> Fabric Expertise
            </p>

            <h2 className="mt-6 font-display text-4xl md:text-5xl text-black font-semibold">
              Engineered fabrics for every market.
            </h2>

            <p className="mt-5 text-black/80 font-semibold">
              Premium knitted and woven fabrics developed for global brands.
            </p>
          </FadeUp>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {fabrics.map((f, i) => (
              <FadeUp key={f} delay={i * 50}>
                <a
                  href="/contact"
                  className="group block rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-8 transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:shadow-black/10 cursor-pointer"
                >
                  <p className="font-display text-lg text-black font-semibold">
                    {f}
                  </p>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-28 md:py-36 bg-white text-black">
        <img src={manfuBg} alt="Manufacturing process background" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-white/60" />
        <div className="relative z-10 container-luxe">
          <FadeUp className="max-w-2xl">
            <p className="gold-label">
              <span className="gold-line" /> Manufacturing Process
            </p>
            <h2 className="mt-6 font-display font-semibold text-4xl md:text-5xl text-black">A disciplined eight-stage journey.</h2>
          </FadeUp>
          <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <FadeUp key={p} delay={i * 60}>
                <a
                  href="/contact"
                  className="group block rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-8 transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:shadow-black/10 cursor-pointer"
                >
                  <p className="font-display font-semibold text-lg text-black">{p}</p>
                  <span className="mt-3 block h-px w-8 bg-black/20" />
                </a>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY US */}
      <section id="whyus" className="py-28 md:py-36 bg-background">
        <div className="container-luxe">
          <FadeUp className="max-w-2xl">
            <p className="gold-label">
              <span className="gold-line" /> Why Choose Us
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">Built for brands that don't compromise.</h2>
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
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section id="clients" className="overflow-hidden border-y border-border bg-muted/30 py-20">
        <div className="container-luxe mb-10 flex items-center justify-between">
          <p className="gold-label">
            <span className="gold-line" /> Featured Clients
          </p>
          <Link to="/clients" className="hidden md:inline text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">View all</Link>
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

      {/* GLOBAL PRESENCE */}
      <section id="global" className="py-28 md:py-36 bg-muted/40">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <FadeUp>
            <p className="gold-label">
              <span className="gold-line" /> Our Presence
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">Regional Presence Across India and Select Markets</h2>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                {["Ahmedabad", "Amravati Maharashtra", "Aurangabad", "Bangalore", "Bhopal", "Bilaspur", "Hyderabad", "Hubli", "Indore", "Jabalpur"].map((c) => (
                  <div key={c} className="flex items-center gap-2 text-base font-semibold">
                    <span className="h-1.5 w-1.5 bg-gold rounded-full" /> {c}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {["Jalgaon", "Jalna", "Kolhapur", "Malegaon", "Nagpur", "Pune", "Raipur", "Solapur", "Surat"].map((c) => (
                  <div key={c} className="flex items-center gap-2 text-base font-semibold">
                    <span className="h-1.5 w-1.5 bg-gold rounded-full" /> {c}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {["Ethiopia", "Kenya", "Tanzania", "Uganda", "U.A.E."].map((c) => (
                  <div key={c} className="flex items-center gap-2 text-base font-semibold">
                    <span className="h-1.5 w-1.5 bg-gold rounded-full" /> {c}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white/60 backdrop-blur">
              <img
                src={indiaMap}
                alt="India map"
                className="h-full min-h-100 w-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-28 md:py-36 bg-charcoal text-charcoal-foreground overflow-hidden">
        <img src={hero1} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="container-luxe relative z-10 text-center">
          <FadeUp>
            <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold">Let's build together</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl text-white max-w-3xl mx-auto leading-tight">
              Ready to launch your apparel brand?
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="border border-white/40 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white hover:bg-white hover:text-charcoal transition">
                Schedule Meeting
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
