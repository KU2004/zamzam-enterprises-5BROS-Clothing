import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import custom1 from "../assets/custom1.jpeg";
import custom2Bg from "../assets/custom2-bg.png";
import custom3Bg from "../assets/custom3-bg.png";
import custom4Bg from "../assets/custom4-bg.png";
import custom7Bg from "../assets/custom7-bg.png";
import custom9Bg from "../assets/custom9-bg.png";

const photos = [
  { frontImage: custom1, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: custom2Bg},
  { frontImage: custom3Bg, imageClassName: "object-cover object-center scale-[1.0]" },
  { frontImage: custom4Bg, imageClassName: "object-cover object-center scale-[1.12]" },  { frontImage: custom7Bg, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: custom9Bg, imageClassName: "object-cover object-center scale-[1.22]" },
];

export default function ProductsCustomLabel() {

  return (
    <>
      <Seo title="Private Label Clothing Manufacturer India | OEM & ODM" description="Build your apparel brand with our OEM, ODM, and private label manufacturing services for uniforms, workwear, and fashion basics." canonicalPath="/products/custom-label" keywords="private label clothing manufacturer, oem clothing manufacturer, odm clothing manufacturer, custom label apparel manufacturer" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Custom Label
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
                      className="block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500"
                    >
                      <div className="relative w-full overflow-hidden bg-[#A9A9A9] h-80 sm:h-96">
                        <img
                          src={src.frontImage}
                          alt={`Custom Label ${index + 1}`}
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
                to={`/products/custom-label/details/${index + 1}`}
                aria-label={`View details for Custom Label photo ${index + 1}`}
                className="block"
              >
                <div className="overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative w-full overflow-hidden bg-[#A9A9A9] aspect-2/3">
                    <img
                      src={src.frontImage}
                      alt={`Custom Label ${index + 1}`}
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
