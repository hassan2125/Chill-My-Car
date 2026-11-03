import { useTitle } from "@/lib/useTitle";
import { Banner, Cta } from "@/components/PageParts";
import BrandGrid from "@/components/BrandGrid";
import Reveal from "@/components/Reveal";
import PageConversion from "@/components/PageConversion";
export default function Brands() {
  useTitle("Brands We Service");
  return (<main>
    <Banner crumbs={[["Brands"]]} title="Brands we service" sub="From everyday cars to supercars, we repair car AC for all the makes you see on Dubai’s roads." />
    <section><Reveal className="wrap"><BrandGrid /></Reveal></section>
    <PageConversion pageKey="brands" />
    <Cta />
  </main>);
}
