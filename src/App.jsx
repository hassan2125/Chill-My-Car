import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Icon from "@/components/Icon";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Service from "@/pages/Service";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Brands from "@/pages/Brands";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) { const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 60); return () => clearTimeout(t); }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);
  return null;
}
function Layout() {
  return (<>
    <ScrollManager /><Nav /><Outlet /><Footer />
    <a className="whatsapp-float" href="https://wa.me/971500000000" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
      <span className="whatsapp-float-icon"><Icon n="whatsapp" /></span>
      <span>WhatsApp</span>
    </a>
  </>);
}
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<Service />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="brands" element={<Brands />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
