import { FadeUp } from "../components/FadeUp";
import hero2 from "../assets/hero-2.jpg";
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

// showcase removed — simplified certifications page

export default function Certifications() {
  return (
    <>
      <section className="relative h-140 overflow-hidden bg-black">
        <img
          src={hero2}
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
        <div className="container-luxe">
          <div className="grid gap-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-center">
            {certs.map((cert, index) => (
              <FadeUp
                key={cert.code}
                delay={index * 40}
                className="flex items-center justify-center"
              >
                <img
                  src={cert.img}
                  alt={cert.code}
                  className="max-h-64 max-w-full object-contain"
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
