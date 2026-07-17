import { useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import custom1 from "../assets/custom1.jpeg";
import custom1p2 from "../assets/custom1p2.png";
import custom2Bg from "../assets/custom2-bg.png";
import custom2p2 from "../assets/custom2p2.png";
import custom3Bg from "../assets/custom3-bg.png";
import custom3p2 from "../assets/custom3p2.png";
import custom4Bg from "../assets/custom4-bg.png";
import custom4p2 from "../assets/custom4p2.png";
import custom5Bg from "../assets/custom5-bg.png";
import custom5p2 from "../assets/custom5p2.png";
import custom6Bg from "../assets/custom6-bg.png";
import custom6p2 from "../assets/custom6p2.png";
import custom7Bg from "../assets/custom7-bg.png";
import custom7p2 from "../assets/custom7p2.png";
import custom8p2 from "../assets/custom8p2.png";
import custom8Bg from "../assets/custom8-bg.png";
import custom9p2 from "../assets/custom9p2.png";
import custom9Bg from "../assets/custom9-bg.png";

const photos = [
  { frontImage: custom1p2, hoverImage: custom1, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: custom2p2, hoverImage: custom2Bg, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: custom3p2, hoverImage: custom3Bg, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: custom4p2, hoverImage: custom4Bg, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: custom5p2, hoverImage: custom5Bg, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: custom6p2, hoverImage: custom6Bg, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: custom7p2, hoverImage: custom7Bg, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: custom8p2, hoverImage: custom8Bg, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: custom9p2, hoverImage: custom9Bg, imageClassName: "object-cover object-center scale-[1.22]" },
];

export default function ProductsCustomLabel() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileTapped, setMobileTapped] = useState<number | null>(null);

  const handleMobileTapToggle = (index: number, event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (mobileTapped === index) {
      window.location.assign(`/products/custom-label/details/${index + 1}`);
      return;
    }

    setMobileTapped(index);
  };

  return (
    <>
      <Seo title="Private Label Clothing Manufacturer India | OEM & ODM" description="Build your apparel brand with our OEM, ODM, and private label manufacturing services for uniforms, workwear, and fashion basics." canonicalPath="/products/custom-label" keywords="private label clothing manufacturer, oem clothing manufacturer, odm clothing manufacturer, custom label apparel manufacturer" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Custom Label
          </p>
          <div className="mt-6 block overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <h1 className="font-display text-5xl md:text-7xl">Custom Label Collection</h1>
            <p className="sr-only">Browse the product details and request a quote from the dedicated page.</p>
          </div>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            See our tailored corporate, uniform and branding solutions for businesses and promotional teams.
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
                      to={`/products/custom-label/details/${index + 1}`}
                      aria-label={`View details for Custom Label photo ${index + 1}`}
                      className="block overflow-hidden rounded-[1rem] border border-border bg-card shadow-sm transition-all duration-500"
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div className="relative w-full overflow-hidden bg-[#A9A9A9] h-80 sm:h-96">
                        <motion.img
                          src={src.frontImage}
                          alt={`Custom Label ${index + 1}`}
                          loading="lazy"
                          initial={{ opacity: 1, scale: 1 }}
                          animate={hovered === index ? { opacity: 0, scale: 1.03 } : { opacity: 1, scale: 1 }}
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                          className={`absolute inset-0 w-full h-full object-contain object-center ${src.imageClassName ?? ""}`}
                        />
                        <motion.img
                          src={src.hoverImage}
                          alt={`Custom Label ${index + 1} hover`}
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
                to={`/products/custom-label/details/${index + 1}`}
                aria-label={`View details for Custom Label photo ${index + 1}`}
                className="block"
                onClick={(event) => handleMobileTapToggle(index, event)}
              >
                <div className="overflow-hidden rounded-[1rem] border border-border bg-card">
                  <div className="relative w-full overflow-hidden bg-[#A9A9A9] aspect-[2/3]">
                    <motion.img
                      src={src.frontImage}
                      alt={`Custom Label ${index + 1}`}
                      loading="lazy"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={mobileTapped === index ? { opacity: 0, scale: 1.03 } : { opacity: 1, scale: 1 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className={`absolute inset-0 w-full h-full object-contain object-center ${src.imageClassName ?? ""}`}
                    />
                    <motion.img
                      src={src.hoverImage}
                      alt={`Custom Label ${index + 1} hover`}
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
