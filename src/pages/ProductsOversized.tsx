import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import oversized1Bg from "../assets/oversized6.jpeg";
import oversized2Bg from "../assets/oversized2.jpeg";
import oversized4Bg from "../assets/oversized8.jpeg";


const photos = [
  { frontImage: oversized1Bg },
  { frontImage: oversized2Bg },
  { frontImage: oversized4Bg },
 
];

export default function ProductsOversized() {

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
                    >
                      <div className="relative w-full overflow-hidden h-80 sm:h-96 bg-transparent">
                        <motion.img
                          src={src.frontImage}
                          alt={`Oversized ${index + 1}`}
                          loading="lazy"
                          initial={{ opacity: 1, scale: 1 }}
                          animate={{ opacity: 1, scale: 1 }}
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
              >
                <div className="overflow-hidden rounded-3xl">
                  <div className="relative w-full overflow-hidden aspect-2/3 bg-transparent">
                    <motion.img
                      src={src.frontImage}
                      alt={`Oversized ${index + 1}`}
                      loading="lazy"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
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
