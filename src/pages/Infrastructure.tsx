import { FadeUp } from "../components/FadeUp";
import cutting from "../assets/infra-cutting.jpg";
import printing from "../assets/infra-printing.jpg";
import embroidery from "../assets/infra-embroidery.jpg";
import stitching from "../assets/infra-stitching.jpg";
import hero4 from "../assets/hero-4.jpg";


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

export default function Infrastructure() {
  return (
    <>
      <section className="pt-40 pb-20 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Infrastructure
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl max-w-3xl leading-[1.05]">
            Every stage of production, under one roof.
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
