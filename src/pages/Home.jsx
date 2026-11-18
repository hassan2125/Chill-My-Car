import { useTitle } from "@/lib/useTitle";
import Hero from "@/components/Hero";
import Simulator from "@/components/Simulator";
import PageConversion from "@/components/PageConversion";
import { Marquee, Services, Offer, Steps, Why, Areas } from "@/components/Sections";
export default function Home() {
  useTitle("", "Car AC repair in Dubai, including diagnostics, refrigerant regas, leak repair and AC cleaning. Get a clear estimate from Cool My Car Dubai.");
  return (<main><Hero /><Marquee /><Services /><Offer /><Simulator /><Steps /><Why /><Areas /><PageConversion pageKey="home" /></main>);
}
