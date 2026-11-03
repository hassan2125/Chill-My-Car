import { ICONS } from "@/lib/icons";
export default function Icon({ n, className = "i" }) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICONS[n] }} />;
}
