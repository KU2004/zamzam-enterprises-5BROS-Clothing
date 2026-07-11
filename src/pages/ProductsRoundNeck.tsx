import { Link, useNavigate } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import roundneck1 from "../assets/roundneck1.jpeg";
import roundneck2 from "../assets/roundneck2.jpeg";
import roundneck3 from "../assets/roundneck3.jpeg";
import roundneck4 from "../assets/roundneck4.jpeg";
import roundneck5 from "../assets/roundneck5.jpeg";
import roundneck6 from "../assets/roundneck6.jpeg";
import roundneck7 from "../assets/roundneck7.jpeg";
import roundneck8 from "../assets/roundneck8.jpeg";

const photos = [
  roundneck1,
  roundneck2,
  roundneck3,
  roundneck4,
  roundneck5,
  roundneck6,
  roundneck7,
  roundneck8,
];

export default function ProductsRoundNeck() {
  const navigate = useNavigate();
  return (
    <>
      <Seo title="Round Neck T-Shirt Manufacturer India | Custom Cotton Tees" description="Discover premium round neck T-shirt manufacturing with custom GSM, fabric options, print, embroidery, and private label support from 5BROS Clothing." canonicalPath="/products/round-neck" keywords="round neck manufacturer, custom t shirt manufacturer, bulk t shirt supplier, cotton t shirt manufacturer" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Round Neck
          </p>
          <div className="mt-6 block overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <h1 className="font-display text-5xl md:text-7xl">Round Neck Collection</h1>
            <p className="sr-only">This section is not clickable; click any photo to contact us.</p>
          </div>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Discover our premium round neck tees designed for everyday comfort, durability and easy customization.
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
                  aria-label={`Contact us about Round Neck photo ${index + 1}`}
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
                      alt={`Round neck ${index + 1}`}
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
