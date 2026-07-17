import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logowhite.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/products", label: "Products" },
  { to: "/infrastructure", label: "Manufacturing" },
  { to: "/contact", label: "Contact Us" },
] as const;

const productSubLinks = [
  { to: "/products/round-neck", label: "Round Neck" },
  { to: "/products/polo", label: "Polo" },
  { to: "/products/oversized", label: "Oversized" },
  { to: "/products/hoodies", label: "Hoodies" },
  { to: "/products/activewear", label: "Activewear" },
  { to: "/products/custom-label", label: "Custom Label" },
] as const;

const blackNavPaths = [
  "/about",
  "/products",
  "/infrastructure",
  "/contact",
  "/faqs",
  "/terms",
  "/shipping",
  "/privacy",
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileProductsTapped, setMobileProductsTapped] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const isWhyChoosePath = path === "/why-choose-us";
  const isBlackPath =
    blackNavPaths.includes(path as typeof blackNavPaths[number]) ||
    path.startsWith("/products");
  const isOpaque = scrolled || open;
  const showWhiteNav = isWhyChoosePath && !isOpaque;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

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
            <img
              src={showWhiteNav ? logoWhite : isOpaque || isBlackPath ? logo : logoWhite}
              alt="5BROS Clothing logo"
              className="h-14 w-14 object-contain"
            />
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
              : showWhiteNav
              ? "text-white/75 hover:text-white"
              : "text-white/75 hover:text-white";

            if (l.to === "/products") {
              return (
                <div key={l.to} className="relative group">
                  <Link
                    to={l.to}
                    className={`relative inline-flex items-center text-[16px] tracking-[0.12em] transition-colors font-normal ${linkTextClass}`}
                  >
                    {l.label}
                    <span className="ml-2 text-xs">▾</span>
                  </Link>

                  <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 transition-opacity pointer-events-auto absolute top-full left-0 mt-1 w-44 z-50 ${isBlackPath || isOpaque ? 'bg-white border border-border text-foreground' : 'bg-black text-white/90'}`}>
                    <div className="flex flex-col py-2">
                      {productSubLinks.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="px-4 py-2 text-sm hover:bg-muted/50"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

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
            {links.map((l) => {
              if (l.to === "/products") {
                return (
                  <div key={l.to}>
                    <button
                      onClick={() => {
                        // First tap: open submenu. Second tap within timeout: navigate to /products
                        if (mobileProductsTapped) {
                          window.location.assign('/products');
                          return;
                        }

                        setMobileProductsOpen((v) => !v);
                        setMobileProductsTapped(true);
                        window.setTimeout(() => setMobileProductsTapped(false), 800);
                      }}
                      className="w-full flex items-center justify-between text-base tracking-[0.12em] text-foreground font-normal"
                    >
                      <span>{l.label}</span>
                      <span className="ml-2">{mobileProductsOpen ? '▴' : '▾'}</span>
                    </button>

                    {mobileProductsOpen && (
                      <div className="flex flex-col pl-4 mt-2">
                        {productSubLinks.map((s) => (
                          <Link key={s.to} to={s.to} className="py-2 text-foreground text-sm">
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={l.to} to={l.to} className="text-base tracking-[0.12em] text-foreground font-normal">
                  {l.label}
                </Link>
              );
            })}

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
