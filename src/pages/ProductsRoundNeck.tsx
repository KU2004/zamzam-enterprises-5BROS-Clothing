import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import roundneck5 from "../assets/roundneck5.jpeg";
import roundneck6 from "../assets/roundneck6.jpeg";
import roundneck7 from "../assets/roundneck7.jpeg";
import roundneck8 from "../assets/roundneck8.jpeg";
import roundneck1bg from "../assets/roundneck1-bg.png";
import roundneck2bg from "../assets/roundneck2-bg.png";
import roundneck3bg from "../assets/roundneck3-bg.png";
import roundneck4bg from "../assets/roundneck4-bg.png";
import roundneck1p2 from "../assets/roundneck1p2.png";
import roundneck2p2 from "../assets/roundneck2p2.png";
import roundneck3p2 from "../assets/roundneck3p2.png";
import roundneck4p2 from "../assets/roundneck4p2.png";
import roundneck5p2 from "../assets/roundneck5p2.png";
import roundneck6p2 from "../assets/roundneck6p2.png";
import roundneck7p2 from "../assets/roundneck7p2.png";
import roundneck8p2 from "../assets/roundneck8p2.png";

type PhotoItem = {
  frontImage: string;
  hoverImage: string;
  imageClassName?: string;
};

const photos: PhotoItem[] = [
  { frontImage: roundneck1bg, hoverImage: roundneck1p2, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: roundneck2bg, hoverImage: roundneck2p2 },
  { frontImage: roundneck3bg, hoverImage: roundneck3p2 },
  { frontImage: roundneck4bg, hoverImage: roundneck4p2, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: roundneck5, hoverImage: roundneck5p2 },
  { frontImage: roundneck6, hoverImage: roundneck6p2 },
  { frontImage: roundneck7, hoverImage: roundneck7p2 },
  { frontImage: roundneck8p2, hoverImage: roundneck8, imageClassName: "object-cover object-center scale-[1.15]" },
];

export default function ProductsRoundNeck() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <Seo title="Round Neck T-Shirt Manufacturer India | Custom Cotton Tees" description="Discover premium round neck T-shirt manufacturing with custom GSM, fabric options, print, embroidery, and private label support from 5BROS Clothing." canonicalPath="/products/round-neck" keywords="round neck manufacturer, custom t shirt manufacturer, bulk t shirt supplier, cotton t shirt manufacturer" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Round Neck
          </p>
          <div className="mt-6 block overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm">
              <h1 className="font-display text-5xl md:text-7xl">Round Neck Collection</h1>
            
            <p className="sr-only">Browse the product details and request a quote from the dedicated page.</p>
          </div>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Browse premium round neck tees tailored for retail, uniforms, and custom branding.
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
                    to={`/products/round-neck/details/${index + 1}`}
                    aria-label={`View details for Round Neck photo ${index + 1}`}
                    className="block overflow-hidden rounded-[1rem] border border-border bg-card shadow-sm transition-all duration-500"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="relative w-full overflow-hidden bg-[#A9A9A9] h-80 sm:h-96">
                      <motion.img
                        src={src.frontImage}
                        alt={`Round Neck ${index + 1}`}
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
                        alt={`Round Neck ${index + 1} hover`}
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
