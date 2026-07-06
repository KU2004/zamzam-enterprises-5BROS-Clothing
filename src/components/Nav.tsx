import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/certifications", label: "Certifications" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact Us" },
] as const;

const blackNavPaths = ["/about", "/products", "/infrastructure", "/contact"] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const isBlackPath = blackNavPaths.includes(path as typeof blackNavPaths[number]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const isOpaque = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isOpaque
          ? "bg-white/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-24 items-center justify-between">
        <Link to="/" className="flex items-center mr-8">
          <img src={logo} alt="5BROS Clothing logo" className="h-14 w-14 object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
          {links.map((l) => {
            const active = path === l.to;
            const linkTextClass = active
              ? "text-gold"
              : isBlackPath
              ? "text-black/85 hover:text-black"
              : isOpaque
              ? "text-muted-foreground hover:text-foreground"
              : "text-white/75 hover:text-white";

            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-[16px] tracking-[0.12em] transition-colors font-normal ${linkTextClass}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>


        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`lg:hidden p-2 transition ${isOpaque || isBlackPath ? "text-foreground" : "text-white"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-luxe flex flex-col py-6 gap-5" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-base tracking-[0.12em] text-foreground font-normal"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex w-fit items-center gap-2 border border-foreground px-5 py-2.5 text-[12px] tracking-[0.12em] font-normal"
            >
              Request quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
