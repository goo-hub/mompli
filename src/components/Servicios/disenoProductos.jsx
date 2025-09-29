import { useState } from "react";
import Modal from "react-modal";

import invima1 from "../../img/invima/registro-planta-productora.jpg";
import invima2 from "../../img/invima/permiso-sanitario.jpg";
import invima3 from "../../img/invima/aprobacion-rotulado.jpg";

import suplementos1 from "../../img/invima/cert-buenas-practicas.jpg";
import suplementos2 from "../../img/invima/registro-sanitario-suplementos.jpg";
import suplementos3 from "../../img/invima/autorizacion-publicidad.jpg";

import aseo1 from "../../img/invima/cert-productos-aseo.jpg";
import aseo2 from "../../img/invima/notificacion-sanitaria-obligatoria.jpg";

Modal.setAppElement("#root");

const tabsData = {
  Alimentos: [
    {
      title: "Registro sanitario de alimentos",
      image: invima1,
      description: "Brindamos asesoría técnica...",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Evaluar requisitos"] },
        { title: "FASE 2: DISEÑO", points: ["Plan de acción"] },
      ],
    },
    {
      title: "Permiso o notificación sanitaria",
      image: invima2,
      description: "Brindamos asesoría técnica...",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
    {
      title: "Aprobación de rotulado",
      image: invima3,
      description: "Brindamos asesoría técnica...",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
  ],
  "Suplementos dietarios": [
    {
      title: "Certificación de buenas prácticas",
      image: suplementos1,
      description: "Brindamos asesoría técnica...",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Evaluar requisitos"] },
      ],
    },
    {
      title: "Registro sanitario de suplementos",
      image: suplementos2,
      description: "Brindamos asesoría técnica...",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
    {
      title: "Autorización para publicidad",
      image: suplementos3,
      description: "Brindamos asesoría técnica...",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
  ],
  "Productos de aseo y limpieza": [
    {
      title: "Certificado de producción aseo",
      image: aseo1,
      description: "Brindamos asesoría técnica...",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Evaluar requisitos"] },
      ],
    },
    {
      title: "Notificación sanitaria obligatoria",
      image: aseo2,
      description: "Brindamos asesoría técnica...",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
  ],
};

const DisenoProductos = () => {
  const [activeTab, setActiveTab] = useState("Alimentos");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="pt-8 lg:pt-16">
      <h2 className="text-xl lg:text-3xl font-bold uppercase mb-8 lg:mb-16">
        Diseño de productos
      </h2>

      {/* Tabs solo visible en desktop */}
      <div className="hidden lg:flex flex-row justify-center gap-12 border-b border-gray-300 mb-8">
        {Object.keys(tabsData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 border-b-2 transition ${
              activeTab === tab
                ? "border-black text-black font-semibold"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* MOBILE: Todas las secciones */}
      <div className="flex flex-col lg:hidden">
        {Object.keys(tabsData).map((tab) => (
          <div key={tab} className="mb-8">
            <h3 className="font-bold text-xl mb-4">{tab}</h3>
            <div className="grid grid-cols-2 gap-2">
              {tabsData[tab].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => openModal(item)}
                  className="border p-0 cursor-pointer transition"
                >
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <img src={item.image} alt={item.title} className="w-full" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP: Grid de tab activo */}
      <div className="hidden lg:grid grid-cols-4 gap-4">
        <div className="relative my-8 pr-4 border-r border-primary">
          <h4 className="font-bold text-xl">{activeTab}</h4>
        </div>

        {tabsData[activeTab].map((item, idx) => (
          <div
            key={idx}
            onClick={() => openModal(item)}
            className={`flex flex-col justify-between relative my-8 pb-0 cursor-pointer transition group ${
              idx < 2 ? "border-r border-primary" : ""
            }`}
          >
            <h4 className="font-bold text-xl group-hover:underline">
              {item.title}
            </h4>
            <img src={item.image} alt={item.title} className="w-3/4 mt-12" />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detalles del servicio"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        className="bg-light max-w-4xl w-full p-8 relative shadow-lg border-b-[24px] border-accent"
      >
        {selectedService && (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {selectedService.title}
            </h2>
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
    </div>
  );
};

export default DisenoProductos;
