import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import roundneck5 from "../assets/roundneck5.jpeg";
import roundneck7 from "../assets/roundneck7.jpeg";
import roundneck2 from "../assets/roundneck2.jpeg";
import roundneck3 from "../assets/roundneck3.jpeg";
import roundneck4 from "../assets/roundneck4.jpeg";

type PhotoItem = {
  frontImage: string;
  imageClassName?: string;
};

const photos: PhotoItem[] = [
  { frontImage: roundneck4},
  { frontImage: roundneck5 },
  { frontImage: roundneck2},
  { frontImage: roundneck3 },
  { frontImage: roundneck7 },
];

export default function ProductsRoundNeck() {

  return (
    <>
      <Seo title="Round Neck T-Shirt Manufacturer India | Custom Cotton Tees" description="Discover premium round neck T-shirt manufacturing with custom GSM, fabric options, print, embroidery, and private label support from 5BROS Clothing." canonicalPath="/products/round-neck" keywords="round neck manufacturer, custom t shirt manufacturer, bulk t shirt supplier, cotton t shirt manufacturer" />
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Round Neck
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-luxe px-4 md:px-6 lg:px-8">
          <div className="hidden md:block">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {photos.map((src, index) => (
                <FadeUp key={index} delay={index * 120}>
                  <div>
                    <Link
                      to={`/products/round-neck/details/${index + 1}`}
                      aria-label={`View details for Round Neck photo ${index + 1}`}
                      className="block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500"
                    >
                      <div className="relative w-full overflow-hidden h-96 sm:h-112">
                        <img
                          src={src.frontImage}
                          alt={`Round Neck ${index + 1}`}
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
                to={`/products/round-neck/details/${index + 1}`}
                aria-label={`View details for Round Neck photo ${index + 1}`}
                className="block"
              >
                <div className="overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative w-full overflow-hidden aspect-3/4">
                    <img
                      src={src.frontImage}
                      alt={`Round Neck ${index + 1}`}
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
