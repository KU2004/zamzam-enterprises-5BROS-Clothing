import { Link, useNavigate } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import sports1 from "../assets/sports1.jpeg";
import sports2 from "../assets/sports2.jpeg";
import sports3 from "../assets/sports3.jpeg";
import sports4 from "../assets/sports4.jpeg";
import sports5 from "../assets/sports5.jpeg";
import sports6 from "../assets/sports6.jpeg";
import sports7 from "../assets/sports7.jpeg";

const photos = [sports1, sports2, sports3, sports4, sports5, sports6, sports7];

export default function ProductsActivewear() {
  const navigate = useNavigate();
  return (
    <>
      <Seo title="Sportswear Manufacturer India | Performance Activewear" description="Custom performance activewear manufacturing for teams, gyms, wellness brands, and retail distribution with flexible production runs." canonicalPath="/products/activewear" keywords="sportswear manufacturer india, activewear manufacturer, gym wear manufacturer, performance clothing supplier" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Activewear
          </p>
          <div className="mt-6 block overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <Link to="/contact" onClick={() => { try { navigate("/contact"); } catch (e) {} }} aria-label="Contact us about Activewear collection">
              <h1 className="font-display text-5xl md:text-7xl">Activewear Collection</h1>
            </Link>
            <p className="sr-only">This section is not clickable; click any photo to contact us.</p>
          </div>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Browse our performance apparel developed for sports teams, training programs and active lifestyle brands.
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
                  aria-label={`Contact us about Activewear photo ${index + 1}`}
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
                      alt={`Activewear ${index + 1}`}
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
