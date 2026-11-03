import { Link } from "react-router-dom";
import { Banner } from "@/components/PageParts";
export default function NotFound() {
  return (<main><Banner title="Page not found" sub="That page doesn’t exist, but your cold air still does."><Link to="/" className="btn p">Back home</Link></Banner><div style={{ height: 80 }} /></main>);
}
