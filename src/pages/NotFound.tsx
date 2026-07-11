import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | 5BROS Clothing" description="The requested page could not be found. Explore 5BROS Clothing’s custom apparel manufacturing services and contact page instead." canonicalPath="/404" keywords="404 clothing manufacturer, page not found apparel website" />
      <section className="flex min-h-screen items-center justify-center bg-background px-6 py-24">
        <div className="max-w-2xl rounded-[2rem] border border-border bg-card p-10 text-center shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">404</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-foreground">Page not found</h1>
          <p className="mt-6 text-muted-foreground leading-8">
            The page you are looking for may have moved or no longer exists. Browse our manufacturing services or contact us for a custom quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal">Back home</Link>
            <Link to="/contact" className="rounded-full border border-border px-6 py-3 text-sm font-semibold">Request a quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
