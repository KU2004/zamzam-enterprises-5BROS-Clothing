import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/917306333312",
    imageSrc: "https://cdn.simpleicons.org/whatsapp/ffffff",
    className:
      "bg-[linear-gradient(135deg,#25D366_0%,#128C7E_100%)] hover:shadow-[0_12px_28px_rgba(18,140,126,0.35)]",
    ariaLabel: "Open WhatsApp",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/YOUR_USERNAME",
    imageSrc: "https://cdn.simpleicons.org/instagram/ffffff",
    className:
      "bg-[linear-gradient(135deg,#f58529_0%,#dd2a7b_50%,#8134af_100%)] hover:shadow-[0_12px_28px_rgba(221,42,123,0.35)]",
    ariaLabel: "Open Instagram",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/YOUR_PAGE",
    imageSrc: "https://cdn.simpleicons.org/facebook/ffffff",
    className:
      "bg-[#1877F2] hover:shadow-[0_12px_28px_rgba(24,119,242,0.35)]",
    ariaLabel: "Open Facebook",
  },
] as const;

export function FloatingSocialButtons() {
  return (
    <>
      <style>{`
        @keyframes social-fade-in-right {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes social-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>

      <TooltipProvider delayDuration={180}>
        <div className="fixed bottom-4 right-4 z-[120] flex flex-col gap-3 sm:bottom-6 sm:right-6 sm:gap-3">
          {socialLinks.map((link, index) => {
            return (
              <Tooltip key={link.label}>
                <TooltipTrigger asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className={`group flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:h-14 sm:w-14 ${link.className}`}
                    style={{
                      animation: `social-fade-in-right 0.45s cubic-bezier(0.16, 1, 0.3, 1) both, social-float 3.2s ease-in-out ${index * 0.16}s infinite`,
                    }}
                  >
                    <img
                      src={link.imageSrc}
                      alt=""
                      aria-hidden="true"
                      className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="left" className="rounded-full border border-white/10 bg-slate-900/95 px-3 py-1.5 text-xs text-white shadow-lg">
                  {link.label}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </>
  );
}
