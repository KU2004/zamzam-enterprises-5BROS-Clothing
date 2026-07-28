import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import polo1 from "../assets/polo1.png";
import polo2Bg from "../assets/polo2-bg.png";
import polo3Bg from "../assets/polo3-bg.png";
import polo4Bg from "../assets/polo4-bg.png";
import polo5Bg from "../assets/polo5-bg.png";
import polo6Bg from "../assets/polo6-bg.png";
import polo7p2 from "../assets/polo7p2.png";
import polo8Bg from "../assets/polo8-bg.png";
import polo9Bg from "../assets/polo9-bg.png";
import polo10 from "../assets/polo10.jpeg";
import polo11Bg from "../assets/polo11-bg.png";

const photos = [
  { frontImage: polo7p2, name: "Classic Piqué Polo" },
  { frontImage: polo9Bg, name: "Modern Slim Polo" },
  { frontImage: polo8Bg, name: "Performance Polo" },
  { frontImage: polo10, name: "Premium Dress Polo" },
  { frontImage: polo11Bg, name: "Street-Style Polo" },
  { frontImage: polo1,imageClassName: "object-cover object-center scale-[1.12]", name: "Classic Work Polo" },
  { frontImage: polo2Bg,imageClassName: "object-cover object-center scale-[1.12]", name: "Retail Signature Polo" },
  { frontImage: polo3Bg,imageClassName: "object-cover object-center scale-[1.12]", name: "Custom Event Polo" },
  { frontImage: polo4Bg, imageClassName: "object-cover object-center scale-[1.12]", name: "Signature Premium Polo" },
  { frontImage: polo5Bg, name: "Contemporary Polo" },
  { frontImage: polo6Bg, name: "Statement Polo" },
];

export default function ProductsPolo() {
  return (
    <>
      <Seo title="Polo T-Shirt Manufacturer India | Custom Polo Shirts" description="Source premium polo shirts from an India-based manufacturer with tailored fits, branding options, and flexible production runs for bulk orders." canonicalPath="/products/polo" keywords="polo t-shirt manufacturer, custom polo manufacturer, corporate polo supplier, bulk polo shirts" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Polo
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
                      to={`/products/polo/details/${index + 1}`}
                      aria-label={`View details for Polo photo ${index + 1}`}
                      className="block overflow-hidden rounded-[1rem] border border-border bg-card shadow-sm transition-all duration-500"
                    >
                      <div className="relative w-full overflow-hidden bg-[#A9A9A9] h-80 sm:h-96">
                        <img
                          src={src.frontImage}
                          alt={`Polo ${index + 1}`}
                          loading="lazy"
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
                to={`/products/polo/details/${index + 1}`}
                aria-label={`View details for Polo photo ${index + 1}`}
                className="block"
              >
                <div className="overflow-hidden rounded-[1rem] border border-border bg-card">
                  <div className="relative w-full overflow-hidden bg-[#A9A9A9] aspect-[2/3]">
                    <img
                      src={src.frontImage}
                      alt={`Polo ${index + 1}`}
                      loading="lazy"
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
