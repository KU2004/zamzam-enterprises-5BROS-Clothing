import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyChooseUs from "./pages/WhyChooseUs";
import Products from "./pages/Products";
import ProductsRoundNeck from "./pages/ProductsRoundNeck";
import ProductsPolo from "./pages/ProductsPolo";
import ProductsOversized from "./pages/ProductsOversized";
import ProductsHoodies from "./pages/ProductsHoodies";
import ProductsActivewear from "./pages/ProductsActivewear";
import ProductsCustomLabel from "./pages/ProductsCustomLabel";
import ProductPoloDetail from "./pages/ProductPoloDetail";
import ProductActivewearDetail from "./pages/ProductActivewearDetail";
import ProductHoodiesDetail from "./pages/ProductHoodiesDetail";
import ProductOversizedDetail from "./pages/ProductOversizedDetail";
import ProductCustomLabelDetail from "./pages/ProductCustomLabelDetail";
import ProductRoundNeckDetail from "./pages/ProductRoundNeckDetail";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";
import Privacy from "./pages/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import { FloatingSocialButtons } from "./components/FloatingSocialButtons";
import { BackToTopButton } from "./components/BackToTopButton";
import CountryLandingPage from "./pages/CountryLandingPage";
import BlogPage from "./pages/BlogPage";
import ExportLandingPagePremium from "./pages/ExportLandingPage";
import NotFound from "./pages/NotFound";

