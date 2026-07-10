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
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";
import Privacy from "./pages/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import { FloatingSocialButtons } from "./components/FloatingSocialButtons";
import { BackToTopButton } from "./components/BackToTopButton";

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
          <Route path="/about" element={<About />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/round-neck" element={<ProductsRoundNeck />} />
          <Route path="/products/polo" element={<ProductsPolo />} />
          <Route path="/products/oversized" element={<ProductsOversized />} />
          <Route path="/products/hoodies" element={<ProductsHoodies />} />
          <Route path="/products/activewear" element={<ProductsActivewear />} />
          <Route path="/products/custom-label" element={<ProductsCustomLabel />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/privacy" element={<Privacy />} />
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
