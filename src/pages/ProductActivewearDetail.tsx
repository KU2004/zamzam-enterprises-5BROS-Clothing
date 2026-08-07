import { Navigate, useParams } from "react-router-dom";
import ProductDetailPage from "../components/ProductDetailPage";

import sports1Bg from "../assets/sports1.jpeg";
import sports1p2 from "../assets/sports1p2.png";
import sports2Bg from "../assets/sports2.jpeg";
import sports2p2 from "../assets/sports2p2.png";
import sports3Bg from "../assets/sports3.jpeg";
import sports3p2 from "../assets/sports3p2.png";
import sports4Bg from "../assets/sports4.jpeg";
import sports4p2 from "../assets/sports4p2.png";
import sports5Bg from "../assets/sports5.jpeg";
import sports5p2 from "../assets/sports5p2.png";
import sports6Bg from "../assets/sports6.jpeg";
import sports6p2 from "../assets/sports6p2.png";
import sports7Bg from "../assets/sports7-bg.png";
import sports7p2 from "../assets/sports7p2.png";

const productVariants = [
  {
    id: 1,
    title: "Performance Mesh Tank",
    subtitle: "Lightweight and breathable mesh fabric designed for high-intensity training and sports activities.",
    image: sports1Bg,
    imageP2: sports1p2,
    technicalHighlights: [
      { title: "Fabric options", value: "Moisture-wicking polyester and performance blends" },
      { title: "Fit range", value: "Slim and athletic silhouettes" },
      { title: "Customization", value: "Screen print, heat transfer, and embroidery" },
      { title: "MOQ", value: "Flexible production runs for team orders" },
    ],
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
    bgImage: sports2Bg,
    technicalHighlights: [
      { title: "Fabric", value: "Stretch performance blends with compression properties" },
      { title: "Fit range", value: "Body-contoured profiles" },
      { title: "Customization", value: "Sublimation print and contrast trim" },
      { title: "MOQ", value: "Flexible sampling and scalable production" },
    ],
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
    id: 3,
    title: "Moisture-Wicking Shirt",
    subtitle: "Advanced fabric technology that pulls sweat away to keep athletes dry and comfortable.",
    image: sports3Bg,
    imageP2: sports3p2,
    bgImage: sports3Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Performance polyester with advanced moisture management" },
      { title: "Fit range", value: "Comfort-focused and athletic silhouettes" },
      { title: "Customization", value: "Heat transfer, screen print, and woven labels" },
      { title: "MOQ", value: "Flexible runs for team collections" },
    ],
    benefits: [
      "Keeps athletes dry during extended activity",
      "Maintains performance without sacrificing comfort",
      "Ideal for training programs and event teams",
      "Supports bulk supply with dependable lead times",
    ],
    detailCards: [
      { title: "Advanced fibers", body: "Specially engineered to transport moisture away from skin, keeping athletes comfortable." },
      { title: "Color range", body: "Available in a broad palette for teams and branded merchandise." },
      { title: "Scalable production", body: "Suitable for both pilot programs and larger repeat orders." },
    ],
  },
  {
    id: 4,
    title: "Lightweight Training Top",
    subtitle: "Minimal design for maximum mobility and a clean athletic aesthetic.",
    image: sports4Bg,
    imageP2: sports4p2,
    bgImage: sports4Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Ultra-light nylon and performance blends" },
      { title: "Fit range", value: "Tailored and refined athletic profiles" },
      { title: "Customization", body: "Embroidery, contrast binding, and premium labels" },
      { title: "MOQ", value: "Flexible production for active apparel programs" },
    ],
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
  {
    id: 5,
    title: "Relaxed Fit Sports Top",
    subtitle: "Comfortable loose fit for training, conditioning, and casual athletic wear.",
    image: sports5Bg,
    imageP2: sports5p2,
    bgImage: sports5Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Soft cotton-poly blends with breathable construction" },
      { title: "Fit range", value: "Relaxed and easy-fit silhouettes" },
      { title: "Customization", value: "Screen print, patches, and label applications" },
      { title: "MOQ", value: "Ideal for launch collections and promotions" },
    ],
    benefits: [
      "Great for casual athletic wear",
      "Comfortable feel with modern presentation",
      "Supports team and brand identity",
      "Fast development for new product lines",
    ],
    detailCards: [
      { title: "Comfortable design", body: "A relaxed drape that feels versatile and allows full range of motion." },
      { title: "Creative branding", body: "Custom graphics and logo placement help your collection stand out." },
      { title: "Launch support", body: "We support short lead times for initial sampling and launch orders." },
    ],
  },
  {
    id: 6,
    title: "Professional Team Wear",
    subtitle: "Durable and reliable for team uniforms, training camps, and sports organizations.",
    image: sports6Bg,
    imageP2: sports6p2,
    bgImage: sports6Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Durable performance fabrics with extended durability" },
      { title: "Fit range", value: "Practical and comfortable athletic profiles" },
      { title: "Customization", value: "Chest branding, team numbers, and workwear labels" },
      { title: "MOQ", value: "Built for dependable repeat orders" },
    ],
    benefits: [
      "Reliable for team uniforms and sports programs",
      "Strong wear performance through repeated use",
      "Easy to brand and maintain across teams",
      "Supports operational consistency at scale",
    ],
    detailCards: [
      { title: "Team-ready durability", body: "Designed to handle regular athletic wear while maintaining professional appearance." },
      { title: "Team identification", body: "Add logos, names, and team details for cohesive presentation." },
      { title: "Operational support", body: "We help coordinate multi-size runs and consolidated shipments." },
    ],
  },
  {
    id: 7,
    title: "Premium Performance Jersey",
    subtitle: "High-end athletic wear for serious athletes and professional teams.",
    image: sports7Bg,
    imageP2: sports7p2,
    bgImage: sports7Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Premium performance knits and specialized blends" },
      { title: "Fit range", value: "Athletic and tailored options" },
      { title: "Customization", value: "Embroidery, woven labels, and sublimation printing" },
      { title: "MOQ", value: "Flexible for launches and seasonal collections" },
    ],
    benefits: [
      "Premium look and feel for professional programs",
      "Advanced fabric technology for peak performance",
      "Strong brand presentation with premium detailing",
      "Reliable for repeat orders and updates",
    ],
    detailCards: [
      { title: "Premium construction", body: "A polished, premium material and construction suitable for professional athletic programs." },
      { title: "Brand consistency", body: "Supports custom logos and refined finishing for premium presentation." },
      { title: "Production support", body: "We help coordinate sampling, bulk production, and shipment planning." },
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
