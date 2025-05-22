import { forwardRef } from "react";

import check from "../../img/check.svg";

import invima1 from "../../img/invima/registro-planta-productora.jpg";
import invima2 from "../../img/invima/permiso-sanitario.jpg";
import invima3 from "../../img/invima/aprobacion-rotulado.jpg";
import invima4 from "../../img/invima/cert-buenas-practicas.jpg";
import invima5 from "../../img/invima/registro-sanitario-suplementos.jpg";
import invima6 from "../../img/invima/autorizacion-publicidad.jpg";
import invima7 from "../../img/invima/cert-productos-aseo.jpg";
import invima8 from "../../img/invima/notificacion-sanitaria-obligatoria.jpg";

import cannabis1 from "../../img/cannabis/reg-cultivares.jpg";
import cannabis2 from "../../img/cannabis/reg-cultivo-semillas.jpg";
import cannabis3 from "../../img/cannabis/solicitud-cupo-plantas.jpg";

import otras1 from "../../img/otras/sustancias-quimicas.jpg";
import otras2 from "../../img/otras/tramites-licencia-cultivo.jpg";
import otras3 from "../../img/otras/establecimiento-farmaceutico.jpg";
import otras4 from "../../img/otras/productos-controlados.jpg";
import otras5 from "../../img/otras/fondo-nacional.jpg";
import otras6 from "../../img/otras/quimicos-controlados.jpg";

