import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import hoodies1Bg from "../assets/hoodies1.jpeg";
import hoodies2Bg from "../assets/hoodies2.jpeg";
import hoodies3Bg from "../assets/hoodies3.jpeg";
import hoodies4Bg from "../assets/hoodies4.jpeg";

const photos = [hoodies1Bg, hoodies2Bg, hoodies3Bg, hoodies4Bg];

export default function ProductsHoodies() {


  return (
    <>
      <Seo title="Hoodie Manufacturer India | Sweatshirt & Fleece Apparel" description="Manufacture premium hoodies and sweatshirts in India with custom GSM, fleece options, embroidery, and private label packaging." canonicalPath="/products/hoodies" keywords="hoodie manufacturer india, sweatshirt manufacturer india, fleece clothing manufacturer, custom hoodie supplier" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Hoodies
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-luxe">
          <div className="hidden md:block">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((src, index) => (
                <FadeUp key={index} delay={index * 120}>
                  <div>
                    <Link
                      to={`/products/hoodies/details/${index + 1}`}
                      aria-label={`View details for Hoodies photo ${index + 1}`}
                      className="block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500"
                    >
                      <div className="relative w-full overflow-hidden bg-[#A9A9A9] h-80 sm:h-96">
                        <img
                          src={src}
                          alt={`Hoodies ${index + 1}`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover object-center"
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
                to={`/products/hoodies/details/${index + 1}`}
                aria-label={`View details for Hoodies photo ${index + 1}`}
                className="block"
              >
                <div className="overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative w-full overflow-hidden bg-[#A9A9A9] aspect-2/3">
                    <img
                      src={src}
                      alt={`Hoodies ${index + 1}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center"
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
