import { clientLogos } from "../lib/clientLogos";

export function MobileClientMarquee() {
  return (
    <div className="overflow-hidden">
      <div className="mobile-marquee-track flex w-max gap-3 sm:gap-4">
        {[...clientLogos, ...clientLogos].map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/80 p-2 shadow-sm backdrop-blur-sm sm:h-20 sm:w-28"
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
  );
}
