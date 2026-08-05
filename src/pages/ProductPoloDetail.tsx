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
  { title: "MOQ", value: "1000 pieces each colour" },
  { title: "", value: "We offer complete flexibility for your brand. This product can be customized in terms of color, fabric, and specific sizing. Please mention your requirements in the contact us for custom bulk patterns." },
];


const activeProductIds = [1, 2, 3, 4, 8];

const productVariants = [
  {
    id: 1,
    title: "Classic Piqué Polo",
    subtitle: "Structured collar and premium finish for smart-casual and corporate wear.",
    image: polo7p3,
    technicalHighlights: sharedTechnicalHighlights,
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
      { title: "Fabric", value: "Double Cloth Jacq" },
      { title: "GSM", value: "280" },
      { title: "MOQ", value: "500 pieces each colour" },
      { title: "", value: "We offer complete flexibility for your brand. This product can be customized in terms of color, fabric, and specific sizing. Please mention your requirements in the contact us for custom bulk patterns." },
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
      { title: "Fabric", value: "Spun Polyester (Waffle)" },
      { title: "GSM", value: "210-220" },
      { title: "MOQ", value: "1000 pieces each colour" },
      { title: "", value: "We offer complete flexibility for your brand. This product can be customized in terms of color, fabric, and specific sizing. Please mention your requirements in the contact us for custom bulk patterns." },
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
      { title: "Fabric", value: "Knitted Cotton 100%" },
      { title: "GSM", value: "210-220" },
      { title: "MOQ", value: "300 pieces each colour" },
      { title: "", value: "We offer complete flexibility for your brand. This product can be customized in terms of color, fabric, and specific sizing. Please mention your requirements in the contact us for custom bulk patterns." },
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
      { title: "MOQ", value: "Flexible for retail pilots and seasonal stock" },
      { title: "", value: "We offer complete flexibility for your brand. This product can be customized in terms of color, fabric, and specific sizing. Please mention your requirements in the contact us for custom bulk patterns." },
    ],
  },
  {
    id: 6,
    title: "Custom Event Polo",
    subtitle: "A versatile option for events, giveaways, and brand activations.",
    image: polo3,
    technicalHighlights: [
      { title: "Fabric", value: "Soft, printable fabrics and cotton blends" },
      { title: "Fit range", value: "Classic and semi-relaxed profiles" },
      { title: "MOQ", value: "Perfect for event kits and short-run campaigns" },
      { title: "", value: "We offer complete flexibility for your brand. This product can be customized in terms of color, fabric, and specific sizing. Please mention your requirements in the contact us for custom bulk patterns." },
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
      { title: "MOQ", value: "Flexible runs for launch and replenishment orders" },
      { title: "", value: "We offer complete flexibility for your brand. This product can be customized in terms of color, fabric, and specific sizing. Please mention your requirements in the contact us for custom bulk patterns." },
    ],
  },
  {
    id: 8,
    title: "Contemporary Polo",
    subtitle: "Modern styling with clean lines for fashion-led and promotional programs.",
    image: polo5,
    technicalHighlights: [
      { title: "Fabric", value: "Polyester Loopknit" },
      { title: "GSM", value: "210-220" },
      { title: "MOQ", value: "1000 pieces each colour" },
      { title: "", value: "We offer complete flexibility for your brand. This product can be customized in terms of color, fabric, and specific sizing. Please mention your requirements in the contact us for custom bulk patterns." },
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
      { title: "Fabric", value: "Textured knits and versatile blended fabrics" },
      { title: "Fit range", value: "Structured and relaxed options" },
      { title: "MOQ", value: "Flexible for both prototyping and full runs" },
      { title: "", value: "We offer complete flexibility for your brand. This product can be customized in terms of color, fabric, and specific sizing. Please mention your requirements in the contact us for custom bulk patterns." },
    ],
  },
];

function Gallery({ product }: { product: any }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<"left" | "right" | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouseStartX, setMouseStartX] = useState<number | null>(null);
  const mouseDraggedRef = useRef(false);
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
      return [polo11, polo11p4, polo11p5];

    case 4:
      return [polo1, polo2, polo3, polo4];

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

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setMouseStartX(e.clientX);
    mouseDraggedRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || mouseStartX === null) return;
    const delta = e.clientX - mouseStartX;
    if (Math.abs(delta) > 10) {
      mouseDraggedRef.current = true;
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || mouseStartX === null) {
      setIsMouseDown(false);
      setMouseStartX(null);
      return;
    }

    const endX = e.clientX;
    const delta = endX - mouseStartX;

    if (delta > 50) prev();
    if (delta < -50) next();

    setIsMouseDown(false);
    setMouseStartX(null);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    handleMouseUp(e);
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
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
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
              className="max-h-[88vh] w-full max-w-full object-contain transition-transform duration-300 transform-gpu backface-hidden"
              onClick={() => {
                if (!mouseDraggedRef.current) {
                  setIsLightboxOpen(true);
                }
              }}
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

            {images.length > 1 && (
              <>
            
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
                className="max-h-full w-full max-w-full object-contain"
                draggable={false}
                style={{
                  transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${lightboxScale})`,
                  transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                }}
              />

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

  const relatedProducts = productVariants
    .filter((item) => activeProductIds.includes(item.id) && item.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Seo
        title={`${product.title} | Technical Details & Quote`}
        description={`${product.subtitle} Explore the product details, customization options, and request a quote for this polo style.`}
        canonicalPath={`/products/polo/details/${product.id}`}
        keywords={`${product.title.toLowerCase()}, polo shirt manufacturing specifications, request quote polo garments`}
      />



      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.08),rgba(255,255,255,0)_42%),#fcfaf6]">
        <div className="container-luxe">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,auto)_minmax(0,760px)] xl:items-center xl:gap-x-14 xl:justify-center">
            <div className="mx-auto w-full max-w-full self-start lg:mx-0 lg:justify-self-start xl:justify-self-center">
              <Gallery product={product} />
            </div>

            <div className="self-start xl:-ml-2">
              <div className="xl:sticky xl:top-20 self-start min-w-0">
                <div className="h-fit w-full self-start rounded-[1.7rem] border border-border/60 bg-card p-4 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.16)] sm:p-5 min-w-0 overflow-hidden">
                  

                  

                  <div className="mt-1 rounded-[1.75rem] border border-border/60 bg-muted/30 p-6 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.12)] min-w-0 overflow-hidden">
                    <p className="mb-4 text-base font-semibold uppercase tracking-[0.18em] text-gold">Product details</p>
                    <div className="space-y-4 min-w-0">
                      {product.technicalHighlights.map((highlight: any) => (
                        <p key={highlight.title} className="m-0 text-left">
                          <span className="block text-[1.05rem] font-semibold text-foreground">{highlight.title}</span>
                          <span className="mt-1 block text-sm leading-6 text-black whitespace-normal wrap-break-word">{highlight.value}</span>
                        </p>
                      ))}
                    </div>
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
