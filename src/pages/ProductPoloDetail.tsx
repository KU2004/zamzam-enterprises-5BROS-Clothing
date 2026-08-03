import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Seo } from "../components/Seo";

import polo1 from "../assets/polo1.jpeg";
import polo2 from "../assets/polo2.jpeg";
import polo3 from "../assets/polo3.jpeg";
import polo4 from "../assets/polo4.jpeg";
import polo5 from "../assets/polo5.jpeg";
import polo6 from "../assets/polo6.jpeg";
import polo11 from "../assets/polo11.jpeg";
import polo7p3 from "../assets/polo7p3.jpeg";
import polo7p4 from "../assets/polo7p4.jpeg";
import polo11p4 from "../assets/polo11p4.jpeg";
import polo11p5 from "../assets/polo11p5.jpeg";
import polo12p2 from "../assets/polo12p2.jpeg";
import polo12p3 from "../assets/polo12p3.jpeg";

const sharedTechnicalHighlights = [
  { title: "Fabric", value: "Cotton Piqué (96% Cotton, 4% Spandex)" },
  { title: "GSM", value: "210-220" },
  { title: "Colour", value: "As per Request" },
  { title: "Sizes", value: "As per Request" },
  { title: "MOQ", value: "1000 pieces each colour" },
];



const productVariants = [
  {
    id: 1,
    title: "Classic Piqué Polo",
    subtitle: "Structured collar and premium finish for smart-casual and corporate wear.",
    image: polo7p3,
    technicalHighlights: [
      { title: "Fabric options", value: "ITS Fabric Cotton Piqué (96% Cotton, 4% Spandex), cotton-poly blends, and performance mixes" },
      { title: "Fit range", value: "Classic, slim, and relaxed silhouettes" },
      { title: "Customization", value: "Embroidery, screen print, woven labels, and patches" },
      { title: "MOQ", value: "Flexible production runs for starter and bulk orders" },
    ],
    benefits: [
      "Ideal for corporate uniforms, hospitality teams, and retail merchandise",
      "Premium stitch quality with strong collar and placket structure",
      "Brand-ready finishing for private label and promotional apparel",
      "Fast sampling and export-friendly packaging support",
    ],
    detailCards: [
      { title: "Technical construction", body: "Structured collar, reinforced stitching, and a polished finish designed for repeated wear and professional presentation." },
      { title: "Color and branding", body: "Choose from a range of base colors and add your logo with embroidery or print solutions." },
      { title: "Production flexibility", body: "We support low-volume testing as well as larger orders without compromising quality or turnaround time." },
    ],
  },
  {
    id: 2,
    title: "Premium Dress Polo",
    subtitle: "A sharper option for executive wear, hospitality, and formal branding.",
    image: polo12p2,
    technicalHighlights: [
      { title: "Fabric options", value: "High-count cotton and polished blends" },
      { title: "Fit range", value: "Tailored and refined profiles" },
      { title: "Customization", value: "Embroidery, jacquard, and premium labels" },
      { title: "MOQ", value: "Flexible production for premium apparel programs" },
    ],
    benefits: [
      "Elevated look for client-facing teams",
      "Smart finishing for a refined presentation",
      "Excellent for hospitality and executive uniforms",
      "Custom branding adds a premium touch",
    ],
    detailCards: [
      { title: "Premium finish", body: "Refined construction and detailed trimming create a premium visual result." },
      { title: "Brand alignment", body: "Available in custom colors and branding treatments for a consistent image." },
      { title: "Quality control", body: "Our team reviews each production milestone for consistency and finish." },
    ],
  },
  {
    id: 3,
    title: "Street-Style Polo",
    subtitle: "Casual yet polished for lifestyle collections and brand campaigns.",
    image: polo11p5,
    technicalHighlights: [
      { title: "Fabric options", value: "Soft cotton and easy-care blends" },
      { title: "Fit range", value: "Relaxed and casual silhouettes" },
      { title: "Customization", value: "Screen print, patches, and label applications" },
      { title: "MOQ", value: "Ideal for launch collections and promotions" },
    ],
    benefits: [
      "Great for fashion-forward retail launches",
      "Comfortable feel with modern presentation",
      "Supports branding for events and campaigns",
      "Fast development for new product lines",
    ],
    detailCards: [
      { title: "Casual structure", body: "A relaxed drape with polished finishing that feels versatile and modern." },
      { title: "Creative branding", body: "Custom graphics and logo placement help your collection stand out." },
      { title: "Launch support", body: "We support short lead times for initial sampling and launch orders." },
    ],
  },
  {
    id: 4,
    title: "Classic Work Polo",
    subtitle: "Durable and professional for uniforms, training, and field teams.",
    image: polo1,
    technicalHighlights: [
      { title: "Fabric options", value: "Durable cotton-rich and blended fabrics" },
      { title: "Fit range", value: "Practical and comfortable profiles" },
      { title: "Customization", value: "Chest branding, name patches, and workwear labels" },
      { title: "MOQ", value: "Built for dependable repeat orders" },
    ],
    benefits: [
      "Reliable for workwear and institutional uniforms",
      "Strong wear performance through repeated use",
      "Easy to brand and maintain across teams",
      "Supports operational consistency at scale",
    ],
    detailCards: [
      { title: "Work-ready durability", body: "Designed to handle regular wear while maintaining a tidy professional shape." },
      { title: "Team identification", body: "Add logos, names, and departments for a clean team presentation." },
      { title: "Operational support", body: "We help coordinate multi-size runs and consolidated shipments." },
    ],
  },
  {
    id: 5,
    title: "Retail Signature Polo",
    subtitle: "A polished everyday polo for retail stores and merchandising programs.",
    image: polo2,
    technicalHighlights: [
      { title: "Fabric options", value: "Soft cotton and premium woven blends" },
      { title: "Fit range", value: "Everyday and easy-fit options" },
      { title: "Customization", value: "Embroidery, print, and label finishing" },
      { title: "MOQ", value: "Flexible for retail pilots and seasonal stock" },
    ],
    benefits: [
      "Great for stores, gift sets, and promotional bundles",
      "Comfortable and easy to wear daily",
      "Excellent for private label and co-branded collections",
      "Consistent quality across repeat orders",
    ],
    detailCards: [
      { title: "Retail-ready finish", body: "Creates a premium impression for shelf display and customer experience." },
      { title: "Flexible branding", body: "Supports both understated and prominent placement for your brand." },
      { title: "Inventory planning", body: "We accommodate staged deliveries for seasonal launches and replenishment." },
    ],
  },
  {
    id: 6,
    title: "Custom Event Polo",
    subtitle: "A versatile option for events, giveaways, and brand activations.",
    image: polo3,
    technicalHighlights: [
      { title: "Fabric options", value: "Soft, printable fabrics and cotton blends" },
      { title: "Fit range", value: "Classic and semi-relaxed profiles" },
      { title: "Customization", value: "Custom prints, patches, and branding accents" },
      { title: "MOQ", value: "Perfect for event kits and short-run campaigns" },
    ],
    benefits: [
      "Ideal for corporate events and promotional campaigns",
      "Easy to personalize for different audiences",
      "Strong visual impact with branded finishing",
      "Supports quick turnaround for campaign deadlines",
    ],
    detailCards: [
      { title: "Event-friendly design", body: "A practical and professional style that works across many event formats." },
      { title: "Brand storytelling", body: "Custom graphics and color choices help highlight your campaign message." },
      { title: "Quick response", body: "We support rapid approval and delivery for short-turnaround orders." },
    ],
  },
  {
    id: 7,
    title: "Signature Premium Polo",
    subtitle: "A refined option for premium retail and elevated lifestyle apparel programs.",
    image: polo4,
    technicalHighlights: [
      { title: "Fabric options", value: "Premium knit constructions and soft cotton blends" },
      { title: "Fit range", value: "Classic and easy-fit silhouettes" },
      { title: "Customization", value: "Embroidery, woven labels, and tonal branding" },
      { title: "MOQ", value: "Flexible runs for launch and replenishment orders" },
    ],
    benefits: [
      "Great for premium retail collections",
      "Comfortable everyday wear with a polished finish",
      "Strong brand presentation with subtle detailing",
      "Reliable for repeat orders and seasonal updates",
    ],
    detailCards: [
      { title: "Premium finish", body: "A polished, premium look suitable for branded retail collections." },
      { title: "Brand consistency", body: "Supports understated logos and refined finishing for premium presentation." },
      { title: "Production support", body: "We help coordinate sampling, bulk production, and shipment planning." },
    ],
  },
  {
    id: 8,
    title: "Contemporary Polo",
    subtitle: "Modern styling with clean lines for fashion-led and promotional programs.",
    image: polo5,
    technicalHighlights: [
      { title: "Fabric options", value: "Soft cotton and contemporary performance blends" },
      { title: "Fit range", value: "Modern and relaxed profiles" },
      { title: "Customization", value: "Print, embroidery, and patch branding" },
      { title: "MOQ", value: "Suitable for small-batch and larger campaign orders" },
    ],
    benefits: [
      "Excellent for trend-focused collections",
      "Balanced comfort and visual impact",
      "Flexible branding options for campaign use",
      "Supports fast development for new launches",
    ],
    detailCards: [
      { title: "Modern silhouette", body: "Built for a fresh, contemporary look that fits today’s fashion direction." },
      { title: "Creative branding", body: "Easy to customize for campaign visuals and lifestyle merchandise." },
      { title: "Responsive production", body: "Ideal for short lead times and promotional order bursts." },
    ],
  },
  {
    id: 9,
    title: "Statement Polo",
    subtitle: "A bold option for branded apparel, team uniforms, and fashion-forward campaigns.",
    image: polo6,
    technicalHighlights: [
      { title: "Fabric options", value: "Textured knits and versatile blended fabrics" },
      { title: "Fit range", value: "Structured and relaxed options" },
      { title: "Customization", value: "Large-scale branding, patches, and embroidery" },
      { title: "MOQ", value: "Flexible for both prototyping and full runs" },
    ],
    benefits: [
      "Bold aesthetic for standout apparel programs",
      "Reliable structure and finish for repeated wear",
      "Great for uniforms and brand activations",
      "Supports scalable production with consistent quality",
    ],
    detailCards: [
      { title: "Visual impact", body: "A statement style that elevates branded apparel and event uniforms." },
      { title: "Customization depth", body: "Ideal for strong logos, patches, and signature design details." },
      { title: "Production flexibility", body: "We support development from concept samples through full-scale production." },
    ],
  },
];

