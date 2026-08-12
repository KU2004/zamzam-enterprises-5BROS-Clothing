import { Navigate, useParams } from "react-router-dom";
import ProductDetailPage from "../components/ProductDetailPage";

import sports1Bg from "../assets/sports1.jpeg";
import sports1p2 from "../assets/sports1p2.png";
import sports2Bg from "../assets/sports2.jpeg";
import sports2p2 from "../assets/sports2p2.png";
import sports3Bg from "../assets/sports3.jpeg";
import sports4Bg from "../assets/sports4.jpeg";
import sports4p2 from "../assets/sports4p2.png";
import sports5Bg from "../assets/sports5.jpeg";
import sports6Bg from "../assets/sports6.jpeg";
import sports7Bg from "../assets/sports7-bg.png";


const genericTechnicalNote =
  "We offer custom fabric, color and sizing options.\nPlease share your bulk requirements via our contact page for a tailored quote.";

const commonTechnicalHighlights = [
  { title: "Fabric", value: "Polyester 4-way Lycra" },
  { title: "GSM", value: "170-200" },
  { title: "MOQ", value: "300 pieces each colour" },
  { title: "", value: genericTechnicalNote },
];

const productVariants = [
  {
    id: 1,
    title: "Performance Mesh Tank",
    subtitle: "Lightweight and breathable mesh fabric designed for high-intensity training and sports activities.",
    image: sports1Bg,
    imageP2: sports1p2,
    images: [sports3Bg, sports5Bg, sports7Bg],
    technicalHighlights: commonTechnicalHighlights,
    benefits: [
      "Perfect for gym wear and sports teams",
      "Superior moisture management and breathability",
      "Durable construction for repeated athletic use",
      "Fast sampling and bulk production support",
    ],
    detailCards: [
      { title: "Advanced construction", body: "Engineered mesh panels provide optimal ventilation and comfort during intense physical activity." },
      { title: "Color and branding", body: "Available in vibrant colors with custom logo placement for team identity." },
      { title: "Production flexibility", body: "We support both small team runs and larger commercial orders." },
    ],
  },
  {
    id: 2,
    title: "Compression Fit Jersey",
    subtitle: "Form-fitting performance wear engineered for muscle support and athletic confidence.",
    image: sports2Bg,
    imageP2: sports2p2,
    images: [sports6Bg, sports2p2],
    bgImage: sports2Bg,
    technicalHighlights: commonTechnicalHighlights,
    benefits: [
      "Ideal for athletes and fitness enthusiasts",
      "Supports muscle recovery and performance",
      "Sleek, modern aesthetic",
      "Reliable repeat orders with consistent finishing",
    ],
    detailCards: [
      { title: "Technical fabric", body: "High-stretch materials ensure freedom of movement while maintaining a close, supportive fit." },
      { title: "Branding details", body: "Sublimation printing allows for full-color graphics without feel." },
      { title: "Quality support", body: "We coordinate sampling, bulk production, and export-ready packaging for your shipment." },
    ],
  },
  {
    id: 4,
    title: "Lightweight Training Top",
    subtitle: "Minimal design for maximum mobility and a clean athletic aesthetic.",
    image: sports4Bg,
    imageP2: sports4p2,
    bgImage: sports4Bg,
    technicalHighlights: commonTechnicalHighlights,
    benefits: [
      "Minimal weight for zero-restriction activity",
      "Clean, modern design for professional teams",
      "Excellent for training and conditioning",
      "Custom branding adds team identity",
    ],
    detailCards: [
      { title: "Engineered lightweight", body: "Reduced fabric weight without compromising durability or visual quality." },
      { title: "Team alignment", body: "Available in custom colors and branding treatments for team consistency." },
      { title: "Quality control", body: "Our team reviews each production milestone for consistency and finish." },
    ],
  },
];

export default function ProductActivewearDetail() {
  const { photoId } = useParams();
  const normalizedId = Number(photoId);
  const product = productVariants.find((item) => item.id === normalizedId);

  if (!product) {
    return <Navigate to="/products/activewear" replace />;
  }

  const relatedProducts = productVariants.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <ProductDetailPage
      product={product}
      relatedProducts={relatedProducts}
      seoTitle={`${product.title} | Technical Details & Quote`}
      seoDescription={`${product.subtitle} Explore the product details, customization options, and request a quote for this activewear style.`}
      canonicalPath={`/products/activewear/details/${product.id}`}
      seoKeywords={`${product.title.toLowerCase()}, activewear manufacturing specifications, request quote activewear garments`}
      collectionPath="/products/activewear"
      collectionLabel="activewear"
      relatedHeading="Explore more activewear options"
      relatedLinkText="View full collection"
    />
  );
}
