import { Navigate, useParams } from "react-router-dom";
import ProductDetailPage from "../components/ProductDetailPage";

import roundneck2 from "../assets/roundneck2.jpeg";
import roundneck3 from "../assets/roundneck3.jpeg";
import roundneck4 from "../assets/roundneck4.jpeg";
import roundneck5 from "../assets/roundneck5.jpeg";
import roundneck7 from "../assets/roundneck7.jpeg";

const productVariants = [
  {
    id: 1,
    title: "Luxe Core Round Neck",
    subtitle: "Luxury-quality round neck designed for premium branded collections and refined silhouettes.",
    image: roundneck4,
    technicalHighlights: [
      { title: "Fabric", value: "100% Cotton" },
      { title: "GSM", value: "170-180" },
      { title: "Colour", value: "As per Request" },
      { title: "Sizes", value: "As per Request" },
      { title: "MOQ", value: "1000 pieces each colour" },
    ],
    benefits: [
      "Premium positioning for luxury brands",
      "Exceptional quality and softness",
      "Supports luxury brand identity and image",
      "Consistent premium quality for repeat orders",
    ],
    detailCards: [
      { title: "Luxury quality", body: "Premium fiber selection with meticulous construction for ultra-luxury brand positioning." },
      { title: "Brand alignment", body: "Available in custom colors and luxury branding treatments for brand consistency." },
      { title: "Quality assurance", body: "Our team reviews each production milestone for superior luxury finishing." },
    ],
  },
  {
    id: 2,
    title: "Everyday Essential Round Neck",
    subtitle: "Soft, easy-wear round neck built for daily comfort and broad appeal across retail lines.",
    image: roundneck5,
    technicalHighlights: [
      { title: "Fabric", value: "100% Cotton" },
      { title: "GSM", value: "170-180" },
      { title: "Colour", value: "As per Request" },
      { title: "Sizes", value: "As per Request" },
      { title: "MOQ", value: "1000 pieces each colour" },
    ],
    benefits: [
      "Perfect for casual retail and distribution",
      "Comfortable everyday wear quality",
      "Excellent for promotional merchandise",
      "Fast production with cost-effective pricing",
    ],
    detailCards: [
      { title: "Comfort engineered", body: "Designed for everyday comfort and durability with reliable quality across production runs." },
      { title: "Retail ready", body: "Optimized for retail sales with strong appeal to value-conscious consumers." },
      { title: "Volume capable", body: "Structured for efficient large-scale production and distribution." },
    ],
  },
  {
    id: 3,
    title: "Heritage Textured Round Neck",
    subtitle: "Vintage-inspired round neck with rich texture and premium details for lifestyle collections.",
    image: roundneck2,
    technicalHighlights: [
      { title: "Fabric", value: "Polyester Lycra" },
      { title: "GSM", value: "200-220" },
      { title: "Colour", value: "As per Request" },
      { title: "Sizes", value: "As per Request" },
      { title: "MOQ", value: "200 pieces each colour" },
    ],
    benefits: [
      "Perfect for vintage and heritage brands",
      "Quality construction with retro aesthetics",
      "Supports vintage branding and messaging",
      "Reliable quality for specialty collections",
    ],
    detailCards: [
      { title: "Vintage craftsmanship", body: "Quality construction with vintage-inspired finishes for authentic heritage presentation." },
      { title: "Heritage branding", body: "Support for vintage graphics, distressing, and heritage labeling." },
      { title: "Specialty production", body: "Expert coordination of specialty finishes and vintage-correct production techniques." },
    ],
  },
  {
    id: 4,
    title: "Sculpted Slim Round Neck",
    subtitle: "Contemporary slim-fit round neck crafted for sleek silhouettes and modern fashion brands.",
    image: roundneck3,
    technicalHighlights: [
      { title: "Fabric", value: "Imported Scuba Sued" },
      { title: "GSM", value: "250" },
      { title: "Colour", value: "As per Request" },
      { title: "Sizes", value: "As per Request" },
      { title: "MOQ", value: "200 pieces each colour" },
    ],
    benefits: [
      "Perfect for contemporary fashion collections",
      "Clean contemporary lines and refined presentation",
      "Great for premium retail and boutique brands",
      "Reliable repeat orders with consistent finishing",
    ],
    detailCards: [
      { title: "Contemporary fit", body: "Modern slim construction with quality finishing for fashion-forward brand positioning." },
      { title: "Branding details", body: "Add custom logos, graphic placement, or premium embroidery for elevated branding." },
      { title: "Delivery support", body: "We coordinate sampling, bulk production, and export-ready packaging for your collections." },
    ],
  },
  {
    id: 5,
    title: "Performance Round Neck",
    subtitle: "Premium polyester jacquard round neck engineered for active lifestyle and fashion collections.",
    image: roundneck7,
    technicalHighlights: [
      { title: "Fabric", value: "Polyester Jacq." },
      { title: "GSM", value: "220-230" },
      { title: "Colour", value: "As per Request" },
      { title: "Sizes", value: "As per Request" },
      { title: "MOQ", value: "200 pieces each colour" },
    ],
    benefits: [
      "Comfortable for active lifestyle wear",
      "Maintains finish during repeated use",
      "Ideal for sports brands and wellness programs",
      "Supports bulk supply with reliable lead times",
    ],
    detailCards: [
      { title: "Technical performance", body: "Performance fabrics designed for comfort and breathability with classic round neck styling." },
      { title: "Lifestyle appeal", body: "Available in trending colors for lifestyle and wellness brand collections." },
      { title: "Scalable production", body: "Suitable for both pilot programs and larger seasonal collection orders." },
    ],
  },
];

export default function ProductRoundNeckDetail() {
  const { photoId } = useParams();
  const normalizedId = Number(photoId);
  const product = productVariants.find((item) => item.id === normalizedId);

  if (!product) {
    return <Navigate to="/products/round-neck" replace />;
  }

  const relatedProducts = productVariants.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <ProductDetailPage
      product={product}
      relatedProducts={relatedProducts}
      seoTitle={`${product.title} | Technical Details & Quote`}
      seoDescription={`${product.subtitle} Explore the product details, customization options, and request a quote for this round neck style.`}
      canonicalPath={`/products/round-neck/details/${product.id}`}
      seoKeywords={`${product.title.toLowerCase()}, round neck t-shirt manufacturing, custom tee manufacturing, request quote round neck`}
      collectionPath="/products/round-neck"
      collectionLabel="round-neck"
      relatedHeading="Explore more round neck options"
      relatedLinkText="View full collection"
    />
  );
}

