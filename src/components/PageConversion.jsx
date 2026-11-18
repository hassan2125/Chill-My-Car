import BookingForm from "@/components/BookingForm";
import { Faq } from "@/components/Sections";
import { PAGE_FAQS } from "@/lib/pageFaqs";

export default function PageConversion({ pageKey, faqItems, faqTitle }) {
  const faq = PAGE_FAQS[pageKey];
  return (
    <>
      <Faq title={faqTitle || faq.title} items={faqItems || faq.items} />
      <BookingForm />
    </>
  );
}
