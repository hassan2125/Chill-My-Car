import { useEffect, useRef } from "react";
export default function Reveal({ className = "", children, ...p }) {
  const r = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.classList.add("in"); io.disconnect(); } }, { threshold: 0.06 });
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  return <div ref={r} className={`rv ${className}`} {...p}>{children}</div>;
}
