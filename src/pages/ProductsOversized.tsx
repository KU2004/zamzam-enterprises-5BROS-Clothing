import { Link, useNavigate } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import oversized1 from "../assets/oversized1.jpeg";
import oversized2 from "../assets/oversized2.jpeg";
import oversized3 from "../assets/oversized3.jpeg";
import oversized4 from "../assets/oversized4.jpeg";
import oversized5 from "../assets/oversized5.jpeg";

const photos = [oversized1, oversized2, oversized3, oversized4, oversized5];

export default function ProductsOversized() {
  const navigate = useNavigate();
  return (
    <>
      <Seo title="Oversized Clothing Manufacturer India | Streetwear Apparel" description="Order oversized apparel with premium fabrics, custom labels, and low MOQ manufacturing for modern streetwear and retail collections." canonicalPath="/products/oversized" keywords="oversized clothing manufacturer, oversized t shirt manufacturer, streetwear manufacturer india" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Oversized
          </p>
          <div className="mt-6 block overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <Link to="/contact" onClick={() => { try { navigate("/contact"); } catch (e) {} }} aria-label="Contact us about Oversized collection">
              <h1 className="font-display text-5xl md:text-7xl">Oversized Collection</h1>
            </Link>
            <p className="sr-only">This section is not clickable; click any photo to contact us.</p>
          </div>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Explore our oversized styles made for relaxed streetwear looks and modern comfort.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-luxe">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((src, index) => (
              <FadeUp key={index} delay={index * 30}>
                <Link
                  to="/contact"
                  aria-label={`Contact us about Oversized photo ${index + 1}`}
                  className="group block overflow-hidden rounded-[1rem] border border-border bg-card shadow-sm"
                  onClick={() => {
                    try {
                      navigate("/contact");
                    } catch (e) {
                      /* noop */
                    }
                  }}
                >
                  <div className="relative w-full overflow-hidden bg-muted h-80 sm:h-96">
                    <img
                      src={src}
                      alt={`Oversized ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
