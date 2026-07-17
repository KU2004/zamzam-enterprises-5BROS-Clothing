import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import polo1 from "../assets/polo1.png";
import polo1p2 from "../assets/polo1p2.png";
import polo2Bg from "../assets/polo2-bg.png";
import polo3Bg from "../assets/polo3-bg.png";
import polo4Bg from "../assets/polo4-bg.png";
import polo5Bg from "../assets/polo5-bg.png";
import polo6Bg from "../assets/polo6-bg.png";
import polo2p2 from "../assets/polo2p2.png";
import polo3p2 from "../assets/polo3p2.png";
import polo4p2 from "../assets/polo4p2.png";
import polo5p2 from "../assets/polo5p2.png";
import polo6p2 from "../assets/polo6p2.png";
import polo7p2 from "../assets/polo7p2.png";
import polo7Bg from "../assets/polo7-bg.png";
import polo8p2 from "../assets/polo8p2.png";
import polo8bg from "../assets/polo8-bg.png";
import polo10 from "../assets/polo10.jpeg";
import polo9p2 from "../assets/polo9p2.png";
import polo9bg from "../assets/polo9-bg.png";
import polo10p2 from "../assets/polo10p2.png";
import polo11p2 from "../assets/polo11p2.png";
import polo11bg from "../assets/polo11-bg.png";

const photos = [
  { frontImage: polo1, hoverImage: polo1p2 },
  { frontImage: polo2Bg, hoverImage: polo2p2 },
  { frontImage: polo3Bg, hoverImage: polo3p2 },
  { frontImage: polo4Bg, hoverImage: polo4p2 },
  { frontImage: polo5Bg, hoverImage: polo5p2 },
  { frontImage: polo6Bg, hoverImage: polo6p2 },
  { frontImage: polo7Bg, hoverImage: polo7p2 },
  { frontImage: polo8p2, hoverImage: polo8bg },
  { frontImage: polo9p2, hoverImage: polo9bg, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: polo10p2, hoverImage: polo10, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: polo11p2, hoverImage: polo11bg, imageClassName: "object-cover object-center scale-[1.12]" },
];

export default function ProductsPolo() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <>
      <Seo title="Polo T-Shirt Manufacturer India | Custom Polo Shirts" description="Source premium polo shirts from an India-based manufacturer with tailored fits, branding options, and flexible production runs for bulk orders." canonicalPath="/products/polo" keywords="polo t-shirt manufacturer, custom polo manufacturer, corporate polo supplier, bulk polo shirts" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Polo
          </p>
          <div className="mt-6 block overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm">
              <h1 className="font-display text-5xl md:text-7xl">Polo Collection</h1>
            
            <p className="sr-only">Browse the product details and request a quote from the dedicated page.</p>
          </div>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Browse premium polo shirts tailored for corporate uniforms, retail, and branded merchandise.
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
                    to={`/products/polo/details/${index + 1}`}
                    aria-label={`View details for Polo photo ${index + 1}`}
                    className="block overflow-hidden rounded-[1rem] border border-border bg-card shadow-sm transition-all duration-500"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="relative w-full overflow-hidden bg-[#A9A9A9] h-80 sm:h-96">
                      <motion.img
                        src={src.frontImage}
                        alt={`Polo ${index + 1}`}
                        loading="lazy"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={
                          hovered === index
                            ? { opacity: 0, scale: 1.03 }
                            : { opacity: 1, scale: 1 }
                        }
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className={`absolute inset-0 w-full h-full object-contain object-center ${src.imageClassName ?? ""}`}
                      />
                      <motion.img
                        src={src.hoverImage}
                        alt={`Polo ${index + 1} hover`}
                        loading="lazy"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={
                          hovered === index
                            ? { opacity: 1, scale: 1.03 }
                            : { opacity: 0, scale: 1 }
                        }
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className={`absolute inset-0 w-full h-full object-contain object-center ${src.imageClassName ?? ""}`}
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
