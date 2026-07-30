import { useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import oversized1Bg from "../assets/oversized1.jpeg";
import oversized1p2 from "../assets/oversized1p2.png";
import oversized2Bg from "../assets/oversized2.jpeg";
import oversized2p2 from "../assets/oversized2p2.png";
import oversized3Bg from "../assets/oversized3.jpeg";
import oversized3p2 from "../assets/oversized3p2.png";
import oversized4Bg from "../assets/oversized4.jpeg";
import oversized4p2 from "../assets/oversized4p2.png";
import oversized5Bg from "../assets/oversized5.jpeg";
import oversized5p2 from "../assets/oversized5p2.png";

const photos = [
  { frontImage: oversized1Bg, hoverImage: oversized1p2 },
  { frontImage: oversized2Bg, hoverImage: oversized2p2 },
  { frontImage: oversized3Bg, hoverImage: oversized3p2 },
  { frontImage: oversized4Bg, hoverImage: oversized4p2 },
  { frontImage: oversized5Bg, hoverImage: oversized5p2 },
];

export default function ProductsOversized() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileTapped, setMobileTapped] = useState<number | null>(null);

  const handleMobileTapToggle = (index: number, event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (mobileTapped === index) {
      window.location.assign(`/products/oversized/details/${index + 1}`);
      return;
    }

    setMobileTapped(index);
  };

  return (
    <>
      <Seo title="Oversized Clothing Manufacturer India | Streetwear Apparel" description="Order oversized apparel with premium fabrics, custom labels, and low MOQ manufacturing for modern streetwear and retail collections." canonicalPath="/products/oversized" keywords="oversized clothing manufacturer, oversized t shirt manufacturer, streetwear manufacturer india" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Oversized
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-luxe">
          <div className="hidden md:block">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((src, index) => (
                <FadeUp key={index} delay={index * 120}>
                  <div>
                    <Link
                      to={`/products/oversized/details/${index + 1}`}
                      aria-label={`View details for Oversized photo ${index + 1}`}
                      className="block overflow-hidden rounded-3xl transition-all duration-500"
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div className="relative w-full overflow-hidden h-80 sm:h-96 bg-transparent">
                        <motion.img
                          src={src.frontImage}
                          alt={`Oversized ${index + 1}`}
                          loading="lazy"
                          initial={{ opacity: 1, scale: 1 }}
                          animate={hovered === index ? { opacity: 0, scale: 1.03 } : { opacity: 1, scale: 1 }}
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                          className={`absolute inset-0 w-full h-full object-contain object-center ${index === 0 || index === 4 ? "scale-[1.12]" : ""}`}
                        />
                        <motion.img
                          src={src.hoverImage}
                          alt={`Oversized ${index + 1} hover`}
                          loading="lazy"
                          initial={{ opacity: 0, scale: 1 }}
                          animate={hovered === index ? { opacity: 1, scale: 1.03 } : { opacity: 0, scale: 1 }}
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                          className={`absolute inset-0 w-full h-full object-contain object-center ${index === 0 || index === 4 ? "scale-[1.12]" : ""}`}
                        />
                      </div>
                    </Link>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:hidden">
            {photos.map((src, index) => (
              <Link
                key={index}
                to={`/products/oversized/details/${index + 1}`}
                aria-label={`View details for Oversized photo ${index + 1}`}
                className="block"
                onClick={(event) => handleMobileTapToggle(index, event)}
              >
                <div className="overflow-hidden rounded-3xl">
                  <div className="relative w-full overflow-hidden aspect-2/3 bg-transparent">
                    <motion.img
                      src={src.frontImage}
                      alt={`Oversized ${index + 1}`}
                      loading="lazy"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={mobileTapped === index ? { opacity: 0, scale: 1.03 } : { opacity: 1, scale: 1 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className={`absolute inset-0 w-full h-full object-contain object-center ${index === 0 || index === 4 ? "scale-[1.12]" : ""}`}
                    />
                    <motion.img
                      src={src.hoverImage}
                      alt={`Oversized ${index + 1} hover`}
                      loading="lazy"
                      initial={{ opacity: 0, scale: 1 }}
                      animate={mobileTapped === index ? { opacity: 1, scale: 1.03 } : { opacity: 0, scale: 1 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className={`absolute inset-0 w-full h-full object-contain object-center ${index === 0 || index === 4 ? "scale-[1.12]" : ""}`}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
