import { useTitle } from "@/lib/useTitle";
import { Banner } from "@/components/PageParts";
import BookingForm from "@/components/BookingForm";
import { Faq, Steps, Testimonials, USPs } from "@/components/Sections";
import { CONTACT_FAQS } from "@/lib/pageFaqs";

export default function Contact() {
  useTitle("Contact Us");
  return (
    <main>
      <Banner crumbs={[["Contact"]]} title="Let’s get your car cool." sub="Tell us what your car needs and our team will help you with the next step." />
      <BookingForm />
      <USPs />
      <Steps />
      <Testimonials />
      <Faq title={CONTACT_FAQS.title} items={CONTACT_FAQS.items} />
      <section className="contact-map-section"><div className="wrap">
        <span className="pill">Find us</span><h2>Based in Business Bay.</h2>
        <p className="sub">We serve drivers across Dubai. Get directions to Business Bay or check our <a href="https://www.google.com/maps/search/?api=1&query=Business+Bay%2C+Dubai" target="_blank" rel="noreferrer">location on Google Maps</a>.</p>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=Business%20Bay%2C%20Dubai&output=embed"
            title="Map of Business Bay, Dubai"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div></section>
    </main>
  );
}
