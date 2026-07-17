import { useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import sports1Bg from "../assets/sports1-bg.png";
import sports1p2 from "../assets/sports1p2.png";
import sports2Bg from "../assets/sports2-bg.png";
import sports2p2 from "../assets/sports2p2.png";
import sports3Bg from "../assets/sports3-bg.png";
import sports3p2 from "../assets/sports3p2.png";
import sports4Bg from "../assets/sports4-bg.png";
import sports4p2 from "../assets/sports4p2.png";
import sports5Bg from "../assets/sports5-bg.png";
import sports5p2 from "../assets/sports5p2.png";
import sports6Bg from "../assets/sports6-bg.png";
import sports6p2 from "../assets/sports6p2.png";
import sports7Bg from "../assets/sports7-bg.png";
import sports7p2 from "../assets/sports7p2.png";

const photos = [
  { frontImage: sports1Bg, hoverImage: sports1p2, imageClassName: "object-cover object-center scale-[1.0]" },
  { frontImage: sports2Bg, hoverImage: sports2p2, imageClassName: "object-cover object-center scale-[1.01]" },
  { frontImage: sports3Bg, hoverImage: sports3p2, imageClassName: "object-cover object-center scale-[1.0]" },
  { frontImage: sports4Bg, hoverImage: sports4p2, imageClassName: "object-cover object-center scale-[1.0]" },
  { frontImage: sports5Bg, hoverImage: sports5p2, imageClassName: "object-cover object-center scale-[1.0]" },
  { frontImage: sports6Bg, hoverImage: sports6p2, imageClassName: "object-cover object-center scale-[1.0]" },
  { frontImage: sports7Bg, hoverImage: sports7p2, imageClassName: "object-cover object-center scale-[1.0]" },
];

export default function ProductsActivewear() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileTapped, setMobileTapped] = useState<number | null>(null);

  const handleMobileTapToggle = (index: number, event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (mobileTapped === index) {
      window.location.assign(`/products/activewear/details/${index + 1}`);
      return;
    }

    setMobileTapped(index);
  };

  return (
    <>
      <Seo title="Sportswear Manufacturer India | Performance Activewear" description="Custom performance activewear manufacturing for teams, gyms, wellness brands, and retail distribution with flexible production runs." canonicalPath="/products/activewear" keywords="sportswear manufacturer india, activewear manufacturer, gym wear manufacturer, performance clothing supplier" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Activewear
          </p>
          <div className="mt-6 block overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <h1 className="font-display text-5xl md:text-7xl">Activewear Collection</h1>
            <p className="sr-only">Browse the product details and request a quote from the dedicated page.</p>
          </div>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Browse our performance apparel developed for sports teams, training programs and active lifestyle brands.
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
                      to={`/products/activewear/details/${index + 1}`}
                      aria-label={`View details for Activewear photo ${index + 1}`}
                      className="block overflow-hidden rounded-[1rem] border border-border bg-card shadow-sm transition-all duration-500"
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div className="relative w-full overflow-hidden bg-[#A9A9A9] h-80 sm:h-96">
                        <motion.img
                          src={src.frontImage}
                          alt={`Activewear ${index + 1}`}
                          loading="lazy"
                          initial={{ opacity: 1, scale: 1 }}
                          animate={hovered === index ? { opacity: 0, scale: 1.03 } : { opacity: 1, scale: 1 }}
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                          className={`absolute inset-0 w-full h-full object-contain object-center ${src.imageClassName ?? ""}`}
                        />
                        <motion.img
                          src={src.hoverImage}
                          alt={`Activewear ${index + 1} hover`}
                          loading="lazy"
                          initial={{ opacity: 0, scale: 1 }}
                          animate={hovered === index ? { opacity: 1, scale: 1.03 } : { opacity: 0, scale: 1 }}
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

          <div className="grid grid-cols-2 gap-4 md:hidden">
            {photos.map((src, index) => (
              <Link
                key={index}
                to={`/products/activewear/details/${index + 1}`}
                aria-label={`View details for Activewear photo ${index + 1}`}
                className="block"
                onClick={(event) => handleMobileTapToggle(index, event)}
              >
                <div className="overflow-hidden rounded-[1rem] border border-border bg-card">
                  <div className="relative w-full overflow-hidden bg-[#A9A9A9] aspect-[2/3]">
                    <motion.img
                      src={src.frontImage}
                      alt={`Activewear ${index + 1}`}
                      loading="lazy"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={mobileTapped === index ? { opacity: 0, scale: 1.03 } : { opacity: 1, scale: 1 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className={`absolute inset-0 w-full h-full object-contain object-center ${src.imageClassName ?? ""}`}
                    />
                    <motion.img
                      src={src.hoverImage}
                      alt={`Activewear ${index + 1} hover`}
                      loading="lazy"
                      initial={{ opacity: 0, scale: 1 }}
                      animate={mobileTapped === index ? { opacity: 1, scale: 1.03 } : { opacity: 0, scale: 1 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className={`absolute inset-0 w-full h-full object-contain object-center ${src.imageClassName ?? ""}`}
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