function AppContent() {
  const location = useLocation();
  const showSideNavControls = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Nav />
      <FloatingSocialButtons showMenuButton={showSideNavControls} />
      <BackToTopButton />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exportlandingpage" element={<ExportLandingPagePremium />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/round-neck" element={<ProductsRoundNeck />} />
          <Route path="/products/polo" element={<ProductsPolo />} />
          <Route path="/products/polo/details/:photoId" element={<ProductPoloDetail />} />
          <Route path="/products/activewear" element={<ProductsActivewear />} />
          <Route path="/products/activewear/details/:photoId" element={<ProductActivewearDetail />} />
          <Route path="/products/oversized" element={<ProductsOversized />} />
          <Route path="/products/oversized/details/:photoId" element={<ProductOversizedDetail />} />
          <Route path="/products/hoodies" element={<ProductsHoodies />} />
          <Route path="/products/hoodies/details/:photoId" element={<ProductHoodiesDetail />} />
          <Route path="/products/round-neck" element={<ProductsRoundNeck />} />
          <Route path="/products/round-neck/details/:photoId" element={<ProductRoundNeckDetail />} />
          <Route path="/products/custom-label" element={<ProductsCustomLabel />} />
          <Route path="/products/custom-label/details/:photoId" element={<ProductCustomLabelDetail />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/india" element={<CountryLandingPage title="Clothing Manufacturer India" heading="Clothing Manufacturing in India for Global Brands" intro="5BROS Clothing delivers custom garments, private label apparel, uniforms, and OEM manufacturing solutions for buyers across India and international markets." keyword="clothing manufacturer india" locale="en_IN" canonicalPath="/india" section="India" highlights={["OEM and ODM manufacturing", "Low MOQ and bulk production", "Certified quality control", "Export-ready packaging and logistics"]} />} />
          <Route path="/africa" element={<CountryLandingPage title="Clothing Manufacturer Africa" heading="Apparel Manufacturing for Africa" intro="Support your retail, corporate, and institutional apparel needs across Africa with reliable manufacturing, flexible production, and export support." keyword="clothing manufacturer africa" locale="en_ZA" canonicalPath="/africa" section="Africa" highlights={["Uniform and workwear capability", "Private label production", "Regional export support", "Fast communication and sampling"]} />} />
          <Route path="/kenya" element={<CountryLandingPage title="Clothing Manufacturer Kenya" heading="Custom Apparel Supply for Kenya" intro="We help brands in Kenya source custom apparel, uniforms, and bulk garments from India with dependable production workflows." keyword="clothing manufacturer kenya" locale="en_KE" canonicalPath="/kenya" section="Kenya" highlights={["Bulk clothing supply", "Private label apparel", "Flexible MOQs", "Quality assurance"]} />} />
          <Route path="/uganda" element={<CountryLandingPage title="Clothing Manufacturer Uganda" heading="Private Label Clothing for Uganda" intro="Create branded apparel for Uganda with low MOQs, custom fabric options, and efficient manufacturing from India." keyword="clothing manufacturer uganda" locale="en_UG" canonicalPath="/uganda" section="Uganda" highlights={["Custom branding and labels", "Comfort-focused production", "Export-ready shipping", "Responsive support"]} />} />
          <Route path="/tanzania" element={<CountryLandingPage title="Clothing Manufacturer Tanzania" heading="Apparel Manufacturing for Tanzania" intro="From uniforms to retail basics, 5BROS supports apparel manufacturing needs across Tanzania with professional sourcing and production support." keyword="clothing manufacturer tanzania" locale="en_TZ" canonicalPath="/tanzania" section="Tanzania" highlights={["Uniform manufacturing", "Bulk apparel supply", "Flexible lead times", "Competitive pricing"]} />} />
          <Route path="/ethiopia" element={<CountryLandingPage title="Clothing Manufacturer Ethiopia" heading="Bulk Apparel Manufacturing for Ethiopia" intro="Manufacture custom garments and uniforms for Ethiopia with quality control, transparent communication, and export-ready execution." keyword="clothing manufacturer ethiopia" locale="en_ET" canonicalPath="/ethiopia" section="Ethiopia" highlights={["Institutional uniforms", "Bulk clothing production", "Private label options", "Reliable lead times"]} />} />
          <Route path="/nigeria" element={<CountryLandingPage title="Clothing Manufacturer Nigeria" heading="Bulk Clothing Supply for Nigeria" intro="We support local and regional apparel buyers in Nigeria with custom manufacturing, branding, and efficient delivery from India." keyword="clothing manufacturer nigeria" locale="en_NG" canonicalPath="/nigeria" section="Nigeria" highlights={["Wholesale apparel support", "Custom branding", "Sampling and approvals", "Export support"]} />} />
          <Route path="/south-africa" element={<CountryLandingPage title="Clothing Manufacturer South Africa" heading="Apparel Manufacturing for South Africa" intro="Whether you need uniforms, basics, or private label garments, we can support your South Africa sourcing strategy at scale." keyword="clothing manufacturer south africa" locale="en_ZA" canonicalPath="/south-africa" section="South Africa" highlights={["Custom garment development", "Workwear and uniforms", "High quality finishing", "Global export values"]} />} />
          <Route path="/ghana" element={<CountryLandingPage title="Clothing Manufacturer Ghana" heading="Custom Apparel Manufacturing for Ghana" intro="Partner with 5BROS for custom apparel sourcing in Ghana, covering merchandising, production, and delivery support." keyword="clothing manufacturer ghana" locale="en_GH" canonicalPath="/ghana" section="Ghana" highlights={["Retail apparel production", "Corporate uniforms", "Flexible production runs", "Consistent quality"]} />} />
          <Route path="/uae" element={<CountryLandingPage title="Clothing Manufacturer UAE" heading="Apparel Manufacturing for the UAE" intro="5BROS Clothing supports UAE buyers with custom garments, uniforms, and large-scale production for Dubai, Abu Dhabi, and wider markets." keyword="clothing manufacturer uae" locale="en_AE" canonicalPath="/uae" section="UAE" highlights={["Dubai and Abu Dhabi supply", "Corporate uniforms", "Private label solutions", "Fast turnaround"]} />} />
          <Route path="/dubai" element={<CountryLandingPage title="Garment Manufacturer Dubai" heading="Garment Manufacturing for Dubai" intro="Create branded apparel for Dubai with OEM, ODM, and private label manufacturing options from a trusted Indian production partner." keyword="garment manufacturer dubai" locale="en_AE" canonicalPath="/dubai" section="Dubai" highlights={["Custom apparel for hospitality", "Bulk ordering support", "Premium finishing", "Sampling support"]} />} />
          <Route path="/abu-dhabi" element={<CountryLandingPage title="Apparel Supplier Abu Dhabi" heading="Custom Apparel for Abu Dhabi" intro="We provide apparel manufacturing support for Abu Dhabi with workwear, uniforms, and fashion basics designed for regional buyers." keyword="apparel supplier abu dhabi" locale="en_AE" canonicalPath="/abu-dhabi" section="Abu Dhabi" highlights={["Corporate apparel", "Uniform manufacturing", "Brand-ready packaging", "Export logistics"]} />} />
          <Route path="/saudi-arabia" element={<CountryLandingPage title="Clothing Manufacturer Saudi Arabia" heading="Apparel Manufacturing for Saudi Arabia" intro="Manufacture custom clothing and uniforms for Saudi Arabia with dependable production, premium quality, and export-ready service." keyword="clothing manufacturer saudi arabia" locale="en_SA" canonicalPath="/saudi-arabia" section="Saudi Arabia" highlights={["Uniform and workwear production", "Bulk apparel supply", "Private label manufacturing", "Quality-controlled shipping"]} />} />
          <Route path="/riyadh" element={<CountryLandingPage title="Clothing Manufacturer Riyadh" heading="Custom Apparel Supply for Riyadh" intro="From uniforms to lifestyle apparel, we support businesses in Riyadh with customized manufacturing and reliable delivery from India." keyword="clothing manufacturer riyadh" locale="en_SA" canonicalPath="/riyadh" section="Riyadh" highlights={["Custom textile sourcing", "Tailored production runs", "Corporate apparel", "Strong communication"]} />} />
          <Route path="/jeddah" element={<CountryLandingPage title="Clothing Manufacturer Jeddah" heading="Apparel Manufacturing for Jeddah" intro="We help brands in Jeddah source high-quality custom garments and uniforms through a streamlined manufacturing process." keyword="clothing manufacturer jeddah" locale="en_SA" canonicalPath="/jeddah" section="Jeddah" highlights={["Custom uniforms", "Bulk apparel", "Flexible lead times", "Quality control"]} />} />
          <Route path="/dammam" element={<CountryLandingPage title="Clothing Manufacturer Dammam" heading="Workwear and Uniform Manufacturing for Dammam" intro="Build tailored workwear and uniforms for Dammam with premium finishing and dependable production support from India." keyword="clothing manufacturer dammam" locale="en_SA" canonicalPath="/dammam" section="Dammam" highlights={["Industrial uniforms", "Standard and custom workwear", "OEM and private label", "Export support"]} />} />
          <Route path="/blog" element={<div className="pt-40 pb-20 bg-muted/30 border-b border-border"><div className="container-luxe"><p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold">Blog</p><h1 className="mt-6 font-display text-4xl md:text-6xl">Apparel Manufacturing Insights</h1><p className="mt-6 max-w-3xl text-lg text-muted-foreground">Explore guides on private label development, OEM vs ODM selection, garment manufacturing, and sustainable apparel sourcing.</p><div className="mt-10 grid gap-6 md:grid-cols-2"><div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm"><h2 className="font-display text-2xl text-foreground">Best Clothing Manufacturer in India</h2><p className="mt-4 text-muted-foreground leading-8">What to prioritize when choosing a manufacturing partner for quality, certifications, capacity, and export readiness.</p><a href="/blog/best-clothing-manufacturer-in-india" className="mt-6 inline-flex text-gold">Read article →</a></div><div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm"><h2 className="font-display text-2xl text-foreground">OEM vs ODM Manufacturing</h2><p className="mt-4 text-muted-foreground leading-8">Understand which apparel manufacturing model is right for your brand and production goals.</p><a href="/blog/oem-vs-odm-manufacturing" className="mt-6 inline-flex text-gold">Read article →</a></div><div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm"><h2 className="font-display text-2xl text-foreground">Private Label Clothing Guide</h2><p className="mt-4 text-muted-foreground leading-8">A practical roadmap for starting a private label clothing line with reliable manufacturing support.</p><a href="/blog/private-label-clothing-guide" className="mt-6 inline-flex text-gold">Read article →</a></div></div></div></div>} />
          <Route path="/blog/private-label-clothing-guide" element={<BlogPage title="Private Label Clothing Guide" heading="Private Label Clothing Guide" intro="Learn how to launch a private label clothing line with the right manufacturer, development process, and production strategy." keyword="private label clothing guide" canonicalPath="/blog/private-label-clothing-guide" body={["Private label apparel lets you build a brand without owning a full factory. The model is attractive because it allows you to focus on branding, design, and customer relationships while your manufacturing partner handles production, quality control, and packaging.","When selecting a private label clothing manufacturer, evaluate fabric sourcing options, sampling speed, communication quality, MOQ flexibility, and export readiness. These factors often matter more than just the lowest price because they affect your launch timeline and ongoing profitability.","For new brands, it is wise to start with a small collection, validate demand, and then scale as you gather feedback. A flexible production partner can support that progression without forcing you into oversized orders too early.","At 5BROS Clothing, we work with fashion and retail brands that need dependable production support for basics, custom apparel, and branded collections. Our approach balances price competitiveness with quality, lead time reliability, and a clear communication structure."]} />} />
          <Route path="/blog/oem-vs-odm-manufacturing" element={<BlogPage title="OEM vs ODM Manufacturing" heading="OEM vs ODM Manufacturing" intro="Compare OEM and ODM apparel manufacturing to choose the right production model for your clothing business." keyword="oem vs odm manufacturing" canonicalPath="/blog/oem-vs-odm-manufacturing" body={["OEM and ODM are two common manufacturing models in the apparel industry. OEM means the manufacturer produces garments based on your specifications, while ODM provides a more turnkey model where the supplier may also develop the product concept and pattern.","If your business already has a clear design direction, an OEM relationship can be more efficient. You keep control of the styling, fit, and sourcing choices while the factory handles production and quality assurance.","ODM can be useful when you need faster product development and want a partner who can help shape the concept. It is especially relevant for brands that want to launch collections quickly without building a full internal development team.","The right choice depends on your goals, internal capability, and desired level of control. For many international buyers, a hybrid approach offers the best balance of flexibility and speed."]} />} />
          <Route path="/blog/best-clothing-manufacturer-in-india" element={<BlogPage title="Best Clothing Manufacturer in India" heading="Best Clothing Manufacturer in India" intro="Learn what makes a top garment manufacturer in India stand out for international buyers and private label brands." keyword="best clothing manufacturer in india" canonicalPath="/blog/best-clothing-manufacturer-in-india" body={["Choosing the best clothing manufacturer in India requires more than comparing product catalogs. Buyers should look at production capability, certifications, sample turnaround, compliance, communication, and the ability to handle both small and large production runs.","A strong manufacturing partner will be transparent about lead times, MOQ requirements, fabric sourcing, and the steps used to control quality. They should also be comfortable supporting export documentation and delivering products in a consistent and predictable way.","Brands also need a partner who can scale. A factory that works well for a pilot order should be able to support repeated production cycles as demand grows.","At 5BROS Clothing, our strength is combining premium apparel production with responsive service, export awareness, and product customization that supports both emerging labels and established brands."]} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
