import { Link } from "react-router-dom";
import { useTitle } from "@/lib/useTitle";
import { Banner } from "@/components/PageParts";
export default function NotFound() {
  useTitle("Page not found", "This page could not be found. Explore car AC repair, diagnostics, refrigerant service and cleaning from Cool My Car Dubai.");
  return (<main><Banner title="Page not found" sub="That page doesn’t exist, but your cold air still does."><Link to="/" className="btn p">Back home</Link></Banner><div style={{ height: 80 }} /></main>);
}
