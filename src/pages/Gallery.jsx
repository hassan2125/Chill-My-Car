import { useTitle } from "@/lib/useTitle";
import { Banner, Cta } from "@/components/PageParts";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import PageConversion from "@/components/PageConversion";
import { PAGE_HERO_IMAGES } from "@/lib/data";
export default function Gallery() {
  useTitle("Gallery");
  return (<main className="gallery-page">
    <Banner crumbs={[["Gallery"]]} title="Our work" sub="A look at what we do every day: diagnosing, repairing and cleaning car AC systems." image={PAGE_HERO_IMAGES.gallery} />
    <section><Reveal className="wrap"><GalleryGrid /></Reveal></section>
    <PageConversion pageKey="gallery" />
    <Cta />
  </main>);
}
