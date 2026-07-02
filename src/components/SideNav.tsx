import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Home", id: "hero" },
  { label: "Brands", id: "brands" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Fabrics", id: "fabrics" },
  { label: "Process", id: "process" },
  { label: "Why Us", id: "whyus" },
  { label: "Clients", id: "clients" },
  { label: "Global", id: "global" },
  { label: "Contact", id: "cta" },
];

export function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener("toggle-sidenav", handleToggle);
    return () => window.removeEventListener("toggle-sidenav", handleToggle);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Side Navigation Panel */}
      <div
        className={`fixed right-0 top-0 h-screen w-64 bg-charcoal/95 backdrop-blur-sm text-charcoal-foreground z-50 transition-transform duration-500 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
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
            transform: translateX(20px);
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
