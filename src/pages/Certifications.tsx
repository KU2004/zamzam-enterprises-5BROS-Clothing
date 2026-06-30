import { FadeUp } from "../components/FadeUp";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import logoAepc from "../assets/aepc.png";
import dgft from "../assets/dgft.png";
import gst from "../assets/gst.png";
import msme from "../assets/msme.png";
import mumbai from "../assets/mumbai.png";
import zed from "../assets/zed.png";


const certs = [
  { code: "MSME", t: "Ministry of Micro, Small & Medium Enterprises", img: msme },
  { code: "GST", t: "Goods & Services Tax Registered", img: gst },
  { code: "DGFT", t: "Directorate General of Foreign Trade", img: dgft },
  { code: "APEDA", t: "Agricultural & Processed Food Products Export", img: logoAepc },
  { code: "ZED", t: "Zero Defect Zero Effect — Bronze", img: zed },
  { code: "ISO", t: "ISO Certified Manufacturing Practices", img: mumbai },
];

const showcase = [
  {
    img: hero2,
    title: "Proven compliance for global apparel exports.",
    subtitle:
      "Our certifications ensure every order ships with the credentials buyers and regulators expect.",
  },
  {
    img: hero3,
    title: "Operational excellence verified across standards.",
    subtitle:
      "From domestic certification to export licensing, our factory delivers reliable, audited manufacturing.",
  },
];

export default function Certifications() {
  return (
    <>
      <section className="relative h-140 overflow-hidden bg-black">
        <img
          src={showcase[0].img}
          alt="Certifications showcase"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container-luxe flex h-full items-center">
          <div className="max-w-3xl text-white">
            <p className="flex items-center gap-3 text-sm md:text-base uppercase tracking-[0.32em] text-gold">
              <span className="gold-line" /> Certifications
            </p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02]">
              Certified. Compliant. Export-ready.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
              Approved credentials for MSME, GST, DGFT, APEDA, ZED.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-28 md:pt-32 pb-24 md:pb-32 bg-background">
        <div className="container-luxe bg-border rounded-[2rem] p-1">
          <div className="grid gap-6 rounded-[2rem] bg-background p-6 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3">
            {certs.map((cert, index) => (
              <FadeUp
                key={cert.code}
                delay={index * 40}
                className="bg-background rounded-[2rem] p-4 transition hover:bg-muted"
              >
                <button
                  type="button"
                  className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-[1.75rem] border border-border bg-background p-6 text-center transition duration-200 hover:-translate-y-1 hover:border-gold hover:bg-muted focus:outline-none focus:ring-2 focus:ring-gold active:scale-[0.97]"
                  aria-label={`View ${cert.code}`}
                >
                  <div className="flex h-32 w-full items-center justify-center">
                    <img
                      src={cert.img}
                      alt={cert.code}
                      className="max-h-full max-w-full object-contain opacity-90 transition duration-200 hover:opacity-100"
                    />
                  </div>
                
                </button>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-luxe grid gap-6 lg:grid-cols-2">
          {showcase.map((item, index) => (
            <FadeUp key={index} delay={index * 80} className="group overflow-hidden rounded-[2rem] bg-background shadow-xl shadow-black/5">
              <div className="relative h-105 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="inline-block rounded-full bg-white/90 px-3 py-1 text-base font-semibold uppercase tracking-[0.3em] text-gold">Certification Showcase</p>
                  <h2 className="mt-4 text-3xl font-display leading-tight">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm text-white/80 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}
