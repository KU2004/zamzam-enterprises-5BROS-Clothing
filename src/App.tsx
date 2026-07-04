import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { FloatingSocialButtons } from "./components/FloatingSocialButtons";

function AppContent() {
  const location = useLocation();
  const showSideNavControls = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Nav />
      <FloatingSocialButtons showMenuButton={showSideNavControls} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/products" element={<Products />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/contact" element={<Contact />} />
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
