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
      description:
        "Brindamos asesoría técnico legal para el registro sanitario que se le asigna al fabricante, importador o comercializador para comercializar su producto alimenticio o semielaborado en el mercado colombiano, con previo cumplimiento de todos los requisitos establecidos en la normatividad sanitaria vigente.",
      phases: [
        { title: "", points: [""] },
        { title: "", points: [""] },
      ],
    },
    {
      title: "Permiso o notificación sanitaria",
      image: invima2,
      description:
        "Elaboramos la solicitud acompañada de la información técnico legal necesaria para obtener la aprobación de comercialización, correspondiente de acuerdo al tipo de riesgo del producto.\nTenga en cuenta que cualquier alimento prefabricado que se venda directamente al público necesita estar registrado, tener un permiso y/o una notificación de salud según el nivel de riesgo del producto.",
      phases: [{ title: "", points: [""] }],
    },
    {
      title: "Aprobación de rotulado",
      image: invima3,
      description:
        "Brindamos asesoría técnico legal para el uso correcto del rotulado de alimentos, velando por una la información clara, simple y comprensible para que el consumidor pueda realizar una elección informada del producto. Se verifica que las etiquetas cuenten con toda la información solicitada en la normatividad vigente según el tipo de alimento y se somete a consideración por parte del Invima para su aprobación. A continuación, conozca nuestras capacidades de asesoría legal para el correcto rotulado de los productos alimenticios.",
      phases: [
        {
          title:
            "FASE 1:  Trabajamos en la obtención y cumplimiento de la siguiente información.",
          points: [
            "Declaración las nutrientes, contenido neto, rotulado nutricional, tamaño de porción y recomendación diaria de uso.",
          ],
        },
        {
          title: "FASE 2:  Presentación de información.",
          points: [
            "Obtención y presentación de la información del producto con las cantidades y las unidades correspondientes a cada nutriente y sustancias declaradas, utilizando el Sistema Internacional de Unidades (S. I. U).",
            "Obtención y presentación de la información técnica y científica sobre las declaraciones de propiedades nutricionales o de salud.",
          ],
        },
      ],
    },
  ],
  "Suplementos dietarios": [
    {
      title: "Certificación de buenas prácticas de manufactura",
      image: suplementos1,
      description:
        "Brindamos asesoría técnico legal de acuerdo al marco normativo aplicable a empresas o persona naturales que cuente con las instalaciones y los equipos necesarios para realizar procesos de fabricación y/o el control de calidad de suplementos dietarios. A continuación, conozca nuestras capacidades de asesoría legal en la ruta de certificación de buenas prácticas para planta productora de suplementos dietarios.",
      phases: [
        {
          title: "FASE 1: Diagnóstico",
          points: [
            "Evaluar las condiciones iniciales del cliente",
            "Establecer el plan de acción para la certificación",
          ],
        },
        {
          title: "FASE 2: Diseño",
          points: [
            "Elaboración de propuesta de diseño",
            "Distribución de las áreas",
          ],
        },
        {
          title: "FASE 3: Implementación",
          points: [
            "Implementación del sistema de gestión de calidad",
            "Solicitud de visita (diligenciamiento de formatos correspondientes y Guía de Inspección)",
            "Recopilación de la información técnico legal con la cual se solicita la visita por parte del Invima",
          ],
        },
        {
          title: "FASE 4: Auditoria",
          points: [
            "Auditoria para la verificación del cumplimiento de todos los requisitos técnico-legales del establecimiento fabricante",
          ],
        },
      ],
    },
    {
      title: "Registro sanitario de suplementos dietarios",
      image: suplementos2,
      description:
        "Brindamos asesoría técnico legal para el registro sanitario que se le asigna al fabricante, importador o comercializador para comercializar su producto en el mercado colombiano con previo cumplimiento de todos los requisitos establecidos en la normatividad sanitaria vigente. Velamos por la recopilación de documentos técnico legales necesarios para la presentación de la solicitud ante la entidad sanitaria, con el cumplimiento de todos los requisitos de ley. Y aval de la solicitud como responsable sanitario (director técnico).",
      phases: [{ title: "", points: [""] }],
    },
    {
      title: "Autorización para publicidad de suplementos dietarios",
      image: suplementos3,
      description:
        "Se revisa todas las piezas publicitarias con las que se va a promocionar el productor, verificando el cumplimiento de la normatividad legal vigente",
      phases: [{ title: "", points: [""] }],
    },
  ],
  "Productos de aseo y limpieza": [
    {
      title:
        "Certificado de capacidad para producción de productos de aseo y limpieza",
      image: aseo1,
      description:
        "Brindamos asesoría técnico legal a empresas o persona naturales que cuente con las instalaciones y los equipos necesarios para realizar procesos de producción de productos de aseo y limpieza. A continuación, conozca nuestras capacidades de asesoría legal en la ruta de certificación de capacidad para producción de aseo y limpieza. ",
      phases: [
        {
          title: "FASE 1: Diagnóstico",
          points: [
            "Evaluar las condiciones iniciales del cliente",
            "Establecer el plan de acción para la certificación",
          ],
        },
        {
          title: "FASE 2: Diseño",
          points: [
            "Elaboración de propuesta de diseño",
            "Distribución de las áreas",
          ],
        },
        {
          title: "FASE 3: Implementación",
          points: [
            "Implementación del sistema de gestión de calidad",
            "Solicitud de visita (diligenciamiento de formatos correspondientes y recopilación de la información técnico legal con la cual se solicita la visita por parte del Invima)",
          ],
        },
        {
          title: "FASE 4: Auditoria",
          points: [
            "Auditoria para la verificación del cumplimiento de todos los requisitos técnico-legales del establecimiento fabricante",
          ],
        },
      ],
    },
    {
      title:
        "Notificación sanitaria obligatoria de productos de aseo y limpieza",
      image: aseo2,
      description:
        "Brindamos asesoría técnico legal para el registro sanitario que se le asigna al fabricante, importador o comercializador para comercializar su producto de aseo y limpieza en el mercado colombiano, con previo cumplimiento de todos los requisitos establecidos en la normatividad sanitaria vigente.",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
  ],
  Cosméticos: [
    {
      title: "Certificado de capacidad de producción de cosméticos",
      image: suplementos1,
      description:
        "Brindamos asesoría técnico legal a empresas o personas naturales que cuente con las instalaciones y los equipos necesarios para realizar procesos de producción de productos cosméticos. A continuación, conozca nuestras capacidades de asesoría legal en la ruta de certificación de capacidad para producción de cosméticos. ",
      phases: [
        {
          title: "FASE 1: Diagnóstico",
          points: [
            "Evaluar las condiciones iniciales del cliente",
            "Establecer el plan de acción para la certificación",
          ],
        },
        {
          title: "FASE 2: Diseño",
          points: [
            "Elaboración de propuesta de diseño",
            "Distribución de las áreas",
          ],
        },
        {
          title: "FASE 3: Implementación",
          points: [
            "Implementación del sistema de gestión de calidad",
            "Solicitud de visita (diligenciamiento de formatos correspondientes y Guía de Inspección)",
            "Recopilación de la información técnico legal con la cual se solicita la visita por parte del Invima",
          ],
        },
        {
          title: "FASE 4: Auditoria",
          points: [
            "Auditoria para la verificación del cumplimiento de todos los requisitos técnico-legales del establecimiento fabricante",
          ],
        },
      ],
    },
    {
      title: "Notificación sanitaria obligatoria de productos cosméticos",
      image: aseo2,
      description:
        "Brindamos asesoría técnico legal para el registro sanitario que se le asigna al fabricante, importador o comercializador para comercializar su producto cosmético en el mercado colombiano, con previo cumplimiento de todos los requisitos establecidos en la normatividad sanitaria vigente.",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
  ],
  "Dispositivos médicos": [
    {
      title: "Notificación sanitaria obligatoria de productos cosméticos",
      image: aseo2,
      description:
        "Brindamos asesoría técnico legal para el registro sanitario que se le asigna al fabricante, importador o comercializador para comercializar su producto cosmético en el mercado colombiano, con previo cumplimiento de todos los requisitos establecidos en la normatividad sanitaria vigente.",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
    {
      title: "Notificación sanitaria obligatoria de productos cosméticos",
      image: aseo2,
      description:
        "Brindamos asesoría técnico legal para el registro sanitario que se le asigna al fabricante, importador o comercializador para comercializar su producto cosmético en el mercado colombiano, con previo cumplimiento de todos los requisitos establecidos en la normatividad sanitaria vigente.",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
    {
      title: "Notificación sanitaria obligatoria de productos cosméticos",
      image: aseo2,
      description:
        "Brindamos asesoría técnico legal para el registro sanitario que se le asigna al fabricante, importador o comercializador para comercializar su producto cosmético en el mercado colombiano, con previo cumplimiento de todos los requisitos establecidos en la normatividad sanitaria vigente.",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
  ],
  Medicamentos: [
    {
      title: "Notificación sanitaria obligatoria de productos cosméticos",
      image: aseo2,
      description:
        "Brindamos asesoría técnico legal para el registro sanitario que se le asigna al fabricante, importador o comercializador para comercializar su producto cosmético en el mercado colombiano, con previo cumplimiento de todos los requisitos establecidos en la normatividad sanitaria vigente.",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
    {
      title: "Notificación sanitaria obligatoria de productos cosméticos",
      image: aseo2,
      description:
        "Brindamos asesoría técnico legal para el registro sanitario que se le asigna al fabricante, importador o comercializador para comercializar su producto cosmético en el mercado colombiano, con previo cumplimiento de todos los requisitos establecidos en la normatividad sanitaria vigente.",
      phases: [
        { title: "FASE 1: DIAGNÓSTICO", points: ["Revisión documental"] },
      ],
    },
    {
      title: "Notificación sanitaria obligatoria de productos cosméticos",
      image: aseo2,
      description:
        "Brindamos asesoría técnico legal para el registro sanitario que se le asigna al fabricante, importador o comercializador para comercializar su producto cosmético en el mercado colombiano, con previo cumplimiento de todos los requisitos establecidos en la normatividad sanitaria vigente.",
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
        Trámites ante Invima y Diseño de productos
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
