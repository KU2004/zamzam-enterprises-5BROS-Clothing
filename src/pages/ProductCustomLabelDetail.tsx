import { Navigate, useParams } from "react-router-dom";
import ProductDetailPage from "../components/ProductDetailPage";

import custom1 from "../assets/custom1.jpeg";
import custom1p2 from "../assets/custom1p2.png";
import custom2Bg from "../assets/custom2-bg.png";
import custom2p2 from "../assets/custom2p2.png";
import custom3Bg from "../assets/custom3-bg.png";
import custom3p2 from "../assets/custom3p2.png";
import custom4Bg from "../assets/custom4-bg.png";
import custom4p2 from "../assets/custom4p2.png";
import custom5Bg from "../assets/custom5-bg.png";
import custom5p2 from "../assets/custom5p2.png";
import custom6Bg from "../assets/custom6-bg.png";
import custom6p2 from "../assets/custom6p2.png";
import custom7Bg from "../assets/custom7-bg.png";
import custom7p2 from "../assets/custom7p2.png";
import custom8Bg from "../assets/custom8-bg.png";
import custom8p2 from "../assets/custom8p2.png";
import custom9Bg from "../assets/custom9-bg.png";
import custom9p2 from "../assets/custom9p2.png";

const productVariants = [
  {
    id: 1,
    title: "Classic Custom Tee",
    subtitle: "Premium base for private label collections with excellent print and embroidery compatibility.",
    image: custom1,
    imageP2: custom1p2,
    bgImage: custom4Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Balanced quality at retail-competitive price points" },
      { title: "Fit range", value: "Popular sizes and silhouettes for mass appeal" },
      { title: "Customization", value: "Full custom labeling and retail packaging" },
      { title: "MOQ", value: "Ideal for retail pilot and rollout programs" },
    ],
    benefits: [
      "Ideal for retail brands and private label programs",
      "Premium quality blank for custom finishing",
      "Excellent compatibility with all printing methods",
      "Fast sampling and flexible production runs",
    ],
    detailCards: [
      { title: "Premium blank quality", body: "High-quality construction designed as a perfect foundation for your custom branding and labeling." },
      { title: "Label flexibility", body: "Designed to accommodate your custom woven labels, neck tags, and care instructions." },
      { title: "Production support", body: "We handle sampling, labeling, and packaging coordination for your brand launch." },
    ],
  },
  {
    id: 2,
    title: "OEM Fashion Basics",
    subtitle: "Versatile blanks for fashion retailers looking to build their own private label collections.",
    image: custom2Bg,
    imageP2: custom2p2,
    bgImage: custom5Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Premium cotton and performance blends" },
      { title: "Fit range", value: "Multiple size and fit options" },
      { title: "Customization", value: "Full custom labeling and packaging support" },
      { title: "MOQ", value: "Flexible for retail collections" },
    ],
    benefits: [
      "Perfect for fashion brands building their lineup",
      "Clean, minimal design for flexible customization",
      "Supports seasonal collections and updates",
      "Reliable quality across repeat orders",
    ],
    detailCards: [
      { title: "Retail-ready blanks", body: "Crafted to OEM specifications for direct integration into your brand's product line." },
      { title: "Custom packaging", body: "Support for branded hangtags, poly bags, and professional presentation." },
      { title: "Bulk coordination", body: "We coordinate multi-SKU production and shipment for your retail launch." },
    ],
  },
  {
    id: 3,
    title: "Luxury Label Blank",
    subtitle: "Ultra-premium blanks for luxury and high-end private label fashion collections.",
    image: custom3Bg,
    imageP2: custom3p2,
    bgImage: custom3Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Premium cotton blends with enhanced softness" },
      { title: "Fit range", value: "Contemporary and tailored options" },
      { title: "Customization", value: "Embroidery, woven labels, and custom tags" },
      { title: "MOQ", value: "Flexible for brand development" },
    ],
    benefits: [
      "Exceptional quality for premium brands",
      "Soft, comfortable base for retail success",
      "Supports private label premium positioning",
      "Consistent quality for brand trust",
    ],
    detailCards: [
      { title: "Premium construction", body: "Enhanced fiber quality and finishing to support premium brand positioning and pricing." },
      { title: "Customization depth", body: "Full support for custom labeling, embroidery, and branded packaging." },
      { title: "Brand consistency", body: "Reliable production ensures consistent quality across seasonal collections." },
    ],
  },
  {
    id: 4,
    title: "Retail Launch Apparel",
    subtitle: "Tailored for retailers wanting to introduce their own branded apparel lines to customers.",
    image: custom4Bg,
    imageP2: custom4p2,
    bgImage: custom6Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Balanced quality at retail-competitive price points" },
      { title: "Fit range", value: "Popular sizes and silhouettes for mass appeal" },
      { title: "Customization", value: "Full custom labeling and retail packaging" },
      { title: "MOQ", value: "Ideal for retail pilot and rollout programs" },
    ],
    benefits: [
      "Perfect entry point for retail brands",
      "Competitive pricing for retail margins",
      "Support for branded packaging and presentation",
      "Fast development for retail launches",
    ],
    detailCards: [
      { title: "Retail optimized", body: "Design and quality choices made with retail success and consumer appeal in mind." },
      { title: "Launch readiness", body: "Complete support from sampling through retail packaging and point-of-sale materials." },
      { title: "Scalable production", body: "Sized for pilot programs and ready to scale for successful retail expansion." },
    ],
  },
  {
    id: 5,
    title: "Fashion Forward Label",
    subtitle: "Contemporary blanks for style-focused private label and fashion retail brands.",
    image: custom7Bg,
    imageP2: custom7p2,
    bgImage: custom7Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Organic and recycled content materials" },
      { title: "Fit range", value: "Classic and contemporary profiles" },
      { title: "Customization", value: "Eco-friendly labels and sustainable packaging" },
      { title: "MOQ", value: "Flexible for sustainable brand launches" },
    ],
    benefits: [
      "Ideal for eco-conscious brands",
      "Supports sustainability messaging",
      "Premium appeal for conscious consumers",
      "Aligns with modern brand values",
    ],
    detailCards: [
      { title: "Sustainable materials", body: "Organic and recycled fiber options that support your brand's environmental commitments." },
      { title: "Eco-packaging", body: "Support for sustainable labeling and packaging aligned with your brand values." },
      { title: "Certification support", body: "Coordination with certification bodies for organic and eco-labeling requirements." },
    ],
  },
  {
    id: 6,
    title: "Luxury Label Blank",
    subtitle: "Ultra-premium blanks for luxury and high-end private label fashion collections.",
    image: custom9Bg,
    imageP2: custom9p2,
    bgImage: custom9Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Heavy-weight cotton and durable blends" },
      { title: "Fit range", value: "Practical and professional profiles" },
      { title: "Customization", value: "Corporate logos, department tags, and professional labels" },
      { title: "MOQ", value: "Built for corporate programs" },
    ],
    benefits: [
      "Ideal for corporate uniform brands",
      "Exceptional durability for workwear",
      "Professional presentation across teams",
      "Consistent quality at scale",
    ],
    detailCards: [
      { title: "Workwear durability", body: "Heavy-weight construction designed for professional environments and repeated laundering." },
      { title: "Corporate branding", body: "Support for large-scale corporate logos and professional labeling." },
      { title: "Bulk coordination", body: "Expertise in multi-site corporate rollouts and consistent sizing." },
    ],
  },
  {
    id: 7,
    title: "Sustainable Label Collection",
    subtitle: "Eco-conscious private label options for brands focused on sustainable fashion.",
    image: custom5Bg,
    imageP2: custom5p2,
    bgImage: custom7Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Modern blends with contemporary drape" },
      { title: "Fit range", value: "Trendy and fashion-forward silhouettes" },
      { title: "Customization", value: "Custom printing, patches, and brand details" },
      { title: "MOQ", value: "Flexible for seasonal fashion launches" },
    ],
    benefits: [
      "Perfect for trend-focused brands",
      "Contemporary aesthetic for modern retail",
      "Supports seasonal collection releases",
      "Fast development for fashion trends",
    ],
    detailCards: [
      { title: "Fashion-forward design", body: "Contemporary fit and fabric choices that support current fashion trends and consumer preferences." },
      { title: "Creative branding", body: "Full support for custom graphics, placement, and branded finishing touches." },
      { title: "Seasonal agility", body: "Short lead times and responsive production for seasonal fashion updates." },
    ],
  },
  {
    id: 8,
    title: "Professional Grade Blank",
    subtitle: "Durable workwear blanks perfect for corporate and professional private label programs.",
    image: custom6Bg,
    imageP2: custom6p2,
    bgImage: custom8Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Moisture-wicking and performance blends" },
      { title: "Fit range", value: "Athletic and performance-oriented profiles" },
      { title: "Customization", value: "Technical printing and performance labeling" },
      { title: "MOQ", value: "Flexible for athletic brand launches" },
    ],
    benefits: [
      "Ideal for fitness and athletic brands",
      "Technical performance capabilities",
      "Support for active lifestyle positioning",
      "Premium appeal for athletes",
    ],
    detailCards: [
      { title: "Performance engineered", body: "Technical fabric and construction designed for athletic performance and active lifestyles." },
      { title: "Active branding", body: "Support for technical graphics and performance labeling suited to athletic brands." },
      { title: "Quality assurance", body: "Rigorous testing ensures performance promises are met through production." },
    ],
  },
  {
    id: 9,
    title: "Premium Performance Blank",
    subtitle: "Technical blanks for active lifestyle and performance-focused private label brands.",
    image: custom8Bg,
    imageP2: custom8p2,
    bgImage: custom9Bg,
    technicalHighlights: [
      { title: "Fabric options", value: "Luxury fibers and premium constructions" },
      { title: "Fit range", value: "Refined and tailored luxury profiles" },
      { title: "Customization", value: "Luxury labeling, embroidery, and premium packaging" },
      { title: "MOQ", value: "Flexible for luxury brand development" },
    ],
    benefits: [
      "Supports ultra-premium positioning",
      "Exceptional quality and softness",
      "Luxury aesthetic for high-end retail",
      "Premium consumer appeal",
    ],
    detailCards: [
      { title: "Luxury quality", body: "Premium fiber selection and meticulous construction for ultra-luxury brand positioning." },
      { title: "Luxury finishing", body: "Support for premium labeling, luxury packaging, and exclusive presentation." },
      { title: "Boutique production", body: "Small-batch, high-attention production suited to luxury brand requirements." },
    ],
  },
];

export default function ProductCustomLabelDetail() {
  const { photoId } = useParams();
  const normalizedId = Number(photoId);
  const product = productVariants.find((item) => item.id === normalizedId);

  if (!product) {
    return <Navigate to="/products/custom-label" replace />;
  }

  const relatedProducts = productVariants.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <ProductDetailPage
      product={product}
      relatedProducts={relatedProducts}
      seoTitle={`${product.title} | Technical Details & Quote`}
      seoDescription={`${product.subtitle} Explore the product details, customization options, and request a quote for this custom label option.`}
      canonicalPath={`/products/custom-label/details/${product.id}`}
      seoKeywords={`${product.title.toLowerCase()}, private label manufacturing, OEM apparel, custom label specifications`}
      collectionPath="/products/custom-label"
      collectionLabel="custom-label"
      relatedHeading="Explore more custom label options"
      relatedLinkText="View full collection"
    />
  );
}
