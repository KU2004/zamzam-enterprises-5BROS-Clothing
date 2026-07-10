import { FadeUp } from "../components/FadeUp";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import cutting from "../assets/infra-cutting.jpg";
import printing from "../assets/infra-printing.jpg";
import embroidery from "../assets/infra-embroidery.jpg";
import stitching from "../assets/infra-stitching.jpg";
import hero4 from "../assets/hero-4.jpg";
import hero2 from "../assets/hero-2.jpg";
import logoAepc from "../assets/aepc.png";
import dgft from "../assets/dgft.png";
import gst from "../assets/gst.png";
import msme from "../assets/msme.png";
import mumbai from "../assets/mumbai.png";
import zed from "../assets/zed.png";
import carrierLogo from "../assets/carrier.jpeg";
import gulfLogo from "../assets/gulf.png";
import safeproLogo from "../assets/safepro.jpeg";
import gscaltexLogo from "../assets/gscaltex.png";
import projectFloorsLogo from "../assets/projectfloors.jpeg";
import alRajeahLogo from "../assets/al-rajeh.png";
import ensoOilsLogo from "../assets/ensooils.png";
import gEnergyLogo from "../assets/g-energy.png";


const units = [
  {
    t: "Cutting Unit",
    d: "Computerised cutting tables with pattern precision down to the millimetre.",
    img: cutting,
  },
  {
    t: "Printing Unit",
    d: "Screen, DTG and sublimation printing for vibrant, wash-resistant graphics.",
    img: printing,
  },
  {
    t: "Embroidery Unit",
    d: "Multi-head industrial embroidery machines for sharp, premium logos.",
    img: embroidery,
  },
  {
    t: "Stitching Unit",
    d: "Rows of high-speed industrial sewing stations operated by skilled artisans.",
    img: stitching,
  },
  {
    t: "Finishing Section",
    d: "Trimming, ironing and final inspection for export-grade presentation.",
    img: hero4,
  },
  {
    t: "Packing & Warehouse",
    d: "Polybag, hangtag, carton and barcoding ready for global dispatch.",
    img: hero4,
  },
];

const clients = [
  { name: "g-energy", logo: gEnergyLogo },
  { name: "GS Caltex", logo: gscaltexLogo },
  { name: "Carrier", logo: carrierLogo },
  { name: "Project Floors", logo: projectFloorsLogo },
  { name: "SafePro", logo: safeproLogo },
  { name: "al-rajeh", logo: alRajeahLogo },
  { name: "enso oils & lubricants", logo: ensoOilsLogo },
  { name: "Gulf", logo: gulfLogo },
];



export default function Infrastructure() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <section className="pt-40 pb-20 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Certified Manufacturing
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl max-w-full leading-[1.05]">
            Certified manufacturing trusted
            <br />
            by global brands.
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe space-y-24">
          {units.map((u, i) => (
            <FadeUp key={u.t}>
              <div
                className={`grid gap-10 lg:grid-cols-2 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={u.img}
                    alt={u.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1500 hover:scale-105"
                  />
                </div>
                <div>
                  <span className="font-display text-6xl text-gold/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-display text-3xl md:text-4xl">
                    {u.t}
                  </h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
                    {u.d}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Certifications: same size and styling as Certifications.tsx */}
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
            <h1 className="mt-6 font-displ
            ay text-5xl md:text-7xl leading-[1.02]">
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
            {[msme, gst, dgft, logoAepc, zed, mumbai].map((certImg, index) => (
              <FadeUp key={index} delay={index * 40} className="flex items-center justify-center">
                <img src={certImg} alt={`cert-${index}`} className="max-h-64 max-w-full object-contain" />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Clients: mirror Clients.tsx styling */}
      <section id="clients" className="relative h-140 overflow-hidden bg-black">
        <img
          src={hero2}
          alt="Clients showcase"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container-luxe flex h-full items-center">
          <div className="max-w-3xl text-white">
            <p className="flex items-center gap-3 text-sm md:text-base uppercase tracking-[0.32em] text-gold">
              <span className="gold-line" /> Clients
            </p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02]">
              Brands that trust <span className="whitespace-nowrap">5BROS Clothing</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
              Apparel manufacturing for global clients — combining scale, craftsmanship and exceptional delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-28 md:pt-32 pb-24 md:pb-32 bg-background">
        <div className="container-luxe">
          <div className="grid gap-16 md:gap-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-center">
            {clients.map((client, index) => (
              <FadeUp
                key={client.name}
                delay={index * 40}
                className="flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-40 max-w-full object-contain"
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      
      <section className="relative h-[60vh] min-h-105 overflow-hidden">
        <img
          src={hero4}
          alt="Walkthrough"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60 grid place-items-center text-center">
          <FadeUp>
            <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold">
              Video Walkthrough
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-white max-w-3xl">
              A guided tour through our facility.
            </h2>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
