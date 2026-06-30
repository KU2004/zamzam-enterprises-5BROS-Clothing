import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
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
    </Router>
  );
}
