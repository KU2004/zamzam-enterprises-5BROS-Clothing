import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import polo1 from "../assets/polo1.jpeg";
import polo2 from "../assets/polo2.jpeg";
import polo3 from "../assets/polo3.jpeg";
import polo4 from "../assets/polo4.jpeg";
import polo5 from "../assets/polo5.jpeg";
import polo6 from "../assets/polo6.jpeg";
import polo7 from "../assets/polo7.jpeg";
import polo10 from "../assets/polo12.jpeg";
import polo11 from "../assets/polo11p3.jpeg";

const photos = [
  { frontImage: polo7, name: "Classic Piqué Polo" },
  { frontImage: polo10, name: "Premium Dress Polo" },
  { frontImage: polo11, imageClassName: "object-cover object-top", name: "Street-Style Polo" },
                          { frontImage: polo1,imageClassName: "object-cover object-top scale-[1.12]", name: "Classic Work Polo" },
  { frontImage: polo2,imageClassName: "object-cover object-top scale-[1.12]", name: "Retail Signature Polo" },
  { frontImage: polo3,imageClassName: "object-cover object-top scale-[1.12]", name: "Custom Event Polo" },
  { frontImage: polo4, imageClassName: "object-cover object-top scale-[1.12]", name: "Signature Premium Polo" },
  { frontImage: polo5, name: "Contemporary Polo" },
  { frontImage: polo6, name: "Statement Polo" },
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
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {photos.map((src, index) => (
                <FadeUp key={index} delay={index * 120}>
                  <div>
                    <Link
                      to={`/products/polo/details/${index + 1}`}
                      aria-label={`View details for Polo photo ${index + 1}`}
                      className="block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500"
                    >
                      <div className="relative w-full overflow-hidden bg-[#A9A9A9] h-96 sm:h-112">
                        <img
                          src={src.frontImage}
                          alt={`Polo ${index + 1}`}
                          loading="lazy"
                          className={`absolute inset-0 w-full h-full object-cover object-top ${src.imageClassName ?? ""}`}
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
                <div className="overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative w-full overflow-hidden bg-[#A9A9A9] aspect-3/4">
                    <img
                      src={src.frontImage}
                      alt={`Polo ${index + 1}`}
                      loading="lazy"
                      className={`absolute inset-0 w-full h-full object-cover object-top ${src.imageClassName ?? ""}`}
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
