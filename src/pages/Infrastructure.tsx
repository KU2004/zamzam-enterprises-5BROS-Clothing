import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import cutting from "../assets/infra-cutting.png";
import packing from "../assets/packing.png";
import printing from "../assets/infra-printing.jpg";
import embroidery from "../assets/infra-embroidery.png";
import stitching from "../assets/infra-stitching.png";
import finishing from "../assets/finishing.png";
import hero4 from "../assets/hero-4.jpg";
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
    d: "Fabric cutting and pattern preparation for consistent garment production.",
    img: cutting,
    video: "https://www.youtube.com/embed/jQ52Ydu5MNs?si=l0lODjqjIfSCLijx",
    videoId: "jQ52Ydu5MNs",
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
    video: "https://www.youtube.com/embed/1l1LkB_R0ns?si=tsbMaOjPgzpUk5Kt",
    videoId: "1l1LkB_R0ns",

  },
  {
    t: "Finishing Section",
    d: "Trimming, ironing and final inspection for export-grade presentation.",
    img: finishing,
    video: "https://www.youtube.com/embed/CpZQBxhOPhY?si=tvjl4vs3bk6ayu6Q",
    videoId: "CpZQBxhOPhY",
  },
  {
    t: "Packing & Warehouse",
    d: "Polybag, hangtag, carton and barcoding ready for global dispatch.",
    img: packing,
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
      <Seo title="Manufacturing Infrastructure | Factory Capabilities & Production" description="See 5BROS Clothing’s manufacturing infrastructure, quality control systems, production capacity, and export-ready packaging capabilities." canonicalPath="/infrastructure" keywords="garment factory india, apparel manufacturing facility, production capacity, clothing factory infrastructure" />
      <section className="pt-40 pb-20 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Certified Manufacturer
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe space-y-24">
          {units.map((u, i) => (
            <FadeUp key={u.t}>
              <div
                className={`grid gap-10 lg:grid-cols-2 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-4/3 overflow-hidden bg-muted/20">
                  {u.video ? (
                    <iframe
                      src={`${u.video}&autoplay=1&mute=1&loop=1&playlist=${u.videoId}&vq=hd720&start=0`}
                      title={u.t}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={u.img}
                      alt={u.t}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-1500 hover:scale-[1.02]"
                    />
                  )}
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

      {/* Certifications */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-20 bg-background">
        <div className="container-luxe">
          <p className="flex items-center gap-3 text-2xl 3xl:text-base uppercase tracking-[0.32em] text-gold">
            <span className="gold-line" />Our Certifications
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-background">
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

      {/* Clients */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-20 bg-background">
        <div className="container-luxe">
          <p className="flex items-center gap-3 text-2xl 3xl:text-base uppercase tracking-[0.32em] text-gold">
            <span className="gold-line" />Our Clients
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-background">
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
