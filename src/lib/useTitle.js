import { useEffect } from "react";
const BASE = "Chill My Car";
export function useTitle(t) {
  useEffect(() => { document.title = t ? `${t} | ${BASE}` : `${BASE} | Car AC Repair & Service in Dubai`; }, [t]);
}
