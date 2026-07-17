import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import hoodies1Bg from "../assets/hoodies1-bg.png";
import hoodies1p2 from "../assets/hoodies1p2.png";
import hoodies2Bg from "../assets/hoodies2-bg.png";
import hoodies2p2 from "../assets/hoodies2p2.png";
import hoodies3Bg from "../assets/hoodies3-bg.png";
import hoodies3p2 from "../assets/hoodies3p2.png";
import hoodies4Bg from "../assets/hoodies4-bg.png";
import hoodies4p2 from "../assets/hoodies4p2.png";

const photos = [
  { frontImage: hoodies1Bg, hoverImage: hoodies1p2 },
  { frontImage: hoodies2Bg, hoverImage: hoodies2p2 },
  { frontImage: hoodies3Bg, hoverImage: hoodies3p2 },
  { frontImage: hoodies4Bg, hoverImage: hoodies4p2 },
];

export default function ProductsHoodies() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <>
      <Seo title="Hoodie Manufacturer India | Sweatshirt & Fleece Apparel" description="Manufacture premium hoodies and sweatshirts in India with custom GSM, fleece options, embroidery, and private label packaging." canonicalPath="/products/hoodies" keywords="hoodie manufacturer india, sweatshirt manufacturer india, fleece clothing manufacturer, custom hoodie supplier" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Hoodies
          </p>
          <div className="mt-6 block overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <h1 className="font-display text-5xl md:text-7xl">Hoodies Collection</h1>
            <p className="sr-only">This section is not clickable; click any photo to contact us.</p>
          </div>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Discover premium hoodies built for warmth, comfort, and standout branding.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-luxe">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((src, index) => (
              <FadeUp key={index} delay={index * 120}>
                <div>
                  <Link
                    to={`/products/hoodies/details/${index + 1}`}
                    aria-label={`View details for Hoodies photo ${index + 1}`}
                    className="block overflow-hidden rounded-[1rem] border border-border bg-card shadow-sm transition-all duration-500"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="relative w-full overflow-hidden bg-[#A9A9A9] h-80 sm:h-96">
                      <motion.img
                        src={src.frontImage}
                        alt={`Hoodies ${index + 1}`}
                        loading="lazy"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={
                          hovered === index
                            ? { opacity: 0, scale: 1.03 }
                            : { opacity: 1, scale: 1 }
                        }
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className={`absolute inset-0 w-full h-full object-contain object-center`}
                      />
                      <motion.img
                        src={src.hoverImage}
                        alt={`Hoodies ${index + 1} hover`}
                        loading="lazy"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={
                          hovered === index
                            ? { opacity: 1, scale: 1.03 }
                            : { opacity: 0, scale: 1 }
                        }
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className={`absolute inset-0 w-full h-full object-contain object-center`}
                      />
                    </div>
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
