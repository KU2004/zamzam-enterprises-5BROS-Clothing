import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

interface BlogPageProps {
  title: string;
  heading: string;
  intro: string;
  keyword: string;
  canonicalPath: string;
  locale?: string;
  section?: string;
  body: string[];
}

export default function BlogPage({
  title,
  heading,
  intro,
  keyword,
  canonicalPath,
  locale = "en_IN",
  section = "Blog",
  body,
}: BlogPageProps) {
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
            <Link to="/blog" className="rounded-full border border-border px-6 py-3 text-sm font-semibold">Back to Blog</Link>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="prose prose-neutral max-w-none text-muted-foreground">
            {body.map((paragraph, index) => (
              <p key={index} className="mt-5 leading-8">{paragraph}</p>
            ))}
            <h2 className="mt-12 font-display text-2xl text-foreground">Why this matters for buyers</h2>
            <p className="mt-4 leading-8">
              Buyers increasingly evaluate manufacturers on certifications, supply chain transparency, lead times, and flexibility. A strong SEO presence helps those buyers discover the right manufacturing partner before they ever make contact.
            </p>
            <h2 className="mt-12 font-display text-2xl text-foreground">Next steps</h2>
            <p className="mt-4 leading-8">
              If you are comparing factories for OEM, ODM, private label, or bulk production, request a quote so we can evaluate your requirements and recommend the best production route.
            </p>
          </article>
          <aside className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <h3 className="font-display text-2xl text-foreground">Related topics</h3>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li><Link to="/blog/oem-vs-odm-manufacturing" className="hover:text-gold">OEM vs ODM Manufacturing</Link></li>
              <li><Link to="/blog/private-label-clothing-guide" className="hover:text-gold">Private Label Clothing Guide</Link></li>
              <li><Link to="/blog/best-clothing-manufacturer-in-india" className="hover:text-gold">Best Clothing Manufacturer in India</Link></li>
              <li><Link to="/products/custom-label" className="hover:text-gold">Private Label Apparel Services</Link></li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
