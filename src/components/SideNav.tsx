import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Fabrics", id: "fabrics" },
  { label: "Process", id: "process" },
  { label: "Why Us", id: "whyus" },
  { label: "Visual Excellence", id: "visual-excellence" },
  { label: "Brands", id: "brands" },
  { label: "Clients", id: "clients" },
  { label: "Factory Tour", id: "factory-tour" },
  { label: "Contact", id: "footer" },
];

export function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("toggle-sidenav", handleToggle as EventListener);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("toggle-sidenav", handleToggle as EventListener);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("sidenav-state-changed", { detail: { isOpen } })
    );

    document.body.style.overflow = isOpen ? "hidden" : "";
    document.body.style.touchAction = isOpen ? "none" : "";

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const isElementHidden = (element: HTMLElement | null) => {
    return !element || element.offsetParent === null;
  };

  const scrollToSection = (id: string) => {
    let element = document.getElementById(id);

    if (id === "brands" && isElementHidden(element)) {
      element = document.getElementById(`${id}-mobile`);
    }

    if (!element) {
      element = document.getElementById(`${id}-mobile`);
    }

    if (element) {
      const header = document.querySelector("header");
      const headerHeight = header?.getBoundingClientRect().height ?? 96;
      const targetY = window.scrollY + element.getBoundingClientRect().top - headerHeight - 12;

      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Side Navigation Panel */}
      <div
        className={`fixed left-0 top-0 h-dvh w-[85vw] max-w-[18rem] bg-charcoal/95 backdrop-blur-sm text-charcoal-foreground z-50 transition-transform duration-500 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pt-24 px-6 pb-6">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-sm uppercase tracking-[0.15em] text-white/80 hover:text-gold hover:bg-white/10 rounded transition-all duration-300"
                style={{
                  animation: isOpen
                    ? `slideIn 0.3s ease-out ${index * 0.05}s forwards`
                    : "none",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
