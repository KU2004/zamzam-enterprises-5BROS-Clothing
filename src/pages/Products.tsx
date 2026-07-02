import { Link, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { FadeUp } from "../components/FadeUp";

// Round Neck Images
import roundneck1 from "../assets/roundneck1.jpeg";
import roundneck2 from "../assets/roundneck2.jpeg";
import roundneck3 from "../assets/roundneck3.jpeg";
import roundneck4 from "../assets/roundneck4.jpeg";
import roundneck5 from "../assets/roundneck5.jpeg";
import roundneck6 from "../assets/roundneck6.jpeg";
import roundneck7 from "../assets/roundneck7.jpeg";
import roundneck8 from "../assets/roundneck8.jpeg";

// Polo Images
import polo1 from "../assets/polo1.jpeg";
import polo2 from "../assets/polo2.jpeg";
import polo3 from "../assets/polo3.jpeg";
import polo4 from "../assets/polo4.jpeg";
import polo5 from "../assets/polo5.jpeg";
import polo6 from "../assets/polo6.jpeg";
import polo7 from "../assets/polo7.jpeg";
import polo8 from "../assets/polo8.jpeg";
import polo9 from "../assets/polo9.jpeg";
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
    fabric: "100% Cotton",
    gsm: "180 GSM",
    moq: 100,
  },
  {
    cat: "Round Neck",
    name: "Bio-Wash Tee",
    img: roundneck2,
    fabric: "Bio-Washed Cotton",
    gsm: "200 GSM",
    moq: 150,
  },
  {
    cat: "Round Neck",
    name: "Premium Cotton Tee",
    img: roundneck3,
    fabric: "100% Cotton",
    gsm: "190 GSM",
    moq: 100,
  },
  {
    cat: "Round Neck",
    name: "Soft Touch Tee",
    img: roundneck4,
    fabric: "Cotton Combed",
    gsm: "185 GSM",
    moq: 100,
  },
  {
    cat: "Round Neck",
    name: "Everyday Crew",
    img: roundneck5,
    fabric: "100% Cotton",
    gsm: "175 GSM",
    moq: 150,
  },
  {
    cat: "Round Neck",
    name: "Basic Round Neck",
    img: roundneck6,
    fabric: "Cotton Blend",
    gsm: "180 GSM",
    moq: 100,
  },
  {
    cat: "Round Neck",
    name: "Premium Basic",
    img: roundneck7,
    fabric: "100% Cotton",
    gsm: "200 GSM",
    moq: 100,
  },
  {
    cat: "Round Neck",
    name: "Comfort Fit Tee",
    img: roundneck8,
    fabric: "Cotton Rich",
    gsm: "195 GSM",
    moq: 150,
  },

  // Polo Products
  {
    cat: "Polo",
    name: "Premium Polo",
    img: polo1,
    fabric: "Pique Cotton",
    gsm: "220 GSM",
    moq: 100,
  },
  {
    cat: "Polo",
    name: "Sport Polo",
    img: polo2,
    fabric: "Dry-Fit",
    gsm: "160 GSM",
    moq: 150,
  },
  {
    cat: "Polo",
    name: "Classic Polo",
    img: polo3,
    fabric: "100% Cotton Pique",
    gsm: "210 GSM",
    moq: 100,
  },
  {
    cat: "Polo",
    name: "Ribbed Collar Polo",
    img: polo4,
    fabric: "Cotton Pique",
    gsm: "215 GSM",
    moq: 120,
  },
  {
    cat: "Polo",
    name: "Performance Polo",
    img: polo5,
    fabric: "Moisture-Wicking",
    gsm: "170 GSM",
    moq: 150,
  },
  {
    cat: "Polo",
    name: "Elegant Polo",
    img: polo6,
    fabric: "Premium Pique",
    gsm: "225 GSM",
    moq: 100,
  },
  {
    cat: "Polo",
    name: "Contrast Collar Polo",
    img: polo7,
    fabric: "Cotton Blend Pique",
    gsm: "200 GSM",
    moq: 120,
  },
  {
    cat: "Polo",
    name: "Solid Polo",
    img: polo8,
    fabric: "100% Cotton",
    gsm: "210 GSM",
    moq: 100,
  },
  {
    cat: "Polo",
    name: "Casual Polo",
    img: polo9,
    fabric: "Cotton Pique",
    gsm: "205 GSM",
    moq: 120,
  },
  {
    cat: "Polo",
    name: "Executive Polo",
    img: polo10,
    fabric: "Premium Pique",
    gsm: "220 GSM",
    moq: 100,
  },
  {
    cat: "Polo",
    name: "Comfort Polo",
    img: polo11,
    fabric: "Soft Cotton Pique",
    gsm: "215 GSM",
    moq: 150,
  },

  // Oversized Products
  {
    cat: "Oversized",
    name: "Drop Shoulder Oversize",
    img: oversized1,
    fabric: "Heavy Cotton",
    gsm: "240 GSM",
    moq: 100,
  },
  {
    cat: "Oversized",
    name: "Vintage Oversize",
    img: oversized2,
    fabric: "Washed Cotton",
    gsm: "250 GSM",
    moq: 100,
  },
  {
    cat: "Oversized",
    name: "Relaxed Fit Oversize",
    img: oversized3,
    fabric: "100% Cotton",
    gsm: "230 GSM",
    moq: 100,
  },
  {
    cat: "Oversized",
    name: "Streetwear Oversize",
    img: oversized4,
    fabric: "Heavy Weight Cotton",
    gsm: "260 GSM",
    moq: 100,
  },
  {
    cat: "Oversized",
    name: "Comfort Oversize",
    img: oversized5,
    fabric: "Soft Cotton",
    gsm: "240 GSM",
    moq: 150,
  },

  // Hoodie Products
  {
    cat: "Hoodies",
    name: "Classic Hoodie",
    img: hoodies1,
    fabric: "French Terry",
    gsm: "320 GSM",
    moq: 100,
  },
  {
    cat: "Hoodies",
    name: "Oversized Hoodie",
    img: hoodies2,
    fabric: "Heavy Fleece",
    gsm: "400 GSM",
    moq: 100,
  },
  {
    cat: "Hoodies",
    name: "Premium Hoodie",
    img: hoodies3,
    fabric: "Brushed Fleece",
    gsm: "350 GSM",
    moq: 100,
  },
  {
    cat: "Hoodies",
    name: "Comfort Hoodie",
    img: hoodies4,
    fabric: "Soft Terry",
    gsm: "330 GSM",
    moq: 150,
  },

  // Sports Products
  {
    cat: "Sportswear",
    name: "Athletic Jacket",
    img: sports1,
    fabric: "Performance Knit",
    gsm: "200 GSM",
    moq: 100,
  },
  {
    cat: "Sportswear",
    name: "Sports Jersey",
    img: sports2,
    fabric: "Moisture-Wicking",
    gsm: "150 GSM",
    moq: 100,
  },
  {
    cat: "Sportswear",
    name: "Running Shirt",
    img: sports3,
    fabric: "Breathable Mesh",
    gsm: "140 GSM",
    moq: 150,
  },
  {
    cat: "Sportswear",
    name: "Joggers",
    img: sports4,
    fabric: "French Terry",
    gsm: "300 GSM",
    moq: 100,
  },
  {
    cat: "Sportswear",
    name: "Track Pants",
    img: sports5,
    fabric: "Fleece Lined",
    gsm: "280 GSM",
    moq: 100,
  },
  {
    cat: "Sportswear",
    name: "Sports Shorts",
    img: sports6,
    fabric: "Mesh Polyester",
    gsm: "120 GSM",
    moq: 150,
  },
  {
    cat: "Sportswear",
    name: "Performance Tee",
    img: sports7,
    fabric: "Dry-Fit",
    gsm: "160 GSM",
    moq: 150,
  },

  // Corporate Products
  {
    cat: "Corporate",
    name: "Formal Shirt",
    img: custom1,
    fabric: "Cotton Twill",
    gsm: "180 GSM",
    moq: 100,
  },
  {
    cat: "Corporate",
    name: "Corporate Polo",
    img: custom2,
    fabric: "Pique Cotton",
    gsm: "220 GSM",
    moq: 100,
  },
  {
    cat: "Corporate",
    name: "Uniform Shirt",
    img: custom3,
    fabric: "Cotton Blend",
    gsm: "175 GSM",
    moq: 150,
  },
  {
    cat: "Corporate",
    name: "Professional Tee",
    img: custom4,
    fabric: "100% Cotton",
    gsm: "190 GSM",
    moq: 100,
  },
  {
    cat: "Corporate",
    name: "Business Casual",
    img: custom5,
    fabric: "Cotton Twill",
    gsm: "185 GSM",
    moq: 120,
  },
  {
    cat: "Corporate",
    name: "Staff Uniform",
    img: custom6,
    fabric: "Poly Cotton",
    gsm: "165 GSM",
    moq: 200,
  },
  {
    cat: "Corporate",
    name: "Company Shirt",
    img: custom7,
    fabric: "Cotton Blend",
    gsm: "180 GSM",
    moq: 100,
  },
  {
    cat: "Corporate",
    name: "Branded Uniform",
    img: custom8,
    fabric: "Premium Cotton",
    gsm: "195 GSM",
    moq: 150,
  },
  {
    cat: "Corporate",
    name: "Executive Uniform",
    img: custom9,
    fabric: "Cotton Twill",
    gsm: "190 GSM",
    moq: 100,
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
            <p className="text-sm text-muted-foreground mb-6">
              {items.length} products
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p, i) => (
                <FadeUp key={p.name + i} delay={i * 40}>
                  <article className="group">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="mt-1 font-display text-lg">{p.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {p.fabric} · {p.gsm} · MOQ {p.moq}
                      </p>
                      <div className="mt-4 flex gap-3">
                        <Link
                          to="/contact"
                          className="text-[11px] uppercase tracking-[0.2em] border-b border-gold pb-0.5"
                        >
                          Inquiry
                        </Link>
                      </div>
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
