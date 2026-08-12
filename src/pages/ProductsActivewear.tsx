import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import sports1Bg from "../assets/sports1.jpeg";
import sports2Bg from "../assets/sports2.jpeg";
import sports4Bg from "../assets/sports4.jpeg";

const photos = [
  { frontImage: sports1Bg, imageClassName: "object-cover object-center scale-[1.0]" },
  { frontImage: sports2Bg, imageClassName: "object-cover object-center scale-[1.01]" },
  { frontImage: sports4Bg, imageClassName: "object-cover object-center scale-[1.0]" },
];

export default function ProductsActivewear() {

  return (
    <>
      <Seo title="Sportswear Manufacturer India | Performance Activewear" description="Custom performance activewear manufacturing for teams, gyms, wellness brands, and retail distribution with flexible production runs." canonicalPath="/products/activewear" keywords="sportswear manufacturer india, activewear manufacturer, gym wear manufacturer, performance clothing supplier" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Activewear
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
                      className="block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500"
                    >
                      <div className="relative w-full overflow-hidden bg-[#A9A9A9] h-80 sm:h-96">
                        <img
                          src={src.frontImage}
                          alt={`Activewear ${index + 1}`}
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
                to={`/products/activewear/details/${index + 1}`}
                aria-label={`View details for Activewear photo ${index + 1}`}
                className="block"
              >
                <div className="overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative w-full overflow-hidden bg-[#A9A9A9] aspect-2/3">
                    <img
                      src={src.frontImage}
                      alt={`Activewear ${index + 1}`}
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
