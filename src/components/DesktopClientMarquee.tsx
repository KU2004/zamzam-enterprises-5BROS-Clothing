import { clientLogos } from "../lib/clientLogos";

export function DesktopClientMarquee() {
  return (
    <div className="flex marquee-track gap-20 whitespace-nowrap">
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
  );
}
