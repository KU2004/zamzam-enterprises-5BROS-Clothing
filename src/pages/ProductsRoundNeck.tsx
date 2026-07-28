import { Link } from "react-router-dom";
import { FadeUp } from "../components/FadeUp";
import { Seo } from "../components/Seo";

import roundneck5 from "../assets/roundneck5.jpeg";
import roundneck6 from "../assets/roundneck6.jpeg";
import roundneck7 from "../assets/roundneck7.jpeg";
import roundneck8 from "../assets/roundneck8.jpeg";
import roundneck2bg from "../assets/roundneck2-bg.png";
import roundneck3bg from "../assets/roundneck3-bg.png";
import roundneck4bg from "../assets/roundneck4-bg.png";
import roundneck1p2 from "../assets/roundneck1p2.png";

type PhotoItem = {
  frontImage: string;
  imageClassName?: string;
};

const photos: PhotoItem[] = [
  { frontImage: roundneck4bg, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: roundneck5 },
  { frontImage: roundneck8 },
  { frontImage: roundneck2bg, imageClassName: "object-cover object-center scale-[1.12]" },
  { frontImage: roundneck3bg },
  { frontImage: roundneck6 },
  { frontImage: roundneck7 },
  { frontImage: roundneck1p2, imageClassName: "object-cover object-center scale-[1.15]" },
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
        <div className="container-luxe">
          <div className="hidden md:block">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((src, index) => (
                <FadeUp key={index} delay={index * 120}>
                  <div>
                    <Link
                      to={`/products/round-neck/details/${index + 1}`}
                      aria-label={`View details for Round Neck photo ${index + 1}`}
                      className="block overflow-hidden rounded-[1rem] border border-border bg-card shadow-sm transition-all duration-500"
                    >
                      <div className="relative w-full overflow-hidden bg-[#A9A9A9] h-80 sm:h-96">
                        <img
                          src={src.frontImage}
                          alt={`Round Neck ${index + 1}`}
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
                to={`/products/round-neck/details/${index + 1}`}
                aria-label={`View details for Round Neck photo ${index + 1}`}
                className="block"
              >
                <div className="overflow-hidden rounded-[1rem] border border-border bg-card">
                  <div className="relative w-full overflow-hidden bg-[#A9A9A9] aspect-[2/3]">
                    <img
                      src={src.frontImage}
                      alt={`Round Neck ${index + 1}`}
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
