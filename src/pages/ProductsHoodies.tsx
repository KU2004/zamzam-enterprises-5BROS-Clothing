import { Link, useNavigate } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";

import hoodies1 from "../assets/hoodies1.jpeg";
import hoodies2 from "../assets/hoodies2.jpeg";
import hoodies3 from "../assets/hoodies3.jpeg";
import hoodies4 from "../assets/hoodies4.jpeg";

const photos = [hoodies1, hoodies2, hoodies3, hoodies4];

export default function ProductsHoodies() {
  const navigate = useNavigate();
  return (
    <>
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Hoodies
          </p>
          <div className="mt-6 block overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <Link to="/contact" onClick={() => { try { navigate("/contact"); } catch (e) {} }} aria-label="Contact us about Hoodies collection">
              <h1 className="font-display text-5xl md:text-7xl">Hoodies Collection</h1>
            </Link>
            <p className="sr-only">This section is not clickable; click any photo to contact us.</p>
          </div>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Discover premium hoodies built for warmth, comfort, and standout branding.
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
                  aria-label={`Contact us about Hoodies photo ${index + 1}`}
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
                      alt={`Hoodies ${index + 1}`}
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
