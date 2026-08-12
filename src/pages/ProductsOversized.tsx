import { Navigate, useParams } from "react-router-dom";
import ProductDetailPage from "../components/ProductDetailPage";

import oversized1Bg from "../assets/oversized6p2.jpeg";
import oversized1p2 from "../assets/oversized6p4.png";
import oversized1p3 from "../assets/oversized6p3.png";
import oversized1Listing from "../assets/oversized6.jpeg";
import oversized2Bg from "../assets/oversized7.jpeg";
import oversized2p2 from "../assets/oversized7p2.jpeg";
import oversized2Listing from "../assets/oversized2.jpeg";
import oversized3Bg from "../assets/oversized8p3.jpeg";
import oversized3p2 from "../assets/oversized8p2.jpeg";
import oversized3Listing from "../assets/oversized8.jpeg";


const genericTechnicalNote =
  "We offer custom fabric, color and sizing options.\nPlease share your bulk requirements via our contact page for a tailored quote.";


const productVariants = [
  {
    id: 1,
    title: "Classic Oversized Tee",
    subtitle: "Relaxed, comfortable fit perfect for streetwear collections and casual retail.",
    listingImage: oversized1Listing,
    image: oversized1Bg,
    imageP2: oversized1p2,
    imageP3: oversized1p3,
    technicalHighlights: [
      { title: "Fabric", value: "French Cotton-Poly Blends" },
      { title: "GSM", value: "200-210" },
      { title: "MOQ", value: "500 pieces each colour" },
      { title: "", value: genericTechnicalNote },
    ],
    benefits: [
      "Ideal for streetwear brands and fashion retailers",
      "Comfortable relaxed fit with modern aesthetic",
      "Brand-ready finishing for merchandise programs",
      "Fast sampling and flexible production support",
    ],
    detailCards: [
      { title: "Oversized construction", body: "Engineered oversized silhouette with quality construction for professional streetwear presentation." },
      { title: "Color and branding", body: "Choose from a wide color palette and add your logo with screen print, embroidery, or custom finishing." },
      { title: "Production flexibility", body: "We support low-volume testing as well as larger retail orders without quality compromise." },
    ],
  },
  {
    id: 2,
    title: "Modern Drop Shoulder Tee",
    subtitle: "Contemporary drop shoulder styling suited for fashion-forward collections and trend-focused brands.",
    listingImage: oversized2Listing,
    image: oversized2Bg,
    imageP2: oversized2p2,
    technicalHighlights: [
      { title: "Fabric", value: "LoopKnit Cotton" },
      { title: "GSM", value: "240-260" },
      { title: "MOQ", value: "500 pieces each colour" },
      { title: "", value: genericTechnicalNote },
    ],
    benefits: [
      "Perfect for contemporary fashion collections",
      "On-trend drop shoulder silhouette",
      "Great for premium streetwear brands",
      "Reliable repeat orders with consistent finishing",
    ],
    detailCards: [
      { title: "Contemporary design", body: "Modern drop shoulder construction with quality finishing for fashion-forward brand positioning." },
      { title: "Branding details", body: "Add custom logos, graphic placement, or premium embroidery for elevated branding." },
      { title: "Delivery support", body: "We coordinate sampling, bulk production, and export-ready packaging for your collections." },
    ],
  },
  {
    id: 3,
    title: "Performance Oversized Shirt",
    subtitle: "Technical oversized wear with breathability for active and lifestyle collections.",
    listingImage: oversized3Listing,
    image: oversized3Bg,
    imageP2: oversized3p2,

    technicalHighlights: [
      { title: "Fabric", value: "Imported Scuba Rib" },
      { title: "GSM", value: "250-270" },
      { title: "MOQ", value: "500 pieces each colour" },
      { title: "", value: genericTechnicalNote },
    ],
    benefits: [
      "Comfortable for active lifestyle wear",
      "Maintains finish during repeated use",
      "Ideal for sports lifestyle and wellness brands",
      "Supports bulk supply with reliable lead times",
    ],
    detailCards: [
      { title: "Technical performance", body: "Performance fabrics designed for comfort and breathability with oversized styling." },
      { title: "Lifestyle appeal", body: "Available in trending colors for lifestyle and wellness brand collections." },
      { title: "Scalable production", body: "Suitable for both pilot programs and larger seasonal collection orders." },
    ],
  },
  

];

export default function ProductOversizedDetail() {
  const { photoId } = useParams();
  const normalizedId = Number(photoId);
  const product = productVariants.find((item) => item.id === normalizedId);

  if (!product) {
    return <Navigate to="/products/oversized" replace />;
  }

  const relatedProducts = productVariants.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <ProductDetailPage
      product={product}
      relatedProducts={relatedProducts}
      seoTitle={`${product.title} | Technical Details & Quote`}
      seoDescription={`${product.subtitle} Explore the product details, customization options, and request a quote for this oversized style.`}
      canonicalPath={`/products/oversized/details/${product.id}`}
      seoKeywords={`${product.title.toLowerCase()}, oversized clothing manufacturing, streetwear apparel, request quote oversized`}
      collectionPath="/products/oversized"
      collectionLabel="oversized"
      relatedHeading="Explore more oversized options"
      relatedLinkText="View full collection"
    />
  );
}
