import { Link, useNavigate } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import custom1 from "../assets/custom1.jpeg";
import custom2 from "../assets/custom2.jpeg";
import custom3 from "../assets/custom3.jpeg";
import custom4 from "../assets/custom4.jpeg";
import custom5 from "../assets/custom5.jpeg";
import custom6 from "../assets/custom6.jpeg";
import custom7 from "../assets/custom7.jpeg";
import custom8 from "../assets/custom8.jpeg";
import custom9 from "../assets/custom9.jpeg";

const photos = [custom1, custom2, custom3, custom4, custom5, custom6, custom7, custom8, custom9];

export default function ProductsCustomLabel() {
  const navigate = useNavigate();
  return (
    <>
      <Seo title="Private Label Clothing Manufacturer India | OEM & ODM" description="Build your apparel brand with our OEM, ODM, and private label manufacturing services for uniforms, workwear, and fashion basics." canonicalPath="/products/custom-label" keywords="private label clothing manufacturer, oem clothing manufacturer, odm clothing manufacturer, custom label apparel manufacturer" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Custom Label
          </p>
          <div className="mt-6 block overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <Link to="/contact" onClick={() => { try { navigate("/contact"); } catch (e) {} }} aria-label="Contact us about Custom Label collection">
              <h1 className="font-display text-5xl md:text-7xl">Custom Label Collection</h1>
            </Link>
            <p className="sr-only">This section is not clickable; click any photo to contact us.</p>
          </div>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            See our tailored corporate, uniform and branding solutions for businesses and promotional teams.
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
                  aria-label={`Contact us about Custom Label photo ${index + 1}`}
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
                      alt={`Custom Label ${index + 1}`}
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