const Servicios = forwardRef(({ refs }, ref) => {
  const { invimaRef, cannabisRef, otrasRef } = refs;

  return (
    <>
      <div className="container mx-auto border-b pb-2 border-primary">
        <h2 className=" text-primary font-bold uppercase text-4xl">
          Nuestros servicios
        </h2>
      </div>

      <div
        ref={invimaRef}
        className="relative container mx-auto mb-8 grid grid-cols-4 grid-rows-3 gap-1 justify-between items-stretch"
      >
        <div className="w-full absolute col-span-4 h-[1px] bg-primary top-[33%]"></div>
        <div className="w-full absolute col-span-4 h-[1px] bg-primary top-[66%]"></div>

        <div className="relative my-8 pr-4 border-r border-primary">
          <h4 className=" font-bold text-2xl">Alimentos</h4>
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8 border-r border-primary">
          <h4 className="font-bold text-xl">
            Registro de planta productora de alimentos
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={invima1} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8 border-r border-primary">
          <h4 className=" font-bold text-xl">
            Permiso o notificación sanitaria según el riesgo del alimento
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={invima2} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8 ">
          <h4 className=" font-bold text-xl">
            Aprobación de rotulado para productos alimenticios
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={invima3} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>

        <div className="relative my-8 pr-4 border-r border-primary">
          <h4 className=" font-bold text-2xl">Suplementos dietarios</h4>
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8 border-r border-primary">
          <h4 className=" font-bold text-xl">
            Certificación de buenas prácticas de manufactura
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={invima4} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8 border-r border-primary">
          <h4 className=" font-bold text-xl">
            Registro sanitario de suplementos dietarios
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={invima5} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8 ">
          <h4 className=" font-bold text-xl">
            Autorización para publicidad de los suplementos dietarios
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={invima6} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>

        <div className="relative col-span-2 row-start-3 my-8 pr-4 py-8 border-r border-primary">
          <h4 className=" font-bold text-2xl">Productos de aseo y limpieza</h4>
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative col-start-3 row-start-3 my-8 px-4 pt-16 pb-8 border-r border-primary">
          <h4 className=" font-bold text-xl">
            Certificado de producción para productos de aseo
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={invima7} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative col-start-4 row-start-3 my-8 px-4 pt-16 pb-8 ">
          <h4 className=" font-bold text-xl">
            Notificación sanitaria obligatoria
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={invima8} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
      </div>

      <div className="container mx-auto flex items-center gap-8">
        <div className="w-full h-[1px] bg-primary" />

        <button className="w-full py-4 border border-primary rounded-none uppercase font-bold relative overflow-hidden group">
          <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-300">
            Ver todos los servicios
          </span>
          <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
        </button>

        <div className="w-full h-[1px] bg-primary" />
      </div>

      <div className="container mx-auto border-b pb-2 mt-32 border-primary">
        <h2 className=" text-primary font-bold uppercase text-4xl">Cannabis</h2>
      </div>

      <div
        ref={cannabisRef}
        className="container mx-auto mb-8 grid grid-cols-4 grid-rows-1 gap-1 justify-between items-stretch"
      >
        <div className="relative my-8 pr-4 border-r border-primary">
          <h4 className=" font-bold text-2xl">Ministerio de justicia</h4>
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8 border-r border-primary">
          <h4 className=" font-bold text-xl">
            Registro de cultivares de cannabis ante el ICA
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={cannabis1} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8 border-r border-primary">
          <h4 className=" font-bold text-xl">
            Registro de cultivo y semillas de cannabis ante el Ministerio de
            Justicia
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={cannabis2} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8 ">
          <h4 className=" font-bold text-xl">
            Solicitud de cupo de plantas psicoactivas ante el ministerio de
            justicia
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={cannabis3} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
      </div>

      <div className="container mx-auto flex items-center gap-8">
        <div className="w-full h-[1px] bg-primary" />

        <button className="w-full py-4 border border-primary rounded-none uppercase font-bold relative overflow-hidden group">
          <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-300">
            Ver todos los servicios
          </span>
          <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
        </button>

        <div className="w-full h-[1px] bg-primary" />
      </div>

      <div className="container mx-auto border-b pb-2 mt-32 border-primary">
        <h2 className=" text-primary font-bold uppercase text-4xl">
          Tramites ante otras entidades regulatorias
        </h2>
      </div>

      <div
        ref={otrasRef}
        className="relative container mx-auto mb-8 grid grid-cols-4 grid-rows-4 gap-1 justify-between items-stretch"
      >
        <div className="w-full absolute col-span-4 h-[1px] bg-primary top-[25%]"></div>
        <div className="w-full absolute col-span-4 h-[1px] bg-primary top-[50%]"></div>
        <div className="w-full absolute col-span-4 h-[1px] bg-primary top-[75%]"></div>

        <div className="relative col-span-2 my-8 pr-4 py-8 border-r border-primary">
          <h4 className=" font-bold text-2xl">Ministerio de justicia</h4>
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative col-start-3 my-8 px-4 pt-16 pb-8 border-r border-primary">
          <h4 className=" font-bold text-xl">
            Manejo de productos con sustancias químicas controladas en el SICOP
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={otras1} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative col-start-4 my-8 px-4 pt-16 pb-8 ">
          <h4 className=" font-bold text-xl">
            Trámites de licencia de cultivo de cannabis industrial
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={otras2} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>

        <div className="relative my-8 pr-4 border-r border-primary">
          <h4 className=" font-bold text-2xl">
            Entidades terriroriales de salud
          </h4>
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8">
          <h4 className=" font-bold text-xl">
            Apertura de establecimientos farmacéuticos mayoristas y minoristas
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={otras3} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8">
          {/* <h4 className=" font-bold text-xl">
            Permiso o notificación sanitaria según el riesgo del alimento
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={otras1} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span> */}
        </div>
        <div className="relative my-8 px-4 pt-8 pb-8 ">
          {/* <h4 className=" font-bold text-xl">
            Aprobación de rotulado para productos alimenticios
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={otras1} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span> */}
        </div>

        <div className="relative col-span-2 my-8 pr-4 py-8 border-r border-primary">
          <h4 className="font-bold text-2xl">
            Fondo Nacional de Estupefacientes
          </h4>
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative col-start-3 row-start-3 my-8 px-4 pt-16 pb-8 border-r border-primary">
          <h4 className=" font-bold text-xl">
            Autorización para el manejo de productos controlados en Colombia
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={otras4} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative col-start-4 row-start-3 my-8 px-4 pt-16 pb-8 ">
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
          <h4 className=" font-bold text-xl">
            Asesoría en reportes periódicos ante el fondo nacional
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={otras5} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>

        <div className="relative col-span-3 row-start-4 my-8 pr-4 py-8 border-r border-primary">
          <h4 className=" font-bold text-2xl">
            Superintendencia de Industria y Comercio
          </h4>
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
        <div className="relative col-start-4 row-start-4 my-8 px-4 pt-8 pb-8">
          <h4 className=" font-bold text-xl">
            Manejo de productos con sustancias químicas controladas en el SICOP
          </h4>
          <img src={check} alt="check Mompli" className="w-8 mt-4" />
          <img src={otras6} alt="check Mompli" className="w-3/4 mt-12" />
          <span className="absolute bottom-0 right-4 vertical text-sm">
            Tramites en Invima
          </span>
        </div>
      </div>
    </>
  );
});

export default Servicios;
