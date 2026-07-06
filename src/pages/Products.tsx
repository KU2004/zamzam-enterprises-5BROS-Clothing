import { Link, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { FadeUp } from "../components/FadeUp";

// Round Neck Images
import roundneck1 from "../assets/roundneck4.jpeg";
import roundneck2 from "../assets/roundneck5.jpeg";
import roundneck3 from "../assets/roundneck3.jpeg";
import roundneck4 from "../assets/roundneck1.jpeg";
import roundneck5 from "../assets/roundneck2.jpeg";
import roundneck6 from "../assets/roundneck6.jpeg";
import roundneck7 from "../assets/roundneck7.jpeg";
import roundneck8 from "../assets/roundneck8.jpeg";

// Polo Images
import polo1 from "../assets/polo7.jpeg";
import polo2 from "../assets/polo8.jpeg";
import polo3 from "../assets/polo9.jpeg";
import polo4 from "../assets/polo1.jpeg";
import polo5 from "../assets/polo2.jpeg";
import polo6 from "../assets/polo6.jpeg";
import polo7 from "../assets/polo4.jpeg";
import polo8 from "../assets/polo5.jpeg";
import polo9 from "../assets/polo3.jpeg";
import polo10 from "../assets/polo10.jpeg";
import polo11 from "../assets/polo11.jpeg";

// Oversized Images
import oversized1 from "../assets/oversized1.jpeg";
import oversized2 from "../assets/oversized2.jpeg";
import oversized3 from "../assets/oversized3.jpeg";
import oversized4 from "../assets/oversized4.jpeg";
import oversized5 from "../assets/oversized5.jpeg";

// Hoodie Images
import hoodies1 from "../assets/hoodies1.jpeg";
import hoodies2 from "../assets/hoodies2.jpeg";
import hoodies3 from "../assets/hoodies3.jpeg";
import hoodies4 from "../assets/hoodies4.jpeg";

// Sports Images
import sports1 from "../assets/sports1.jpeg";
import sports2 from "../assets/sports2.jpeg";
import sports3 from "../assets/sports3.jpeg";
import sports4 from "../assets/sports4.jpeg";
import sports5 from "../assets/sports5.jpeg";
import sports6 from "../assets/sports6.jpeg";
import sports7 from "../assets/sports7.jpeg";

// Custom/Uniform Images
import custom1 from "../assets/custom1.jpeg";
import custom2 from "../assets/custom2.jpeg";
import custom3 from "../assets/custom3.jpeg";
import custom4 from "../assets/custom4.jpeg";
import custom5 from "../assets/custom5.jpeg";
import custom6 from "../assets/custom6.jpeg";
import custom7 from "../assets/custom7.jpeg";
import custom8 from "../assets/custom8.jpeg";
import custom9 from "../assets/custom9.jpeg";


const catalogue = [
  // Round Neck Products
  {
    cat: "Round Neck",
    name: "Classic Crew",
    img: roundneck1,
  },
  {
    cat: "Round Neck",
    name: "Bio-Wash Tee",
    img: roundneck2,
  },
  {
    cat: "Round Neck",
    name: "Premium Cotton Tee",
    img: roundneck3,
  },
  {
    cat: "Round Neck",
    name: "Soft Touch Tee",
    img: roundneck4,
  },
  {
    cat: "Round Neck",
    name: "Everyday Crew",
    img: roundneck5,
  },
  {
    cat: "Round Neck",
    name: "Basic Round Neck",
    img: roundneck6,
  },
  {
    cat: "Round Neck",
    name: "Premium Basic",
    img: roundneck7,
  },
  {
    cat: "Round Neck",
    name: "Comfort Fit Tee",
    img: roundneck8,
  },

  // Polo Products
  {
    cat: "Polo",
    name: "Premium Polo",
    img: polo1,
  },
  {
    cat: "Polo",
    name: "Sport Polo",
    img: polo2,
  },
  {
    cat: "Polo",
    name: "Classic Polo",
    img: polo3,
  },
  {
    cat: "Polo",
    name: "Ribbed Collar Polo",
    img: polo4,
  },
  {
    cat: "Polo",
    name: "Performance Polo",
    img: polo5,
  },
  {
    cat: "Polo",
    name: "Elegant Polo",
    img: polo6,
  },
  {
    cat: "Polo",
    name: "Contrast Collar Polo",
    img: polo7,
  },
  {
    cat: "Polo",
    name: "Solid Polo",
    img: polo8,
  },
  {
    cat: "Polo",
    name: "Casual Polo",
    img: polo9,
  },
  {
    cat: "Polo",
    name: "Executive Polo",
    img: polo10,
  },
  {
    cat: "Polo",
    name: "Comfort Polo",
    img: polo11,
  },

  // Oversized Products
  {
    cat: "Oversized",
    name: "Drop Shoulder Oversize",
    img: oversized1,
  },
  {
    cat: "Oversized",
    name: "Vintage Oversize",
    img: oversized2,
  },
  {
    cat: "Oversized",
    name: "Relaxed Fit Oversize",
    img: oversized3,
  },
  {
    cat: "Oversized",
    name: "Streetwear Oversize",
    img: oversized4,
  },
  {
    cat: "Oversized",
    name: "Comfort Oversize",
    img: oversized5,
  },

  // Hoodie Products
  {
    cat: "Hoodies",
    name: "Classic Hoodie",
    img: hoodies1,
  },
  {
    cat: "Hoodies",
    name: "Oversized Hoodie",
    img: hoodies2,
  },
  {
    cat: "Hoodies",
    name: "Premium Hoodie",
    img: hoodies3,
  },
  {
    cat: "Hoodies",
    name: "Comfort Hoodie",
    img: hoodies4,
  },

  // Sports Products
  {
    cat: "Sportswear",
    name: "Athletic Jacket",
    img: sports1,
  },
  {
    cat: "Sportswear",
    name: "Sports Jersey",
    img: sports2,
  },
  {
    cat: "Sportswear",
    name: "Running Shirt",
    img: sports3,
  },
  {
    cat: "Sportswear",
    name: "Joggers",
    img: sports4,
  },
  {
    cat: "Sportswear",
    name: "Track Pants",
    img: sports5,
  },
  {
    cat: "Sportswear",
    name: "Sports Shorts",
    img: sports6,
  },
  {
    cat: "Sportswear",
    name: "Performance Tee",
    img: sports7,
  },

  // Corporate Products
  {
    cat: "Corporate",
    name: "Formal Shirt",
    img: custom1,
  },
  {
    cat: "Corporate",
    name: "Corporate Polo",
    img: custom2,
  },
  {
    cat: "Corporate",
    name: "Uniform Shirt",
    img: custom3,
  },
  {
    cat: "Corporate",
    name: "Professional Tee",
    img: custom4,
  },
  {
    cat: "Corporate",
    name: "Business Casual",
    img: custom5,
  },
  {
    cat: "Corporate",
    name: "Staff Uniform",
    img: custom6,
  },
  {
    cat: "Corporate",
    name: "Company Shirt",
    img: custom7,
  },
  {
    cat: "Corporate",
    name: "Branded Uniform",
    img: custom8,
  },
  {
    cat: "Corporate",
    name: "Executive Uniform",
    img: custom9,
  },
];

const categories = [
  "All",
  "Round Neck",
  "Polo",
  "Oversized",
  "Hoodies",
  "Sportswear",
  "Corporate",
] as const;

const getCategoryFromParams = (params: URLSearchParams): (typeof categories)[number] => {
  const category = params.get("cat");
  return category && categories.includes(category as typeof categories[number])
    ? (category as typeof categories[number])
    : "All";
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const cat = getCategoryFromParams(searchParams);

  const updateCategory = (value: (typeof categories)[number]) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value === "All") {
      nextParams.delete("cat");
    } else {
      nextParams.set("cat", value);
    }
    setSearchParams(nextParams, { replace: true });
  };

  const items = useMemo(() => catalogue.filter((i) => cat === "All" || i.cat === cat), [cat]);

  return (
    <>
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Catalogue
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl">Products</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Explore our full range of custom-manufactured apparel. Every product
            is fully customisable — fabric, GSM, colour, fit and branding.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-luxe grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-8 order-last lg:order-0">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Category
              </p>
              <ul className="mt-3 space-y-2">
                {categories.map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => updateCategory(c)}
                      className={`text-left text-sm w-full py-1.5 transition ${
                        cat === c
                          ? "text-foreground border-l-2 border-gold pl-3 -ml-3"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="order-first lg:order-0">
            <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {items.map((p, i) => (
                <FadeUp key={p.cat + i} delay={i * 40}>
                  <article className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>

                    <div className="mt-4 flex items-center justify-center">
                      <Link
                        to="/contact"
                        className="group inline-flex items-center gap-1 bg-gold px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-charcoal hover:bg-gold-soft transition"
                      >
                        Inquiry
                      </Link>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>
            {items.length === 0 && (
              <p className="text-center text-muted-foreground py-20">
                No products match your filters.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
