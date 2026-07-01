import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import CONTACT from "../lib/contactInfo";
import IndiaFlag from "../assets/flags/in.svg";
import logo from "../assets/logo.png";

const socialLinks = [
  {
    href: "https://facebook.com/YOUR_PAGE",
    label: "Facebook",
    iconSrc: "https://cdn.simpleicons.org/facebook/ffffff",
  },
  {
    href: "https://instagram.com/YOUR_USERNAME",
    label: "Instagram",
    iconSrc: "https://cdn.simpleicons.org/instagram/ffffff",
  },
  {
    href: "https://wa.me/917306333312",
    label: "WhatsApp",
    iconSrc: "https://cdn.simpleicons.org/whatsapp/ffffff",
  },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground font-semibold">
      <div className="container-luxe py-20">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-6 p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                <img src={logo} alt="5BROS logo" className="h-14 w-14 object-contain" />
              </div>
            </div>
            <p className="text-base leading-8 text-white/80">
              Premium apparel manufacturing partner crafting custom garments,
              uniforms, and private label collections for brands worldwide.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-gold hover:text-gold focus-visible:ring-2 focus-visible:ring-gold/40"
                >
                  <img src={social.iconSrc} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6 p-7">
            <h4 className="font-display text-base uppercase tracking-[0.25em] text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3 text-base leading-8 text-white/85">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/products", "Products"],
                ["/infrastructure", "Infrastructure"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="inline-flex text-white/85 transition hover:text-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 p-7">
            <h4 className="font-display text-base uppercase tracking-[0.25em] text-gold">
              Products
            </h4>
            <ul className="space-y-3 text-base leading-8 text-white/85">
              {[
                ["Round Neck", "Round Neck"],
                ["Polo", "Polo"],
                ["Oversized", "Oversized"],
                ["Uniforms", "Corporate Uniform"],
                ["Hoodies", "Hoodies"],
                ["Sportswear", "Sportswear"],
              ].map(([label, category]) => (
                <li key={label}>
                  <Link
                    to={`/products?cat=${encodeURIComponent(category)}`}
                    className="inline-flex text-white/85 transition hover:text-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 p-7">
            <h4 className="font-display text-base uppercase tracking-[0.25em] text-gold">
              Get in touch
            </h4>
            <address className="not-italic space-y-4 text-base leading-8 text-white/80">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-gold shrink-0" />
                <span className="text-white/85">{CONTACT.addressFull}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-gold shrink-0" />
                <span className="text-white/85">{CONTACT.email}</span>
              </div>
              {CONTACT.phones.map((phone) => (
                <div key={phone} className="flex items-start gap-3">
                  <Phone size={16} className="mt-1 text-gold shrink-0" />
                  <span className="text-white/85 flex items-center gap-2">
                    <img
                      src={IndiaFlag}
                      alt="India flag"
                      className="h-4 w-4 rounded-sm object-cover"
                    />
                    {phone}
                  </span>
                </div>
              ))}
            </address>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-sm uppercase tracking-[0.2em] text-charcoal transition hover:bg-gold/90"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/5/5">
        <div className="container-luxe py-6 flex flex-col gap-2 md:flex-row items-center justify-between text-sm leading-6 uppercase tracking-[0.2em] text-white/70">
          <span>© 2026 5BROS Clothing. All rights reserved.</span>
          <span>Crafted in India · Delivered worldwide</span>
        </div>
      </div>
    </footer>
  );
}
