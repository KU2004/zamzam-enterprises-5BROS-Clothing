import { clientLogos } from "../lib/clientLogos";

export function MobileClientMarquee() {
  return (
    <div className="mobile-client-marquee">
      <div className="relative overflow-hidden">
        <div className="mobile-marquee-track flex w-max gap-3 sm:gap-4">
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
