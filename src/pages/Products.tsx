import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import roundneck1 from "../assets/roundneck4.jpeg";
import polo1 from "../assets/polo7.jpeg";
import oversized1 from "../assets/oversized1.jpeg";
import hoodies1 from "../assets/hoodies1.jpeg";
import sports1 from "../assets/sports1.jpeg";
import custom1 from "../assets/custom1.jpeg";

const sections = [
  {
    label: "Round Neck",
    img: roundneck1,
    description: "Soft, everyday crew necks in premium fabrics for effortless comfort.",
    href: "/products/round-neck",
  },
  {
    label: "Polo",
    img: polo1,
    description: "Smart, tailored polo shirts ideal for branded corporate and retail collections.",
    href: "/products/polo",
  },
  {
    label: "Oversized",
    img: oversized1,
    description: "Relaxed, on-trend oversized silhouettes built for style and movement.",
    href: "/products/oversized",
  },
  {
    label: "Hoodies",
    img: hoodies1,
    description: "Warm, premium hoodies crafted for comfort, branding and everyday wear.",
    href: "/products/hoodies",
  },
  {
    label: "Activewear",
    img: sports1,
    description: "Performance-driven sportswear designed for training, teams and custom athletics.",
    href: "/products/activewear",
  },
  {
    label: "Custom Label",
    img: custom1,
    description: "Corporate and uniform solutions made to order with your branding and fit.",
    href: "/products/custom-label",
  },
];

export default function Products() {
  return (
    <>
      <Seo title="Custom Apparel Products | T-Shirts, Hoodies, Activewear" description="Browse 5BROS Clothing’s catalog of round necks, polos, oversized apparel, hoodies, activewear, and private label garments." canonicalPath="/products" keywords="custom apparel products, t shirt manufacturer india, hoodie manufacturer india, activewear manufacturer" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Catalogue
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl">Products</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Explore our full range of custom-manufactured apparel. Every product is fully customisable — fabric, GSM, colour, fit and branding.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-luxe">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <FadeUp key={section.label} delay={index * 40}>
                <Link
                  to={section.href}
                  className="group block overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={section.img}
                      alt={section.label}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <div className="space-y-4 p-6 text-center">
                    <h2 className="text-xl font-semibold text-foreground">{section.label}</h2>
                    <p className="text-sm leading-6 text-muted-foreground">{section.description}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
