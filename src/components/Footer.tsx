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
    href: "https://linkedin.com/company/5bros-clothing",
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
      <div className="container-luxe py-12 md:py-16">
        <div className="grid gap-8 md:gap-12 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
          {/* Logo */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 flex items-start justify-center md:justify-start">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex h-28 w-28 md:h-32 md:w-32 items-center justify-center rounded-full bg-white shrink-0">
                <img src={logo} alt="5BROS logo" className="h-16 md:h-20 w-16 md:w-20 object-contain" />
              </div>
              <div className="mt-4 text-center md:text-left space-y-2">
                <p className="text-xs md:text-sm font-semibold text-white/90">
                  <strong>5BROS</strong> - Youth Culture
                </p>
                <p className="text-xs md:text-xs leading-5 text-white/75">
                  Quality apparel manufacturing and wholesale. Trendy designs and reliable supply for retailers globally.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-center md:justify-start gap-2 md:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/90 transition-all duration-200 hover:border-gold hover:text-gold hover:scale-110 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:outline-none"
                  >
                    <img
                      src={social.iconSrc}
                      alt=""
                      aria-hidden="true"
                      className={`h-5 w-5 md:h-5.5 md:w-5.5 object-contain${social.label === "LinkedIn" ? " invert" : ""}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:col-span-1">
            <h4 className="font-display text-xs md:text-base uppercase tracking-[0.25em] text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base leading-6 md:leading-7 text-white/85">
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/products", "Products"],
                ["/contact", "Contact Us"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="inline-flex text-white/85 transition-colors duration-200 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded px-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4 sm:col-span-1">
            <h4 className="font-display text-xs md:text-base uppercase tracking-[0.25em] text-gold">
              Products
            </h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base leading-6 md:leading-7 text-white/85">
              {[
                ["/products/round-neck", "Round Neck"],
                ["/products/polo", "Polo"],
                ["/products/oversized", "Oversized"],
                ["/products/hoodies", "Hoodies"],
                ["/products/custom-label", "Custom Label"],
                ["/products/activewear", "Activewear"],
              ].map(([to, label]) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="inline-flex text-white/85 transition-colors duration-200 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded px-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4 sm:col-span-1">
            <h4 className="font-display text-xs md:text-base uppercase tracking-[0.25em] text-gold">
              Company
            </h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base leading-6 md:leading-7 text-white/85">
              {[
                ["/why-choose-us", "Why Choose Us"],
                ["/faqs", "FAQs"],
                ["/terms", "Terms & Conditions"],
                ["/shipping", "Shipping Policy"],
                ["/privacy", "Privacy Policy"],
              ].map(([to, label]) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="inline-flex text-white/85 transition-colors duration-200 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded px-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h4 className="font-display text-xs md:text-base uppercase tracking-[0.25em] text-gold">
              Get in Touch
            </h4>
            <address className="not-italic space-y-3 md:space-y-4 text-xs md:text-sm leading-6 md:leading-7 text-white/85">
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin size={16} className="md:size-[18px] mt-1 text-gold shrink-0 flex-shrink-0" />
                <span className="text-white/85 flex-1">{CONTACT.addressFull}</span>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <Mail size={16} className="md:size-[18px] mt-1 text-gold shrink-0 flex-shrink-0" />
                <span className="text-white/85 flex-1">{CONTACT.email}</span>
              </div>
              {CONTACT.phones.map((phone) => (
                <div key={phone} className="flex items-center gap-2 md:gap-3">
                  <Phone size={16} className="md:size-[18px] text-gold shrink-0 flex-shrink-0" />
                  <span className="text-white/85 flex items-center gap-1.5">
                    <img
                      src={IndiaFlag}
                      alt="India flag"
                      className="h-3 w-3 rounded-sm object-cover"
                    />
                    {phone}
                  </span>
                </div>
              ))}
            </address>
          </div>


          {/* Copyright */}
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/5">
        <div className="container-luxe py-6 flex flex-col gap-2 md:gap-0 items-center justify-center md:flex-row md:justify-between text-[0.7rem] md:text-[0.75rem] leading-5 md:leading-6 uppercase tracking-[0.15em] text-white/70">
          <span>© 2026 5BROS Clothing. All rights reserved.</span>
          <span className="hidden md:inline">·</span>
          <span>Crafted in India · Delivered worldwide</span>
        </div>
      </div>
    </footer>
  );
}
