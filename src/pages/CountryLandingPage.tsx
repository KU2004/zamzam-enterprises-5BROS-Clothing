import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

interface CountryLandingPageProps {
  title: string;
  heading: string;
  intro: string;
  keyword: string;
  locale: string;
  canonicalPath: string;
  section: string;
  highlights: string[];
}

export default function CountryLandingPage({
  title,
  heading,
  intro,
  keyword,
  locale,
  canonicalPath,
  section,
  highlights,
}: CountryLandingPageProps) {
  return (
    <>
      <Seo title={title} description={intro} canonicalPath={canonicalPath} keywords={keyword} locale={locale} section={section} />
      <section className="pt-40 pb-20 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold">{section}</p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl max-w-3xl">{heading}</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal">Request a Quote</Link>
            <Link to="/products" className="rounded-full border border-border px-6 py-3 text-sm font-semibold">Explore Products</Link>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl text-foreground">Why brands choose 5BROS for {keyword}</h2>
            <p className="mt-4 text-muted-foreground leading-8">
              We provide OEM, ODM, private label, and custom clothing manufacturing for retail, hospitality, corporate, and performance brands. Every order is tailored for quality, lead times, and export-ready packaging.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <h3 className="font-display text-2xl text-foreground">Popular services</h3>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li>Custom T-shirt manufacturing</li>
              <li>Private label apparel</li>
              <li>Uniform and workwear production</li>
              <li>Bulk clothing export support</li>
            </ul>
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white">Start Your Inquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
