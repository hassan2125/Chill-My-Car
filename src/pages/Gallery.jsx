import { useTitle } from "@/lib/useTitle";
import { Banner, Cta } from "@/components/PageParts";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import PageConversion from "@/components/PageConversion";
export default function Gallery() {
  useTitle("Gallery");
  return (<main>
    <Banner crumbs={[["Gallery"]]} title="Our work" sub="A look at what we do every day: diagnosing, repairing and cleaning car AC systems." />
    <section><Reveal className="wrap"><GalleryGrid /></Reveal></section>
    <PageConversion pageKey="gallery" />
    <Cta />
  </main>);
}
