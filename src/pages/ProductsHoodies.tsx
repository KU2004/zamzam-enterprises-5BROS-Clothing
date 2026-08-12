import { Navigate, useParams } from "react-router-dom";
import ProductDetailPage from "../components/ProductDetailPage";

import hoodies1Bg from "../assets/hoodies1.jpeg";
import hoodies2Bg from "../assets/hoodies2.jpeg";
import hoodies3Bg from "../assets/hoodies3.jpeg";
import hoodies4Bg from "../assets/hoodies4.jpeg";

const genericTechnicalNote =
  "We offer custom fabric, color and sizing options.\nPlease share your bulk requirements via our contact page for a tailored quote.";

const commonTechnicalHighlights = [
  { title: "Fabric", value: "Fleece Two Thread & Three Thread" },
  { title: "GSM", value: "280-300" },
  { title: "MOQ", value: "500 pieces each colour" },
  { title: "", value: genericTechnicalNote },
];

const productVariants = [
  {
    id: 1,
    title: "Classic Fleece Hoodie",
    subtitle: "Premium fleece construction perfect for casual wear, retail, and branded merchandise.",
    image: hoodies1Bg,

    technicalHighlights: commonTechnicalHighlights,
    benefits: [
      "Ideal for corporate uniforms, retail stores, and lifestyle brands",
      "Premium quality fleece with excellent durability",
      "Brand-ready finishing for private label merchandise",
      "Fast sampling and export-friendly packaging support",
    ],
    detailCards: [
      { title: "Premium fleece construction", body: "Soft, durable fleece with strong seams and reinforced hood design for professional presentation." },
      { title: "Color and branding", body: "Choose from a wide color palette and add your logo with embroidery or print solutions." },
      { title: "Production flexibility", body: "We support low-volume testing as well as larger orders without compromising quality or turnaround." },
    ],
  },
  {
    id: 2,
    title: "Modern Slim Hoodie",
    subtitle: "Contemporary tapered silhouette suited for fashion-forward collections and premium branding.",
    image: hoodies2Bg,


    technicalHighlights: commonTechnicalHighlights,
    benefits: [
      "Perfect for retail-ready seasonal collections",
      "Clean contemporary lines and refined presentation",
      "Great for premium staff uniforms and boutique brands",
      "Reliable repeat orders with consistent finishing",
    ],
    detailCards: [
      { title: "Tailored fit", body: "Engineered for a polished silhouette with strong recovery and comfortable movement." },
      { title: "Branding details", body: "Add subtle logos, contrast trim, or premium embroidery for elevated branding." },
      { title: "Delivery support", body: "We coordinate sampling, bulk production, and export-ready packaging for your shipment." },
    ],
  },
  {
    id: 3,
    title: "Performance Sweatshirt",
    subtitle: "Technical fleece with advanced moisture management for activewear and training programs.",
    image: hoodies3Bg,


    technicalHighlights: commonTechnicalHighlights,
    benefits: [
      "Comfortable for active use and casual everyday wear",
      "Maintains clean finish during repeated wear",
      "Ideal for training teams, fitness centers, and event apparel",
      "Supports bulk supply with dependable lead times",
    ],
    detailCards: [
      { title: "Technical performance", body: "Advanced fleece designed to maintain comfort and breathability without sacrificing professional presentation." },
      { title: "Color flexibility", body: "Available in a broad palette for team uniforms and branded merchandise." },
      { title: "Scalable production", body: "Suitable for both pilot programs and larger repeat orders." },
    ],
  },
  {
    id: 4,
    title: "Premium Dress Hoodie",
    subtitle: "Elevated fleece option for executive wear, hospitality programs, and formal branding.",
    image: hoodies4Bg,

    technicalHighlights: commonTechnicalHighlights,
    benefits: [
      "Elevated look for client-facing and executive teams",
      "Smart finishing for refined presentation",
      "Excellent for hospitality and premium uniform programs",
      "Custom branding adds premium touch and brand identity",
    ],
    detailCards: [
      { title: "Premium finish", body: "Refined fleece construction and detailed finishing create a premium visual presentation." },
      { title: "Brand alignment", body: "Available in custom colors and branding treatments for consistent image." },
      { title: "Quality control", body: "Our team reviews each production milestone for consistency and superior finish." },
    ],
  },
];

export default function ProductHoodiesDetail() {
  const { photoId } = useParams();
  const normalizedId = Number(photoId);
  const product = productVariants.find((item) => item.id === normalizedId);

  if (!product) {
    return <Navigate to="/products/hoodies" replace />;
  }

  const relatedProducts = productVariants.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <ProductDetailPage
      product={product}
      relatedProducts={relatedProducts}
      seoTitle={`${product.title} | Technical Details & Quote`}
      seoDescription={`${product.subtitle} Explore the product details, customization options, and request a quote for this hoodie style.`}
      canonicalPath={`/products/hoodies/details/${product.id}`}
      seoKeywords={`${product.title.toLowerCase()}, hoodie manufacturing specifications, fleece manufacturing, request quote hoodies`}
      collectionPath="/products/hoodies"
      collectionLabel="hoodies"
      relatedHeading="Explore more hoodie options"
      relatedLinkText="View full collection"
    />
  );
}
