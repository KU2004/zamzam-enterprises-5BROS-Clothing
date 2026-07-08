import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Globe2,
  Headphones,
  Package,
  Sparkles,
  Truck,
} from "lucide-react";
import { FadeUp } from "../components/FadeUp";
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
import processImg from "../assets/Process.png";
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
import africaMap from "../assets/africamap.png";
import indiaMap from "../assets/indiamap.png";
import fabricBg from "../assets/cotton-bg.png";

const slides = [
  {
    img: hero1,
    eyebrow: "Manufacturing Excellence",
    title: "Custom Apparel\nManufacturing",
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
    title: "Bulk Manufacturing\nGlobally Delivered",
    sub: "Serving clients across the Middle East, Europe, Africa and Asia.",
  },
];

const products = [
  { cat: "Round Neck", name: "Round Neck", img: pRound },
  { cat: "Polo", name: "Polo", img: pPolo },
  { cat: "Oversized", name: "Oversized", img: pOver },
  { cat: "Hoodies", name: "Hoodies & Sweatshirts", img: pHood },
  { cat: "Corporate", name: "Custom Label", img: pUni },
  { cat: "Sportswear", name: "Activewear", img: pSport },
];

const fabrics = [
  "100% Cotton", "Blend Cotton", "Bio-Washed ", "Poly Cotton",
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
  { icon: Award, title: "Private Label", desc: "Full OEM & ODM with your branding." },
  { icon: Headphones, title: "Dedicated Manager", desc: "One point of contact, always." },
  { icon: CheckCircle2, title: "Fast Turnaround", desc: "Pilot in weeks, scale in months." },
  { icon: Globe2, title: "Export Ready", desc: "MSME, GST, DGFT & AEPC certified." },
  { icon: Truck, title: "Global Shipping", desc: "Documentation and logistics handled end-to-end." },

];


  const videos = [video1, video2, video3, video4, video5, video6];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const openFullscreen = (element: HTMLVideoElement | null) => {
    if (!element) return;
    if (element.requestFullscreen) {
      element.requestFullscreen();
      return;
    }
    if ((element as any).webkitEnterFullscreen) {
      (element as any).webkitEnterFullscreen();
      return;
    }
    if ((element as any).webkitRequestFullscreen) {
      (element as any).webkitRequestFullscreen();
      return;
    }
    if ((element as any).msRequestFullscreen) {
      (element as any).msRequestFullscreen();
      return;
    }
  };

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    }

    openFullscreen(video);
  };

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
                    Enquire Now <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
      {/* Mobile: compact single-line logos (visible on mobile only) */}
      <section id="brands-mobile" className="block lg:hidden pt-8 pb-12 bg-background border-b border-transparent">
        <div className="container-luxe">
          <div className="mb-6">
            <p className="gold-label">Our Brands</p>
          </div>
          <div className="px-0">
            <div className="flex gap-3 items-center">
              <div className="w-1/5 flex items-center justify-center">
                <img src={brand1} alt="Brand 1" className="w-full h-auto object-contain" loading="lazy" />
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <img src={brand3} alt="Brand 3" className="w-full h-auto object-contain" loading="lazy" />
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <img src={brand2} alt="Brand 2" className="w-full h-auto object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="hidden lg:block pt-16 pb-20 md:pt-24 md:pb-20 bg-background">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <p className="gold-label">Our Brands</p>
          </div>
          <div className="mt-10 overflow-x-auto">
            <div className="flex gap-10 items-center justify-center">
              <div className="flex-shrink-0 h-36 w-72 flex items-center justify-center">
                <img src={brand1} alt="Brand 1" className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
              <div className="flex-shrink-0 h-36 w-72 flex items-center justify-center">
                <img src={brand3} alt="Brand 3" className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
              <div className="flex-shrink-0 h-36 w-72 flex items-center justify-center">
                <img src={brand2} alt="Brand 2" className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
