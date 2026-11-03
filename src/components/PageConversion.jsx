import BookingForm from "@/components/BookingForm";
import { Faq, Testimonials } from "@/components/Sections";
import { PAGE_FAQS } from "@/lib/pageFaqs";

export default function PageConversion({ pageKey, faqItems, faqTitle }) {
  const faq = PAGE_FAQS[pageKey];
  return (
    <>
      <Testimonials />
      <Faq title={faqTitle || faq.title} items={faqItems || faq.items} />
      <BookingForm />
    </>
  );
}
