import { useState, useRef, useCallback, forwardRef } from "react";
import Modal from "react-modal";

import cannabis1 from "../../img/cannabis/reg-cultivares.png";
import cannabis2 from "../../img/cannabis/reg-cultivo-semillas.png";
import cannabis3 from "../../img/cannabis/solicitud-cupo-plantas.png";

import DisenoProductos from "./disenoProductos";
import TramitesInvima from "./tramitesInvima";

Modal.setAppElement("#root");

const tabsData = {
  "Ministerio de Justicia": [
    {
      title: "Registro de cultivares de cannabis ante el ICA",
      image: cannabis1,
      description: "Brindamos asesoría técnica para registrar alimentos bajo normatividad vigente.",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Evaluar requisitos", "Revisión documental"] },
        { title: "FASE 2: DISEÑO", points: ["Plan de acción", "Estrategia regulatoria"] },
        { title: "FASE 3: IMPLEMENTACIÓN", points: ["Soporte técnico", "Radicación ante INVIMA"] },
      ],
    },
    {
      title: "Registro de cultivo y semillas de cannabis ante el ministerio de justicia",
      image: cannabis2,
      description: "Brindamos asesoría técnica para registrar alimentos bajo normatividad vigente.",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Evaluar requisitos", "Revisión documental"] },
        { title: "FASE 2: DISEÑO", points: ["Plan de acción", "Estrategia regulatoria"] },
        { title: "FASE 3: IMPLEMENTACIÓN", points: ["Soporte técnico", "Radicación ante INVIMA"] },
      ],
    },
    {
      title: "Solicitud de cupo de plantas psicoactivas ante el ministerio de justicia",
      image: cannabis3,
      description: "Brindamos asesoría técnica para registrar alimentos bajo normatividad vigente.",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Evaluar requisitos", "Revisión documental"] },
        { title: "FASE 2: DISEÑO", points: ["Plan de acción", "Estrategia regulatoria"] },
        { title: "FASE 3: IMPLEMENTACIÓN", points: ["Soporte técnico", "Radicación ante INVIMA"] },
      ],
    },
  ],
};

// ─── Carousel reutilizable ─────────────────────────────────────────────────────
const MobileCarousel = ({ items, onCardClick }) => {
  const trackRef = useRef(null);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);

  const onPointerDown = useCallback((e) => {
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    startScrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
    trackRef.current.setPointerCapture?.(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!isDragging.current) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const delta = startX.current - x;
    if (Math.abs(delta) > 4) hasDragged.current = true;
    trackRef.current.scrollLeft = startScrollLeft.current + delta;
  }, []);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }, []);

  return (
    <div
      ref={trackRef}
      className="flex gap-3 overflow-x-auto pb-3 cursor-grab select-none"
      style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          onClick={() => { if (!hasDragged.current) onCardClick(item); }}
          className="flex-shrink-0 w-[72vw] max-w-[260px] border cursor-pointer"
          style={{ scrollSnapAlign: "start" }}
        >
          <img src={item.image} alt={item.title} className="w-full object-cover" draggable={false} />
          <h4 className="font-bold text-sm p-2 line-clamp-3">{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

// ─── Componente principal ──────────────────────────────────────────────────────
const Servicios = forwardRef(({ refs }, ref) => {
  const [activeTab, setActiveTab] = useState("Ministerio de Justicia");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = useCallback((service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedService(null);
  }, []);

  return (
    <section className="container mx-auto pt-8 lg:pt-16 px-5 lg:px-28 2xl:px-8">
      <div className="container mx-auto border-b pb-2 border-primary">
        <h2 className="text-primary font-bold uppercase text-3xl md:text-6xl">
          Nuestros servicios
        </h2>
      </div>

      <DisenoProductos />
      <TramitesInvima />

      <div className="container mx-auto pb-2 mt-12">
        <h2 className="text-xl lg:text-3xl font-bold uppercase mb-8 lg:mb-16">
          Cannabis
        </h2>
      </div>

      {/* ── TABS desktop ── */}
      <div className="hidden lg:flex flex-row justify-center gap-12 border-b border-gray-300 mb-8">
        {Object.keys(tabsData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 border-b-2 transition ${
              activeTab === tab
                ? "border-accent text-light bg-accent font-semibold rounded-t-sm"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── MOBILE: carrusel por sección ── */}
      <div className="flex flex-col gap-8 lg:hidden">
        {Object.keys(tabsData).map((tab) => (
          <div key={tab}>
            <h3 className="font-bold text-lg mb-3">{tab}</h3>
            <MobileCarousel items={tabsData[tab]} onCardClick={openModal} />
          </div>
        ))}
      </div>

      {/* ── DESKTOP: grid tab activo (sin cambios) ── */}
      <div className="hidden lg:grid grid-cols-4 gap-4">
        <div className="relative my-8 pr-4 border-r border-primary">
          <h4 className="font-bold text-xl">{activeTab}</h4>
        </div>
        {tabsData[activeTab].map((item, idx) => (
          <div
            key={idx}
            onClick={() => openModal(item)}
            className={`group flex flex-col justify-between relative my-8 pb-0 cursor-pointer transition ${
              idx < 2 ? "border-r border-primary" : ""
            }`}
          >
            <h4 className="font-bold text-xl group-hover:underline">{item.title}</h4>
            <img
              src={item.image}
              alt={item.title}
              className="w-3/4 mt-12 grayscale group-hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* ── Modal ── */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detalles del servicio"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        className="bg-light max-w-4xl w-full mx-4 p-8 relative shadow-lg border-b-[24px] border-accent"
      >
        {selectedService && (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">{selectedService.title}</h2>
            <p className="mb-4 text-gray-600">{selectedService.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedService.phases.map((phase, i) => (
                <div key={i}>
                  <h3 className="font-bold mb-1">{phase.title}</h3>
                  <ul className="list-disc pl-4 text-sm text-gray-700">
                    {phase.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 hover:text-black font-bold"
            >
              &#10005;
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
});

export default Servicios;