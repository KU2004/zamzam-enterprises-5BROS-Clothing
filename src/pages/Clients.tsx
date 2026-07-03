import { FadeUp } from "../components/FadeUp";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import carrierLogo from "../assets/carrier.jpeg";
import gulfLogo from "../assets/gulf.png";
import safeproLogo from "../assets/safepro.jpeg";
import gscaltexLogo from "../assets/gscaltex.png";
import projectFloorsLogo from "../assets/projectfloors.jpeg";
import alRajeahLogo from "../assets/al-rajeh.png";
import ensoOilsLogo from "../assets/ensooils.png";
import gEnergyLogo from "../assets/g-energy.png";


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

const showcase = [
  {
    img: hero2,
    title: "Trusted by apparel brands across continents.",
    subtitle:
      "From uniforms to premium private label collections, our manufacturing partners rely on quality, scale and delivery.",
  },
  {
    img: hero3,
    title: "Large-scale production with premium visual impact.",
    subtitle:
      "Our facility and client portfolio are built around craftsmanship, compliance and powerful brand stories.",
  },
];

export default function Clients() {
  return (
    <>
      <section className="relative h-140 overflow-hidden bg-black">
        <img
          src={showcase[0].img}
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
                  <p className="text-sm uppercase tracking-[0.3em] text-gold">Client Showcase</p>
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
