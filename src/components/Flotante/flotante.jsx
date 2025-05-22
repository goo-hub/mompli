import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Flotante = ({ sections }) => {
  const panelRef = useRef(null);
  const [active, setActive] = useState("INVIMA");
  const [isFixed, setIsFixed] = useState(true);
  const [visible, setVisible] = useState(false);

  const { invimaRef, cannabisRef, otrasRef } = sections;

  // Aparecer / desaparecer suavemente
  useEffect(() => {
    if (panelRef.current) {
      gsap.to(panelRef.current, {
        opacity: visible ? 1 : 0,
        duration: 0.4,
        ease: "power2.out",
      });

      // También podemos alternar visibilidad para accesibilidad
      panelRef.current.style.visibility = visible ? "visible" : "hidden";
    }
  }, [visible]);

  // Control de scroll para fijar posición y visibilidad
  useEffect(() => {
    const handleScroll = () => {
      const midPoint = window.innerHeight / 2;
      const currentY = window.scrollY;

      const otrasBottom =
        otrasRef.current?.offsetTop + otrasRef.current?.offsetHeight;
      const panelHeight = panelRef.current?.offsetHeight || 0;
      const maxScroll = otrasBottom - panelHeight;

      setVisible(currentY >= midPoint && currentY < maxScroll);
      setIsFixed(currentY < maxScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [otrasRef]);

  // Detectar sección activa con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === invimaRef.current) setActive("INVIMA");
            else if (entry.target === cannabisRef.current)
              setActive("CANNABIS");
            else if (entry.target === otrasRef.current) setActive("OTRAS");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    if (invimaRef.current) observer.observe(invimaRef.current);
    if (cannabisRef.current) observer.observe(cannabisRef.current);
    if (otrasRef.current) observer.observe(otrasRef.current);

    return () => observer.disconnect();
  }, [invimaRef, cannabisRef, otrasRef]);

  return (
    <div
      ref={panelRef}
      className={`${
        isFixed
          ? "fixed top-1/2 -translate-y-1/2"
          : "absolute top-auto bottom-0"
      } right-0 w-96 p-8 space-y-8 border bg-light border-r-0 border-primary text-black z-50 opacity-0`}
      style={{ visibility: "hidden" }} // visibilidad se controla con GSAP
    >
      {/* Menú superior */}
      <div className="flex justify-around font-bold mb-6 text-sm">
        <button
          className={
            active === "INVIMA" ? "text-black font-bold" : "text-gray-700"
          }
          onClick={() =>
            invimaRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          INVIMA
        </button>
        <button
          className={
            active === "CANNABIS" ? "text-black font-bold" : "text-gray-700"
          }
          onClick={() =>
            cannabisRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          CANNABIS
        </button>
        <button
          className={
            active === "OTRAS" ? "text-black font-bold" : "text-gray-700"
          }
          onClick={() =>
            otrasRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          OTRAS
        </button>
      </div>

      {/* Botón inferior */}
      <div className="flex justify-center">
        <button className="border border-primary px-6 py-2 uppercase font-bold text-black hover:bg-black hover:text-white transition">
          Inicia tu trámite
        </button>
      </div>
    </div>
  );
};

export default Flotante;
