import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

const faqs = [
  {
    question: "What is 5BROS?",
    answer:
      "5BROS is a Premium men's T-shirt brand, offering stylish, comfortable, and durable apparel for everyday wear.",
  },
  {
    question: "Who manufactures 5BROS T-shirts?",
    answer:
      "All 5BROS products are designed and manufactured by Simnani Enterprises, a Mumbai-based T-shirt manufacturer with a production capacity of over 50,000 T-shirts per month.",
  },
  {
    question: "What products are available under the 5BROS brand?",
    answer:
      "We manufacture Round Neck T-shirts, Polo T-shirts, Oversized T-shirts, Full Sleeve T-shirts, Activewear T-shirts, Hoodies and customized promotional T-shirts.",
  },
  {
    question: "What fabric do you use?",
    answer:
      "We use premium-quality cotton, cotton-blend, polyester and synthetic fabrics that provide excellent comfort, durability, and color retention.",
  },
  {
    question: "Are your T-shirts suitable for everyday use?",
    answer:
      "Yes. Our T-shirts are designed for daily wear, office, casual outings, travel, events, and promotional purposes.",
  },
  {
    question: "Do you offer custom T-shirt manufacturing?",
    answer:
      "Yes. We provide customized T-shirts with your company logo, event branding, promotional prints, and corporate designs.",
  },
  {
    question: "What sizes are available?",
    answer:
      "We offer sizes ranging from S to XXL. Additional sizes can be manufactured for bulk orders.",
  },
  {
    question: "Do you accept bulk orders?",
    answer:
      "Yes. We specialize in bulk manufacturing for wholesalers, retailers, corporate companies, institutions, schools, NGOs, and events.",
  },
  {
    question: "Can I become a distributor or dealer?",
    answer:
      "Yes. We welcome distributors, wholesalers, and business partners across India and international markets.",
  },
  {
    question: "Do you export your products?",
    answer:
      "Yes. ZamZam Enterprises is expanding into international markets, including Africa, and welcomes export inquiries.",
  },
  {
    question: "What makes 5BROS different?",
    answer:
      "Our focus is on quality, excellent stitching, modern designs, competitive pricing, and reliable bulk manufacturing.",
  },
  {
    question: "Can I order T-shirts with my own design?",
    answer:
      "Yes. We manufacture T-shirts according to your artwork, logo, color, and branding requirements.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply contact our sales team with your quantity, design, fabric, and size requirements. We'll provide a quotation and production timeline.",
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:"The MOQ depends on the product and customization requirements, but generally minimum is 300 pieces in 3 colors. Please contact us for specific details regarding your order."  },
  {
    question: "How can I contact 5BROS?",
    answer:
      "You can reach us through our official Website, Phone number, Email, WhatsApp or social media channels for product inquiries and bulk orders.",
  },
  {
    question: "Do you provide samples before bulk production?",
    answer:"Yes, Our Local Sales representatives from your region or country will reach out to discuss your customization requirements and arrange the samples display upon request so you can verify the fabric, stitching, fit, and print quality before confirming a bulk order.",
  },
  {
    question: "How long does production take?",
    answer:
      "Following the Approval and Processing of the sample, full-scale production will commence immediately. A total volume of order will be ready for dispatch within 25 days. To ensure full transparency, we will provide you with regular, real-time production tracking updates at every stage of the process.",
  },
  {
    question: "Why choose 5BROS?",
    answer:
      "Because we combine quality fabrics, modern designs, dependable manufacturing, competitive pricing, and on-time delivery to help businesses and customers get the best value.",
  },
];

export default function Faqs() {
  return (
    <>
      <Seo title="Apparel Manufacturing FAQs | MOQ, Lead Time, Fabrics" description="Explore common questions about apparel manufacturing, MOQs, lead times, fabrics, printing, packaging, and international shipping." canonicalPath="/faqs" keywords="clothing manufacturer faq, apparel manufacturing faq, moq clothing manufacturer, lead time clothing manufacturer" />
      <section className="pt-40 pb-20 bg-muted/30 border-b border-border">
        <div className="container-luxe">
          <p className="text-sm md:text-base uppercase tracking-[0.32em] text-gold flex items-center gap-3">
            <span className="gold-line" /> FAQs
          </p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl max-w-3xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 max-w-2xl text-black">
            Everything you need to know about our manufacturing, ordering, and delivery process.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-luxe max-w-4xl space-y-6">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl text-charcoal">{item.question}</h2>
              <p className="mt-3 text-black leading-relaxed">{item.answer}</p>
            </div>
          ))}

          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
            <h2 className="font-display text-xl text-charcoal">Still have questions?</h2>
            <p className="mt-2 text-black">
              Reach out to our Sales team and we will help you with product details, pricing, or production timelines.
            </p>
            <Link to="/contact" className="mt-4 inline-flex rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gold hover:text-charcoal">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
