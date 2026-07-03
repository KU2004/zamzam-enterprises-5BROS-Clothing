import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import CONTACT from "../lib/contactInfo";
import IndiaFlag from "../assets/flags/in.svg";
import logo from "../assets/logo.png";

const socialLinks = [
  {
    href: "https://www.facebook.com/share/164PnQtF1D5/",
    label: "Facebook",
    iconSrc: "https://cdn.simpleicons.org/facebook/ffffff",
  },
  {
    href: "https://www.instagram.com/5bros_clothing?utm_source=qr&igsh=MXp6aDAzMGJ5a2pv",
    label: "Instagram",
    iconSrc: "https://cdn.simpleicons.org/instagram/ffffff",
  },
  {
    href: "https://youtube.com/@simnani-enterprises-5?si=CIRgJ2PtTdkty19t",
    label: "YouTube",
    iconSrc: "https://cdn.simpleicons.org/youtube/ffffff",
  },
  {
    href: "https://linkedin.com/company/YOUR_COMPANY",
    label: "LinkedIn",
    iconSrc: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/linkedin.svg",
  },
];

export function Footer() {
  return (
    <footer
      className="bg-charcoal text-charcoal-foreground"
      style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}
    >
      <div className="container-luxe py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <img src={logo} alt="5BROS logo" className="h-10 w-10 object-contain" />
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-display text-lg uppercase tracking-[0.25em] text-gold">
                Get in touch
              </h4>
              <address className="not-italic space-y-2 text-base leading-7 text-white/80">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 text-gold shrink-0" />
                  <span className="text-white/85 uppercase">{CONTACT.addressFull}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={16} className="mt-1 text-gold shrink-0" />
                  <span className="text-white/85">{CONTACT.email}</span>
                </div>
                {CONTACT.phones.map((phone) => (
                  <div key={phone} className="flex items-start gap-2">
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
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 p-5">
              <h4 className="font-display text-lg uppercase tracking-[0.25em] text-gold">
                Quick Links
              </h4>
              <ul className="space-y-2 text-lg leading-7 text-white/85">
                {[
                  ["/", "Home"],
                  ["/about", "About Us"],
                  ["/products", "Products"],
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

            <div className="space-y-4 p-5">
              <h4 className="font-display text-lg uppercase tracking-[0.25em] text-gold">
                Products
              </h4>
              <ul className="space-y-2 text-lg leading-7 text-white/85">
                {[
                  ["Round Neck", "Round Neck"],
                  ["Polo", "Polo"],
                  ["Uniforms", "Corporate Uniform"],
                  ["Hoodies", "Hoodies"],
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

            <div className="space-y-4 p-5 flex flex-col items-center justify-center text-center md:col-span-2">
              <h4 className="font-display text-lg uppercase tracking-[0.25em] text-gold">
                Follow Us
              </h4>
              <div className="mt-4 flex min-w-0 items-center justify-center gap-4 overflow-x-auto whitespace-nowrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white/90 transition hover:border-gold hover:text-gold focus-visible:ring-2 focus-visible:ring-gold/40"
                  >
                    <img
                      src={social.iconSrc}
                      alt=""
                      aria-hidden="true"
                      className={`h-6 w-6 object-contain${social.label === "LinkedIn" ? " invert" : ""}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/5/5">
        <div className="container-luxe py-4 flex flex-col gap-1 md:flex-row items-center justify-between text-xs leading-5 uppercase tracking-[0.2em] text-white/70">
          <span>© 2026 5BROS Clothing. All rights reserved.</span>
          <span>Crafted in India · Delivered worldwide</span>
        </div>
      </div>
    </footer>
  );
}
