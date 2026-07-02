import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { clientLogos } from "../lib/clientLogos";

export function DesktopClientMarquee() {
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
      const pixelsToMove = (delta / 16) * 0.75;

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
    <div className="overflow-hidden" onClick={handleClick}>
      <div
        ref={trackRef}
        className="marquee-track flex gap-20 whitespace-nowrap will-change-transform"
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
        {[...clientLogos, ...clientLogos].map((c, i) => {
          const isFeatureLogo = c.name === "GS CALTEX" || c.name === "PROJECT FLOORS";

          return (
            <div
              key={`${c.name}-${i}`}
              className={`flex shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 ${
                isFeatureLogo ? "h-44 w-84 min-w-84" : "h-40 w-[18rem] min-w-[18rem]"
              }`}
            >
              <img
                src={c.logo}
                alt={c.name}
                className={`h-full w-auto object-contain opacity-80 transition-opacity hover:opacity-100 ${
                  isFeatureLogo ? "max-h-[92%]" : ""
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
