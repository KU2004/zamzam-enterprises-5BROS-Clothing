import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

const faqs = [
  {
    question: "Do you offer custom apparel manufacturing?",
    answer:
      "Yes. We manufacture custom apparel for brands, retailers, and private-label businesses, including design support, sampling, and bulk production.",
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "MOQ varies by product, fabric, and customization level. We are happy to discuss smaller pilot runs and scalable bulk orders.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. We dispatch worldwide and work with reliable logistics partners to ensure secure and timely delivery.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can contact us through the contact page with your product requirements, quantity, and target timeline, and we will respond with a tailored quote.",
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
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Everything you need to know about our manufacturing, ordering, and delivery process.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-luxe max-w-4xl space-y-6">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl text-charcoal">{item.question}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{item.answer}</p>
            </div>
          ))}

          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
            <h2 className="font-display text-xl text-charcoal">Still have questions?</h2>
            <p className="mt-2 text-muted-foreground">
              Reach out to our team and we will help you with product details, pricing, or production timelines.
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