function Gallery({ product }: { product: any }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<"left" | "right" | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxScale, setLightboxScale] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState<{ x: number; y: number } | null>(null);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);
  const transitionTimerRef = useRef<number | null>(null);
  const loadingTimerRef = useRef<number | null>(null);
  const galleryStageRef = useRef<HTMLDivElement | null>(null);
  const touchStateRef = useRef<{ mode: "pan" | "pinch" | null; startDistance?: number; startZoom?: number; startPanX?: number; startPanY?: number; startX?: number; startY?: number }>({ mode: null });
const images = useMemo(() => {
  switch (product.id) {
    case 1:
      return [polo7p3, polo7p4];

    case 2:
      return [polo12p2, polo12p3];

    case 3:
      return [polo11p5, polo11p4, polo11];

    default:
      return [product.image];
  }
}, [product.id, product.image]);
  useEffect(() => {
    const preloadImages = [...images, ...(images.length > 1 ? [images[(selectedImage + 1) % images.length]] : [])];
    preloadImages.forEach((src: string) => {
      const img = new Image();
      img.src = src;
    });

    setSelectedImage(0);
    setIsTransitioning(false);
    setTransitionDirection(null);
    setIsImageLoading(true);
    if (loadingTimerRef.current !== null) {
      window.clearTimeout(loadingTimerRef.current);
    }
    loadingTimerRef.current = window.setTimeout(() => {
      setIsImageLoading(false);
      loadingTimerRef.current = null;
    }, 220);
  }, [product.id]);

  useEffect(() => {
    const mountTimer = window.setTimeout(() => setIsPageReady(true), 80);
    return () => window.clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) {
      setLightboxScale(1);
      setPan({ x: 0, y: 0 });
      setZoomOrigin({ x: 50, y: 50 });
      setIsPanning(false);
      setPanStart(null);
      touchStateRef.current = { mode: null };
    }
  }, [isLightboxOpen, selectedImage]);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
      if (loadingTimerRef.current !== null) {
        window.clearTimeout(loadingTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
      if (e.key === "Escape") {
        e.preventDefault();
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isLightboxOpen, selectedImage, images.length]);

  const changeImage = (nextIndex: number) => {
    if (nextIndex === selectedImage || images.length === 0) return;

    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current);
    }
    if (loadingTimerRef.current !== null) {
      window.clearTimeout(loadingTimerRef.current);
    }

    setTransitionDirection(nextIndex > selectedImage ? "right" : "left");
    setIsTransitioning(true);
    setIsImageLoading(true);
    transitionTimerRef.current = window.setTimeout(() => {
      setSelectedImage(nextIndex);
      setIsTransitioning(false);
      setTransitionDirection(null);
      transitionTimerRef.current = null;
      loadingTimerRef.current = window.setTimeout(() => {
        setIsImageLoading(false);
        loadingTimerRef.current = null;
      }, 180);
    }, 250);
  };

  const prev = () => {
    const nextIndex = selectedImage === 0 ? images.length - 1 : selectedImage - 1;
    changeImage(nextIndex);
  };

  const next = () => {
    const nextIndex = selectedImage === images.length - 1 ? 0 : selectedImage + 1;
    changeImage(nextIndex);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0]?.clientX ?? null);
  };


  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const endX = e.changedTouches[0]?.clientX ?? 0;
    const delta = endX - touchStartX;

    if (delta > 50) prev();
    if (delta < -50) next();
    setTouchStartX(null);
  };

  const handleLightboxWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cursorX = ((e.clientX - rect.left) / rect.width) * 100;
    const cursorY = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin({ x: cursorX, y: cursorY });

    const delta = e.deltaY < 0 ? 0.15 : -0.15;
    const nextZoom = Math.min(5, Math.max(1, Number((lightboxScale + delta).toFixed(2))));
    
    // Only prevent default if already zoomed or will be zoomed
    if (nextZoom > 1 || lightboxScale > 1) {
      e.preventDefault();
    }
    
    setLightboxScale(nextZoom);
    if (nextZoom === 1) {
      setPan({ x: 0, y: 0 });
    }
  };

  const handleLightboxDoubleClick = () => {
    setLightboxScale((current) => (current > 1 ? 1 : 2));
    setPan({ x: 0, y: 0 });
  };

  const handleLightboxMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (lightboxScale <= 1) return;
    setIsPanning(true);
    setPanStart({ x: e.clientX, y: e.clientY });
  };

  const handleLightboxMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPanning || !panStart) return;
    const dx = e.clientX - panStart.x;
    const dy = e.clientY - panStart.y;
    setPan((current) => ({ x: current.x + dx, y: current.y + dy }));
    setPanStart({ x: e.clientX, y: e.clientY });
  };

  const handleLightboxMouseUp = () => {
    setIsPanning(false);
    setPanStart(null);
  };

  const handleLightboxTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      touchStateRef.current = {
        mode: "pan",
        startX: e.touches[0]?.clientX,
        startY: e.touches[0]?.clientY,
        startPanX: pan.x,
        startPanY: pan.y,
      };
      return;
    }

    if (e.touches.length >= 2) {
      const [first, second] = Array.from(e.touches);
      const distance = Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY);
      touchStateRef.current = {
        mode: "pinch",
        startDistance: distance,
        startZoom: lightboxScale,
        startPanX: pan.x,
        startPanY: pan.y,
      };
    }
  };

  const handleLightboxTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1 && touchStateRef.current.mode === "pan") {
      const deltaX = (e.touches[0]?.clientX ?? 0) - (touchStateRef.current.startX ?? 0);
      const deltaY = (e.touches[0]?.clientY ?? 0) - (touchStateRef.current.startY ?? 0);
      setPan({ x: (touchStateRef.current.startPanX ?? 0) + deltaX, y: (touchStateRef.current.startPanY ?? 0) + deltaY });
      return;
    }

    if (e.touches.length >= 2 && touchStateRef.current.mode === "pinch") {
      const [first, second] = Array.from(e.touches);
      const distance = Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY);
      const ratio = distance / (touchStateRef.current.startDistance ?? distance);
      const nextZoom = Math.min(5, Math.max(1, Number(((touchStateRef.current.startZoom ?? 1) * ratio).toFixed(2))));
      setLightboxScale(nextZoom);
      if (nextZoom === 1) {
        setPan({ x: 0, y: 0 });
      }
    }
  };

  const handleLightboxTouchEnd = () => {
    touchStateRef.current = { mode: null };
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full">
     <div
  className={`group relative mx-auto w-full max-w-full min-w-0 self-start transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
    isPageReady ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
  }`}

        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={galleryStageRef}
        >
          {isImageLoading && (
            <div className="absolute inset-0 z-10 rounded-[28px] bg-black/3" />
          )}

          <div
            className={`relative flex items-center justify-center transition-all duration-250 ease-out ${isTransitioning ? (transitionDirection === "right" ? "translate3d(10px,0,0) opacity-0" : "translate3d(-10px,0,0) opacity-0") : "translate3d(0,0,0) opacity-100"}`}
          >
            <img
              key={images[selectedImage]}
              src={images[selectedImage]}
              alt={`${product.title} image ${selectedImage + 1}`}
              className="max-h-[78vh] w-auto max-w-[92%] sm:max-w-[92%] lg:max-w-[93%] object-contain transition-transform duration-300 transform-gpu backface-hidden"
              onClick={() => setIsLightboxOpen(true)}
              style={{
                display: "block",
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "center center",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
              loading="eager"
              draggable={false}
            />
          </div>

          {images.length > 1 && (
<div className="mt-4 flex gap-2 overflow-x-auto pb-2">
  {images.map((img: string, index: number) => (
    <button
      key={`${img}-${index}`}
      onClick={() => changeImage(index)}
      className={`group shrink-0 rounded-[0.95rem] border p-1 shadow-sm transition-all duration-200 ${
        selectedImage === index
          ? "border-gold/90 shadow-[0_12px_28px_-16px_rgba(255,215,0,0.28)]"
          : "border-border/60 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
      }`}
      style={{ minWidth: 84, width: 84, height: 84 }}
      aria-label={`View image ${index + 1}`}
    >
      <img
        src={img}
        alt={`thumb-${index}`}
        className="h-full w-full rounded-2xl object-contain transition-transform duration-200"
        loading="lazy"
      />
    </button>
  ))}
</div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal shadow-[0_8px_24px_rgba(0,0,0,0.10)] backdrop-blur">
            {selectedImage + 1} / {images.length}
          </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="hidden md:flex absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-black/5 bg-white/90 p-3 text-charcoal shadow-[0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 md:opacity-0 md:group-hover:opacity-100"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="hidden md:flex absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-black/5 bg-white/90 p-3 text-charcoal shadow-[0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 md:opacity-0 md:group-hover:opacity-100"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(true);
            }}
            aria-label="Open image viewer"
            className="absolute right-4 top-4 rounded-full border border-black/5 bg-white/90 p-2.5 text-charcoal shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-xl" onClick={closeLightbox}>
          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-charcoal shadow-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              aria-label="Close viewer"
            >
              ✕
            </button>

            <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-charcoal shadow-lg">
              {selectedImage + 1} / {images.length}
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={() => prev()}
                  aria-label="Previous"
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/70 p-3 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition hover:scale-105"
                >
                  ‹
                </button>

                <button
                  onClick={() => next()}
                  aria-label="Next"
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/70 p-3 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition hover:scale-105"
                >
                  ›
                </button>
              </>
            )}

            <div
              className="relative flex h-[82vh] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(244,239,228,0.95))]"
              onDoubleClick={handleLightboxDoubleClick}
              onWheel={handleLightboxWheel}
              onMouseDown={handleLightboxMouseDown}
              onMouseMove={handleLightboxMouseMove}
              onMouseUp={handleLightboxMouseUp}
              onMouseLeave={handleLightboxMouseUp}
              onTouchStart={handleLightboxTouchStart}
              onTouchMove={handleLightboxTouchMove}
              onTouchEnd={handleLightboxTouchEnd}
            >
              <img
                src={images[selectedImage]}
                alt={`${product.title} enlarged view`}
                className="max-h-full w-auto object-contain"
                draggable={false}
                style={{
                  transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${lightboxScale})`,
                  transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                }}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm pointer-events-none">
                Use scroll to zoom
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductPoloDetail() {
  const { photoId } = useParams();
  const normalizedId = Number(photoId);
  const product = productVariants.find((item) => item.id === normalizedId);

  if (!product) {
    return <Navigate to="/products/polo" replace />;
  }

  const relatedProducts = productVariants.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <>
      <Seo
        title={`${product.title} | Technical Details & Quote`}
        description={`${product.subtitle} Explore the product details, customization options, and request a quote for this polo style.`}
        canonicalPath={`/products/polo/details/${product.id}`}
        keywords={`${product.title.toLowerCase()}, polo shirt manufacturing specifications, request quote polo garments`}
      />

      <section className="pt-21 pb-6 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> Polo
          </p>
        </div>
      </section>

      <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.08),rgba(255,255,255,0)_42%),#fcfaf6]">
        <div className="container-luxe">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,auto)_minmax(0,640px)] xl:items-center xl:gap-x-14 xl:justify-center">
            <div className="mx-auto w-full max-w-full self-start lg:mx-0 lg:justify-self-start xl:justify-self-center">
              <Gallery product={product} />
            </div>

            <div className="self-start xl:-ml-2">
              <div className="xl:sticky xl:top-20 self-start min-w-0">
                <div className="h-fit w-full self-start rounded-[1.7rem] border border-border/60 bg-card p-4 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.16)] sm:p-5 min-w-0 overflow-hidden">
                  

                  

                  <div className="mt-8 rounded-[1.75rem] border border-border/60 bg-muted/30 p-6 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.12)] min-w-0 overflow-hidden">
                    <p className="mb-4 text-base font-semibold uppercase tracking-[0.18em] text-gold">Product details</p>
                    <div className="space-y-4 min-w-0">
                      {sharedTechnicalHighlights.map((highlight: any) => (
                        <p key={highlight.title} className="m-0 text-left">
                          <span className="block text-[1.05rem] font-semibold text-foreground">{highlight.title}</span>
                          <span className="mt-1 block text-sm leading-6 text-gray-600 whitespace-normal wrap-break-word">{highlight.value}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-2.5 py-2 text-sm text-gray-700 shadow-[0_6px_18px_-12px_rgba(15,23,42,0.12)]">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                    5BROS Verified Manufacturing
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
                    <Link to="/contact" className="inline-flex h-13 min-w-55 items-center justify-center rounded-[0.95rem] bg-charcoal px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-charcoal/90 hover:shadow-[0_10px_24px_-12px_rgba(15,23,42,0.35)]">
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-background pt-8">
        <div className="container-luxe">
          <div className="rounded-[2.1rem] border border-border bg-card p-8 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm text-gold">Related products</p>
                <h2 className="mt-2 font-display text-3xl">Explore more polo options</h2>
              </div>
              <Link to="/products/polo" className="inline-flex items-center justify-center rounded-[0.95rem] bg-charcoal px-6 py-3 text-sm font-semibold text-white transition hover:bg-charcoal/90">
                View full collection
              </Link>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/products/polo/details/${item.id}`} className="group overflow-hidden rounded-4xl border border-border bg-background transition hover:-translate-y-1 hover:shadow-lg">
                  <img src={item.image} alt={item.title} className="h-64 w-full object-contain object-center p-4 transition duration-300" loading="lazy" />

                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
