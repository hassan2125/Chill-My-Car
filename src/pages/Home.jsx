import { useTitle } from "@/lib/useTitle";
import Hero from "@/components/Hero";
import Simulator from "@/components/Simulator";
import PageConversion from "@/components/PageConversion";
import { Marquee, Services, Offer, Steps, Why, Testimonials, Areas } from "@/components/Sections";
export default function Home() {
  useTitle("", "24/7 mobile car AC service in Dubai, with an average technician arrival time of 10–15 minutes. Repair, diagnostics, gas refill, leak repair and AC cleaning.");
  return (<main><Hero /><Marquee /><Services /><Offer /><Simulator /><Steps /><Why /><Testimonials /><Areas /><PageConversion pageKey="home" /></main>);
}
