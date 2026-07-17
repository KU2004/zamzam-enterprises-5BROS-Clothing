import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Seo } from "../components/Seo";

import roundneck1bg from "../assets/roundneck1-bg.png";
import roundneck1p2 from "../assets/roundneck1p2.png";
import roundneck2bg from "../assets/roundneck2-bg.png";
import roundneck2p2 from "../assets/roundneck2p2.png";
import roundneck3bg from "../assets/roundneck3-bg.png";
import roundneck3p2 from "../assets/roundneck3p2.png";
import roundneck4bg from "../assets/roundneck4-bg.png";
import roundneck4p2 from "../assets/roundneck4p2.png";
import roundneck5 from "../assets/roundneck5.jpeg";
import roundneck5p2 from "../assets/roundneck5p2.png";
import roundneck6 from "../assets/roundneck6.jpeg";
import roundneck6p2 from "../assets/roundneck6p2.png";
import roundneck7 from "../assets/roundneck7.jpeg";
import roundneck7p2 from "../assets/roundneck7p2.png";
import roundneck8 from "../assets/roundneck8.jpeg";
import roundneck8p2 from "../assets/roundneck8p2.png";

const productVariants = [
  {
    id: 1,
    title: "Classic Round Neck Tee",
    subtitle: "Premium round neck essentials perfect for retail and casual wear collections.",
    image: roundneck1bg,
    imageP2: roundneck1p2,
    technicalHighlights: [
      { title: "Fabric options", value: "100% cotton and cotton-poly blends" },
      { title: "Fit range", value: "Classic, slim, and relaxed profiles" },
      { title: "Customization", value: "Screen print, embroidery, custom labels, and patches" },
      { title: "MOQ", value: "Flexible production runs for retail collections" },
    ],
    benefits: [
      "Ideal for retail stores and fashion brands",
      "Premium quality construction and comfort",
      "Brand-ready finishing for merchandise programs",
      "Fast sampling and flexible production support",
    ],
    detailCards: [
      { title: "Premium construction", body: "Quality round neck construction with reinforced stitching designed for professional retail presentation." },
      { title: "Color and branding", body: "Choose from extensive color palette and add your logo with screen print, embroidery, or custom finishing." },
      { title: "Production flexibility", body: "We support low-volume testing as well as larger retail orders without compromising quality." },
    ],
  },
  {
    id: 2,
    title: "Modern Slim Fit Tee",
    subtitle: "Contemporary slim silhouette suited for fashion-forward collections and retail brands.",
    image: roundneck2bg,
    imageP2: roundneck2p2,
    bgImage: roundneck2bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Premium cotton and high-quality blends" },
      { title: "Fit range", value: "Slim and tailored profiles" },
      { title: "Customization", value: "Monogram detailing, graphic print, and custom tags" },
      { title: "MOQ", value: "Flexible sampling and scalable production" },
    ],
    benefits: [
      "Perfect for contemporary fashion collections",
      "Clean contemporary lines and refined presentation",
      "Great for premium retail and boutique brands",
      "Reliable repeat orders with consistent finishing",
    ],
    detailCards: [
      { title: "Contemporary fit", body: "Modern slim construction with quality finishing for fashion-forward brand positioning." },
      { title: "Branding details", body: "Add custom logos, graphic placement, or premium embroidery for elevated branding." },
      { title: "Delivery support", body: "We coordinate sampling, bulk production, and export-ready packaging for your collections." },
    ],
  },
  {
    id: 3,
    title: "Performance Round Neck",
    subtitle: "Technical round neck with breathability for activewear and lifestyle collections.",
    image: roundneck3bg,
    imageP2: roundneck3p2,
    bgImage: roundneck3bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Performance blends with moisture-wicking properties" },
      { title: "Fit range", value: "Comfort-focused athletic and casual profiles" },
      { title: "Customization", value: "Heat transfer, screen print, and woven labels" },
      { title: "MOQ", value: "Flexible runs for lifestyle and promotional collections" },
    ],
    benefits: [
      "Comfortable for active lifestyle wear",
      "Maintains finish during repeated use",
      "Ideal for sports brands and wellness programs",
      "Supports bulk supply with reliable lead times",
    ],
    detailCards: [
      { title: "Technical performance", body: "Performance fabrics designed for comfort and breathability with classic round neck styling." },
      { title: "Lifestyle appeal", body: "Available in trending colors for lifestyle and wellness brand collections." },
      { title: "Scalable production", body: "Suitable for both pilot programs and larger seasonal collection orders." },
    ],
  },
  {
    id: 4,
    title: "Premium Luxury Tee",
    subtitle: "Ultra-premium round neck for luxury and high-end fashion collections.",
    image: roundneck4bg,
    imageP2: roundneck4p2,
    bgImage: roundneck4bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Premium cotton and luxury fiber blends" },
      { title: "Fit range", value: "Refined and tailored luxury profiles" },
      { title: "Customization", value: "Embroidery, jacquard details, and luxury labels" },
      { title: "MOQ", value: "Flexible production for luxury programs" },
    ],
    benefits: [
      "Premium positioning for luxury brands",
      "Exceptional quality and softness",
      "Supports luxury brand identity and image",
      "Consistent premium quality for repeat orders",
    ],
    detailCards: [
      { title: "Luxury quality", body: "Premium fiber selection with meticulous construction for ultra-luxury brand positioning." },
      { title: "Brand alignment", body: "Available in custom colors and luxury branding treatments for brand consistency." },
      { title: "Quality assurance", body: "Our team reviews each production milestone for superior luxury finishing." },
    ],
  },
  {
    id: 5,
    title: "Everyday Comfort Tee",
    subtitle: "Versatile casual round neck perfect for everyday wear and mass-market retail.",
    image: roundneck5,
    imageP2: roundneck5p2,
    bgImage: roundneck5,
    technicalHighlights: [
      { title: "Fabric options", value: "Soft cotton and comfortable blends" },
      { title: "Fit range", value: "Classic and relaxed everyday profiles" },
      { title: "Customization", value: "Screen print, embroidery, and label options" },
      { title: "MOQ", value: "Ideal for volume retail orders" },
    ],
    benefits: [
      "Perfect for casual retail and distribution",
      "Comfortable everyday wear quality",
      "Excellent for promotional merchandise",
      "Fast production with cost-effective pricing",
    ],
    detailCards: [
      { title: "Comfort engineered", body: "Designed for everyday comfort and durability with reliable quality across production runs." },
      { title: "Retail ready", body: "Optimized for retail sales with strong appeal to value-conscious consumers." },
      { title: "Volume capable", body: "Structured for efficient large-scale production and distribution." },
    ],
  },
  {
    id: 6,
    title: "Sustainable Cotton Tee",
    subtitle: "Eco-conscious round neck for brands focused on sustainable fashion and organic materials.",
    image: roundneck6,
    imageP2: roundneck6p2,
    bgImage: roundneck6,
    technicalHighlights: [
      { title: "Fabric options", value: "Organic and sustainable cotton blends" },
      { title: "Fit range", value: "Classic and contemporary profiles" },
      { title: "Customization", value: "Eco-friendly labels and sustainable packaging" },
      { title: "MOQ", value: "Flexible for sustainable brand launches" },
    ],
    benefits: [
      "Perfect for eco-conscious brands",
      "Supports sustainability messaging",
      "Appeals to environmentally aware consumers",
      "Aligns with modern brand values",
    ],
    detailCards: [
      { title: "Sustainable materials", body: "Organic and sustainable cotton options that support your brand's environmental commitments." },
      { title: "Eco-branding", body: "Support for sustainable labeling and eco-friendly packaging aligned with brand values." },
      { title: "Certified production", body: "Coordination with certification bodies for organic and sustainable labeling." },
    ],
  },
  {
    id: 7,
    title: "Bold Statement Tee",
    subtitle: "Fashion-forward round neck designed for graphic-heavy collections and creative campaigns.",
    image: roundneck7,
    imageP2: roundneck7p2,
    bgImage: roundneck7,
    technicalHighlights: [
      { title: "Fabric options", value: "Premium cotton optimized for bold graphics" },
      { title: "Fit range", value: "Contemporary and relaxed profiles" },
      { title: "Customization", value: "Large-scale graphics, sublimation, and bold prints" },
      { title: "MOQ", value: "Flexible for campaign and limited edition launches" },
    ],
    benefits: [
      "Ideal for graphic-driven fashion brands",
      "Premium base for bold visual impact",
      "Perfect for limited edition collections",
      "Fast turnaround for creative campaigns",
    ],
    detailCards: [
      { title: "Graphic optimized", body: "Premium fabric and construction designed to showcase bold graphics and creative designs." },
      { title: "Visual impact", body: "High-quality blank that allows your graphics and messaging to stand out." },
      { title: "Campaign ready", body: "Fast production and flexible runs for limited edition and campaign releases." },
    ],
  },
  {
    id: 8,
    title: "Vintage Inspired Tee",
    subtitle: "Retro-styled round neck with quality construction for vintage and heritage collections.",
    image: roundneck8,
    imageP2: roundneck8p2,
    bgImage: roundneck8,
    technicalHighlights: [
      { title: "Fabric options", value: "Quality cotton with vintage-inspired finishes" },
      { title: "Fit range", value: "Relaxed and vintage-correct profiles" },
      { title: "Customization", value: "Distressing, vintage prints, and heritage labeling" },
      { title: "MOQ", value: "Flexible for heritage and vintage brand programs" },
    ],
    benefits: [
      "Perfect for vintage and heritage brands",
      "Quality construction with retro aesthetics",
      "Supports vintage branding and messaging",
      "Reliable quality for specialty collections",
    ],
    detailCards: [
      { title: "Vintage craftsmanship", body: "Quality construction with vintage-inspired finishes for authentic heritage presentation." },
      { title: "Heritage branding", body: "Support for vintage graphics, distressing, and heritage labeling." },
      { title: "Specialty production", body: "Expert coordination of specialty finishes and vintage-correct production techniques." },
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
  const images = useMemo(() => [product.image, product.imageP2].filter(Boolean) as string[], [product.image, product.imageP2]);

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
        className={`group relative mx-auto w-full max-w-[400px] self-start overflow-hidden rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,#FFFFFF,#FCFBF8)] shadow-[0_24px_60px_-34px_rgba(15,23,42,0.22)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isPageReady ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={galleryStageRef}
          className="relative mx-auto flex min-h-[400px] items-center justify-center overflow-hidden rounded-[28px] bg-[#A9A9A9] px-[20px] py-[24px] sm:min-h-[400px] sm:px-[20px] sm:py-[24px] lg:min-h-[460px] lg:px-[20px] lg:py-[24px]"
        >
          {isImageLoading && (
            <div className="absolute inset-0 z-10 rounded-[28px] bg-black/[0.03]" />
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

          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/[0.02] via-transparent to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal shadow-[0_8px_24px_rgba(0,0,0,0.10)] backdrop-blur">
            {selectedImage + 1} / {images.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-black/5 bg-white/90 p-3 text-charcoal shadow-[0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 sm:opacity-0 sm:group-hover:opacity-100"
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
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-black/5 bg-white/90 p-3 text-charcoal shadow-[0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 sm:opacity-0 sm:group-hover:opacity-100"
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

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {images.map((img: string, index: number) => (
          <button
            key={`${img}-${index}`}
            onClick={() => changeImage(index)}
            className={`group shrink-0 rounded-[0.95rem] border p-1 shadow-sm transition-all duration-200 ${selectedImage === index ? "border-gold/90 shadow-[0_12px_28px_-16px_rgba(255,215,0,0.28)]" : "border-border/60 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"}`}
            style={{ minWidth: 84, width: 84, height: 84 }}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={img}
              alt={`thumb-${index}`}
              className="h-full w-full rounded-[0.75rem] bg-background object-contain transition-transform duration-200"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-xl" onClick={closeLightbox}>
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

            <div
              className="relative flex h-[82vh] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(244,239,228,0.95))]"
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

export default function ProductRoundNeckDetail() {
  const { photoId } = useParams();
  const normalizedId = Number(photoId);
  const product = productVariants.find((item) => item.id === normalizedId);

  if (!product) {
    return <Navigate to="/products/round-neck" replace />;
  }

  const relatedProducts = productVariants.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <>
      <Seo
        title={`${product.title} | Technical Details & Quote`}
        description={`${product.subtitle} Explore the product details, customization options, and request a quote for this round neck style.`}
        canonicalPath={`/products/round-neck/details/${product.id}`}
        keywords={`${product.title.toLowerCase()}, round neck t-shirt manufacturing, custom tee manufacturing, request quote round neck`}
      />

      <section className="mt-10 pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.08),_rgba(255,255,255,0)_42%),#fcfaf6]">
        <div className="container-luxe">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,auto)_minmax(0,420px)] xl:items-center xl:gap-x-14 xl:justify-center">
            <div className="mx-auto w-full max-w-[560px] self-start lg:mx-0 lg:justify-self-start xl:justify-self-center">
              <Gallery product={product} />
            </div>

            <div className="self-start xl:-ml-2">
              <div className="sticky top-20 self-start">
                <div className="h-fit self-start rounded-[1.7rem] border border-border/60 bg-card p-4 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.16)] sm:p-5">
                  <p className="mb-4 text-sm text-gold">Round neck manufacturing</p>
                  <h1 className="mt-0 font-display text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">{product.title}</h1>
                  <p className="mt-7 max-w-[520px] text-lg leading-[1.7] text-gray-600">{product.subtitle}</p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-2.5 py-2 text-sm text-gray-700 shadow-[0_6px_18px_-12px_rgba(15,23,42,0.12)]">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                    5BROS Verified Manufacturing
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
                    <Link to="/contact" className="inline-flex h-[52px] min-w-[220px] items-center justify-center rounded-[0.95rem] bg-charcoal px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-charcoal/90 hover:shadow-[0_10px_24px_-12px_rgba(15,23,42,0.35)]">
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
                <h2 className="mt-2 font-display text-3xl">Explore more round neck options</h2>
              </div>
              <Link to="/products/round-neck" className="inline-flex items-center justify-center rounded-[0.95rem] bg-charcoal px-6 py-3 text-sm font-semibold text-white transition hover:bg-charcoal/90">
                View full collection
              </Link>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/products/round-neck/details/${item.id}`} className="group overflow-hidden rounded-[1.25rem] border border-border bg-background transition hover:-translate-y-1 hover:shadow-lg">
                  <img src={item.image} alt={item.title} className="h-64 w-full object-contain object-center p-4 transition duration-300" loading="lazy" />
                  <div className="border-t border-border p-4">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <Link to="/contact" className="flex-1 rounded-full bg-charcoal px-4 py-3 text-center text-sm font-semibold text-white">
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
