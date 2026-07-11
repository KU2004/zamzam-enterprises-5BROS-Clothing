import { Seo } from "../components/Seo";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Terms() {
  const termsRef = useRef<HTMLDivElement | null>(null);

  const clauses = [
    'These Terms & Conditions apply to all orders placed with our company for all brands anywhere in India and outside India.',
    'All orders are subject to acceptance and product availability.',
    'Prices are subject to change without prior notice. The price applicable on the date of invoice shall be considered final.',
    'GST and other applicable government taxes will be charged as per prevailing laws.',
    'Goods once sold will not be taken back or exchanged unless the product has a verified manufacturing defect.',
    'Any shortage, damage, or manufacturing defect must be reported within 48 hours of receiving the goods, along with photographs and proof of delivery.',
    'Company shall not be responsible for damages caused due to improper handling, washing, storage, alteration, or misuse of the products.',
    'Delivery timelines are approximate and may vary due to production schedules, transportation delays, natural calamities, strikes, or other circumstances beyond our control.',
    'Ownership of the goods shall remain with company until full payment has been received.',
    'Delayed payments may attract interest at the rate of 18% per annum or as mutually agreed.',
    'Any customization, branding, printing, embroidery, or special manufacturing order cannot be cancelled or returned once production has commenced.',
    'Product colours may vary slightly from catalogues or digital images due to screen settings and manufacturing variations.',
    'All trademarks, logos, product designs, catalogues, and marketing materials of company remain the intellectual property of company and shall not be copied or reproduced without written permission.',
    'Dealers, distributors, wholesalers, and retailers are expected to maintain fair trade practices and shall not misuse the brand name or engage in misleading marketing.',
    'Company reserves the right to modify product specifications, packaging, prices, and these Terms & Conditions without prior notice.',
    'Any dispute arising out of the sale, supply, or interpretation of these Terms & Conditions shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.',
    'By placing an order, the customer acknowledges that they have read, understood, and agreed to these Terms & Conditions.'
  ];

  // Print/download removed — only Contact button retained per request

  return (
    <>
      <Seo title="Terms & Conditions | 5BROS Clothing" description="Review the terms of service for inquiries, manufacturing projects, and apparel procurement with 5BROS Clothing." canonicalPath="/terms" keywords="terms and conditions clothing manufacturer, apparel manufacturing terms" />

      <section className="pt-40 pb-20 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="gold-line" />
              <span className="text-sm md:text-base uppercase tracking-[0.32em] text-gold">Legal</span>
            </div>
            <div className="ml-auto hidden md:flex items-center text-sm text-muted-foreground gap-3">
              <BookOpen size={18} className="text-gold" />
              <span className="uppercase tracking-wide text-muted-foreground">Policy & Agreement</span>
            </div>
          </div>

          <h1 className="mt-6 font-display text-4xl md:text-6xl max-w-3xl">Terms and conditions</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">Please review these terms before placing an order or using our services.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-luxe max-w-4xl">

          <div className="rounded-2xl p-1 bg-gradient-to-r from-gold/30 via-white to-white shadow-lg">
            <div className="relative bg-white/95 rounded-2xl p-6 md:p-10 shadow-xl border border-white/20 overflow-hidden backdrop-blur-sm" ref={termsRef}>

              <div className="absolute -top-8 -right-8 opacity-10 pointer-events-none">
                <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="100" fill="url(#g)" />
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#f6e7c3" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-6xl md:text-8xl font-bold text-gold/10 transform -rotate-12 select-none">5BROS</span>
              </div>

              <div className="relative z-10 border-l-6 border-gold pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen size={28} className="text-gold" />
                  <h2 className="font-display text-3xl text-charcoal">Agreement</h2>
                </div>

                <p className="mb-4 text-foreground/80">Please read these terms carefully. If you have questions, contact our support team.</p>

                <ol className="mt-2 list-none space-y-4 text-lg text-foreground" style={{ fontSize: 20, lineHeight: 1.95 }}>
                  {clauses.map((c, i) => (
                    <li key={i} className={'flex items-start gap-4 p-4 rounded-lg ' + (i % 2 === 0 ? 'bg-white/0' : 'bg-amber-50/20')}>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold text-charcoal font-semibold shadow-sm">{i + 1}</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-foreground leading-relaxed">{c}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="relative z-10">
                <div className="border-t border-white/20 my-6" />
                <div className="mt-2 max-w-4xl flex justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold text-black font-semibold hover:bg-gold/10 transition"
                    aria-label="Contact Us"
                  >
                    Contact Us
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
