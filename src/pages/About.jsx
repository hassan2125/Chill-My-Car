import { useTitle } from "@/lib/useTitle";
import { Banner, Cards, Cta } from "@/components/PageParts";
import Reveal from "@/components/Reveal";
import PageConversion from "@/components/PageConversion";
import { Areas, USPs } from "@/components/Sections";
import { SERVICE_IMAGES } from "@/lib/data";
export default function About() {
  useTitle("About Us");
  return (<main>
    <Banner crumbs={[["About"]]} title="About Chill My Car" sub="Dubai’s car AC specialists. We keep your cabin cold, from Business Bay to the Marina." />
    <section className="about-story-section"><Reveal className="wrap about-story">
      <div className="about-story-copy"><span className="pill">Our story</span><h2>Built for Dubai’s heat.</h2>
        <p className="sub">A strong car AC isn’t a luxury here. It’s essential. Chill My Car was set up to make car AC repair simple: honest diagnosis, genuine parts and service that comes to you.</p>
        <p className="sub">Based in Business Bay, our team works across Dubai’s main communities, and bookings are available 24/7.</p></div>
      <figure className="about-story-image"><img src={SERVICE_IMAGES["ac-repair"]} alt="Technician inspecting a car in an automotive workshop" loading="lazy" /></figure>
    </Reveal></section>
    <USPs />
    <section style={{ background: "#fff" }}><Reveal className="wrap"><span className="pill">What we stand for</span><h2>Our values.</h2>
      <Cards items={[{ i: "award", t: "Quality assurance", p: "Every repair is tested for real cooling performance." }, { i: "clock", t: "On-time service", p: "We respect your schedule and show up when promised." }, { i: "cog", t: "Genuine parts", p: "Quality components matched to your make and model." }, { i: "shield", t: "Repair warranty", p: "Work that’s backed, so you drive with confidence." }, { i: "heart", t: "Honest advice", p: "We tell you what needs fixing, and what doesn’t." }, { i: "truck", t: "Convenience", p: "Service at your door, booked in minutes." }]} /></Reveal></section>
    <Areas title="Where we work." />
    <PageConversion pageKey="about" />
    <Cta />
  </main>);
}
