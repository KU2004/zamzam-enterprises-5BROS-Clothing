import { Navigate, useParams } from "react-router-dom";
import ProductDetailPage from "../components/ProductDetailPage";

import oversized1Bg from "../assets/oversized1.jpeg";
import oversized1p2 from "../assets/oversized1p2.png";
import oversized2Bg from "../assets/oversized2.jpeg";
import oversized2p2 from "../assets/oversized2p2.png";
import oversized3Bg from "../assets/oversized3.jpeg";
import oversized3p2 from "../assets/oversized3p2.png";
import oversized4Bg from "../assets/oversized4.jpeg";
import oversized4p2 from "../assets/oversized4p2.png";
import oversized5Bg from "../assets/oversized5.jpeg";
import oversized5p2 from "../assets/oversized5p2.png";

const productVariants = [
  {
    id: 1,
    title: "Classic Oversized Tee",
    subtitle: "Relaxed, comfortable fit perfect for streetwear collections and casual retail.",
    image: oversized1Bg,
    imageP2: oversized1p2,
    technicalHighlights: [
      { title: "Fabric options", value: "Premium cotton and soft cotton-poly blends" },
      { title: "Fit range", value: "Classic oversized and relaxed silhouettes" },
      { title: "Customization", value: "Screen print, embroidery, custom labels, and patches" },
      { title: "MOQ", value: "Flexible production runs for retail collections" },
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
    image: oversized2Bg,
    imageP2: oversized2p2,
    bgImage: oversized2Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Premium cotton and trendy blend fabrics" },
      { title: "Fit range", value: "Drop shoulder and relaxed profiles" },
      { title: "Customization", value: "Monogram detailing, graphic print, and custom tags" },
      { title: "MOQ", value: "Flexible sampling and scalable production" },
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
    image: oversized3Bg,
    imageP2: oversized3p2,
    bgImage: oversized3Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Performance blends with moisture-wicking properties" },
      { title: "Fit range", value: "Comfort-focused and athletic oversized profiles" },
      { title: "Customization", value: "Heat transfer, screen print, and woven labels" },
      { title: "MOQ", value: "Flexible runs for lifestyle and promotional collections" },
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
  {
    id: 4,
    title: "Luxury Oversized Blank",
    subtitle: "Ultra-premium oversized option for luxury and high-end fashion collections.",
    image: oversized4Bg,
    imageP2: oversized4p2,
    bgImage: oversized4Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Premium cotton and luxury fiber blends" },
      { title: "Fit range", value: "Tailored luxury oversized profiles" },
      { title: "Customization", value: "Embroidery, jacquard details, and luxury labels" },
      { title: "MOQ", value: "Flexible production for luxury programs" },
    ],
    benefits: [
      "Premium positioning for luxury brands",
      "Exceptional quality and softness",
      "Supports luxury brand identity",
      "Consistent premium quality for repeat orders",
    ],
    detailCards: [
      { title: "Luxury quality", body: "Premium fabric selection with meticulous construction for luxury brand positioning." },
      { title: "Brand alignment", body: "Available in custom colors and luxury branding treatments for brand consistency." },
      { title: "Quality assurance", body: "Our team reviews each production milestone for superior luxury finishing." },
    ],
  },
  {
    id: 5,
    title: "Sustainable Oversized Collection",
    subtitle: "Eco-conscious oversized options for brands focused on sustainable fashion movement.",
    image: oversized5Bg,
    imageP2: oversized5p2,
    bgImage: oversized5Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Organic and recycled content oversized fabrics" },
      { title: "Fit range", value: "Classic and contemporary oversized silhouettes" },
      { title: "Customization", value: "Eco-friendly labels and sustainable packaging options" },
      { title: "MOQ", value: "Flexible for sustainable brand launches" },
    ],
    benefits: [
      "Perfect for eco-conscious streetwear brands",
      "Supports sustainability messaging",
      "Appeals to conscious consumers",
      "Aligns with modern brand values",
    ],
    detailCards: [
      { title: "Sustainable materials", body: "Organic and recycled content options that support your brand's environmental commitments." },
      { title: "Eco-branding", body: "Support for sustainable labeling and eco-friendly packaging aligned with brand values." },
      { title: "Certified production", body: "Coordination with certification bodies for organic and sustainable labeling requirements." },
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