x
      {/* OVERVIEW */}
      <section id="about" className="pt-2 pb-28 md:pt-2 md:pb-36 bg-background">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <FadeUp>
            <p className="gold-label">
              <span className="gold-line" /> About Us
            </p>
            <h1 className="mt-4 font-display text-2xl md:text-2xl leading-[1.05] font-bold text-foreground max-w-sm md:max-w-md">
              5BROS Clothing — Crafting apparel for discerning brands.
            </h1>
            <p className="mt-6 text-foreground text-base leading-relaxed">
              An apparel manufacturer based in India, specialising in custom t-shirts, uniforms
              and private label manufacturing for international businesses. Two decades of textile
              know-how, delivered through one disciplined supply chain.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 px-6 py-2 bg-gold text-charcoal text-sm font-semibold rounded-full hover:bg-gold-soft transition-all">
              About Us <ArrowRight size={16} />
            </Link>
          </FadeUp>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-black border border-white/20 text-white p-8 shadow-lg">
              <div className="mb-6">
                <p className="text-xs uppercase text-white/70 tracking-widest">Product Spec Sheet</p>
                <div className="flex items-baseline justify-between mt-4">
                  <h3 className="text-lg font-semibold text-white">Standard B2B</h3>
                </div>
              </div>

              <div className="divide-y divide-white/20">
                {[
                  { label: "Min. Order Qty (MOQ)", value: "300 pcs" },
                  { label: "Fabric Weight", value: "180–320 GSM" },
                  { label: "Lead Time", value: "21–28 days" },
                  { label: "Garments Produced", value: "1M+ Yearly" },
                ].map((r) => (
                  <div key={r.label} className="py-4 flex justify-between text-sm text-white/80">
                    <span>{r.label}</span>
                    <span className="font-semibold text-white">{r.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-2 flex-wrap">
                {["IEC", "MSME", "ZED"].map((b) => (
                  <span key={b} className="text-xs px-2 py-1 border border-white/40 rounded bg-transparent text-white">{b}</span>
                ))}
              </div>

              <Link to="/contact" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gold text-black py-3 rounded-md font-semibold">
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODELS SHOWCASE */}
      <section id="products" className="relative py-28 md:py-36 bg-amber-50 overflow-hidden">
        <div className="container-luxe relative z-10">
          <FadeUp className="max-w-2xl">
            <p className="gold-label">
              <span className="gold-line" /> Visual Excellence
            </p>
            <h2 className="mt-6 font-display text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap md:whitespace-normal leading-tight">See Our Quality in Motion.</h2>
          </FadeUp>

          {/* Video Grid */}
          <div className="mt-14 grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {videos.map((src, index) => (
              <FadeUp key={index} delay={index * 100}>
                <div
                  className="group relative rounded-xl overflow-hidden bg-muted border border-border"
                  style={{ aspectRatio: '3 / 4' }}
                  onClick={() => handleVideoClick(index)}
                  onTouchEnd={() => handleVideoClick(index)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={src}
                    controls
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                    className="w-full h-full object-cover"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'%3E%3Crect fill='%23333' width='640' height='360'/%3E%3C/svg%3E"
                  />
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

      <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold">
        Product Categories
      </h2>

      <p className="mt-5 text-foreground">
        A complete catalogue of essentials, athletic and corporate apparel —
        fully customisable.
      </p>
    </FadeUp>

    <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
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

            <div className="mt-5 flex items-center justify-center">
              <h3 className="font-display text-xl font-bold text-center">{p.name}</h3>
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

            <h2 className="mt-6 font-display text-4xl md:text-5xl text-black font-bold">
              Engineered fabrics for every market.
            </h2>

            <p className="mt-5 text-black/80 font-semibold">
              Premium knitted and woven fabrics developed for global brands.
            </p>
          </FadeUp>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {fabrics.map((f, i) => (
              <FadeUp key={f} delay={i * 50}>
                <div className="relative group">
                  <div className="block rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-8 transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:shadow-black/10 cursor-pointer">
                    <p className="font-display text-lg text-black font-semibold">
                      {f}
                    </p>
                  </div>

                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-28 md:py-36 bg-white text-black">
        <div className="relative z-10 container-luxe">
          <FadeUp className="max-w-2xl">
            <p className="gold-label">
              <span className="gold-line" /> Manufacturing Process
            </p>
            {/* Desktop-only: reduced size so it fits on large viewports */}
            <h2 className="hidden lg:block mt-6 font-display font-bold text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black leading-tight whitespace-nowrap">
              A disciplined eight-stage journey.
            </h2>

            {/* Mobile-only: larger but still responsive */}
            <h2 className="block lg:hidden mt-6 font-display font-bold text-[1.3rem] sm:text-[1.5rem] text-black leading-tight tracking-tight max-w-full overflow-hidden whitespace-nowrap">
              A disciplined eight-stage journey.
            </h2>
          </FadeUp>

          <div className="mt-16">
            <div className="lg:hidden rounded-[2rem] bg-amber-50 p-6">
              <div className="grid gap-4">
                {process.map((p) => (
                  <div key={p} className="rounded-[1.75rem] border border-black/10 bg-white p-5 shadow-sm">
                    <p className="font-display font-semibold text-base text-black">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative h-screen overflow-hidden rounded-[2rem] border border-border bg-white/60">
                <img
                  src={processImg}
                  alt="Manufacturing process"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="whyus" className="py-28 md:py-36 bg-background">
        <div className="container-luxe">
          <FadeUp className="max-w-2xl">
            <p className="gold-label">
              <span className="gold-line" /> Why Choose Us
            </p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-md md:max-w-none">Built for brands that don't compromise.</h2>
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
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold">Regional Presence Across India</h2>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-sm uppercase tracking-[0.2em] font-bold text-black">Global Presence</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Ethiopia', 'Kenya', 'Tanzania', 'Uganda', 'U.A.E.', 'Saudi Arabia'].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-base font-semibold text-black">
                      <span className="h-1.5 w-1.5 bg-gold rounded-full" /> {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white/60 backdrop-blur">
              <img
                src={africaMap}
                alt="Africa map"
                className="h-full min-h-100 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-6 overflow-hidden rounded-[2rem] border border-border bg-white/60 backdrop-blur">
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
