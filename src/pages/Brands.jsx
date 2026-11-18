import { useTitle } from "@/lib/useTitle";
import { Banner, Cta } from "@/components/PageParts";
import BrandGrid from "@/components/BrandGrid";
import Reveal from "@/components/Reveal";
import PageConversion from "@/components/PageConversion";
import { PAGE_HERO_IMAGES } from "@/lib/data";
export default function Brands() {
  useTitle("Car AC Service by Brand", "Find out whether Cool My Car Dubai can service your car AC. Search our supported makes and send your model details for confirmation.");
  return (<main className="brands-page">
    <Banner crumbs={[["Brands"]]} title="Car AC service by brand" sub="We diagnose and repair car AC systems across a wide range of makes. Search the list and contact us to confirm your model." image={PAGE_HERO_IMAGES.brands} />
    <section><Reveal className="wrap"><BrandGrid /></Reveal></section>
    <PageConversion pageKey="brands" />
    <Cta />
  </main>);
}
