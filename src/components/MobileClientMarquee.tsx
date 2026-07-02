import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { clientLogos } from "../lib/clientLogos";

export function MobileClientMarquee() {
  const [offset, setOffset] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const resumeTimeoutRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateWidth = () => {
      setContentWidth(track.scrollWidth / 2);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || isDragging || contentWidth <= 0) return;

    let animationFrame = 0;
    let lastTimestamp = 0;

    const tick = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      const pixelsToMove = (delta / 16) * 0.95;

      setOffset((currentOffset) => {
        const nextOffset = currentOffset - pixelsToMove;
        return nextOffset <= -contentWidth ? 0 : nextOffset;
      });

      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [contentWidth, isDragging, isPaused]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const scheduleResume = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 1400);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    startXRef.current = event.clientX;
    startOffsetRef.current = offset;
    setIsDragging(true);
    setIsPaused(true);
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const delta = event.clientX - startXRef.current;
    const nextOffset = Math.max(-contentWidth, Math.min(0, startOffsetRef.current + delta));
    setOffset(nextOffset);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    scheduleResume();
  };

  const handleClick = () => {
    setIsPaused(true);
    scheduleResume();
  };

  return (
    <div className="mobile-client-marquee">
      <div className="relative overflow-hidden" onClick={handleClick}>
        <div
          ref={trackRef}
          className="mobile-marquee-track flex w-max gap-3 sm:gap-4 will-change-transform"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            transform: `translateX(${offset}px)`,
            touchAction: "none",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {[...clientLogos, ...clientLogos].map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="client-logo-card flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/80 p-2 shadow-sm shadow-slate-950/10 backdrop-blur-sm transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(255,255,255,0.8)] sm:h-20 sm:w-28"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="h-full w-full object-contain opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
