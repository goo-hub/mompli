import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Formulario from "../Formulario/formulario";
import { forwardRef } from "react";

import logo from "../../img/logo.svg";

const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full bg-light z-50">
      <div className="container mx-auto pt-24 flex flex-col justify-center items-start px-5 lg:px-28 2xl:px-8">
        <h2 className="text-primary font-bold uppercase text-3xl md:text-6xl">
          Hablemos de tu proyecto
        </h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-12 lg:py-24 items-center">
          <div className="w-full">
            <p className="text-primary uppercase">
              <strong>Estamos listos</strong> para acompañarte en cada paso
              <br />
              Completa el formulario <strong>y te responderemos pronto</strong>
            </p>
            <div className="mt-12">
              <ul>
                <li className="">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-3" />
                  Centro Comercial Junín Local ###, La Candelaria.{" "}
                </li>
                <li className="mt-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-3" />
                  <a
                    href="https://mompli.co
                    "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    324 540 4397
                  </a>
                </li>
                <li className="mt-2">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                  <a
                    href="mailto:aliados@mompli.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    aliados@mompli.co
                  </a>
                </li>
                <li>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <Formulario />
          </div>
        </div>
      </div>

      <footer className="bg-transparent container mx-auto text-black font-Inter pb-12 flex justify-end px-5 lg:px-28 2xl:px-8">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-end w-full relative">
          {/* Línea vertical y enlaces */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end uppercase">
            <div className="hidden lg:block border-l border-black h-48 mr-4" />
            <ul className="flex flex-col lg:flex-row items-center gap-4">
              <li className="hover:underline cursor-pointer">Servicios</li>
              <li className="hover:underline cursor-pointer mr-0 lg:mr-4">
                Política de Privacidad
              </li>
              <li className="hover:underline cursor-pointer mr-0 lg:mr-4">
                Contacto
              </li>
            </ul>
          </div>

          {/* Derechos y logo */}
          <div className="text-right text-xs flex flex-col-reverse lg:flex-row items-center gap-4">
            <div>
              <p>© {new Date().getFullYear()} Derechos reservados</p>
              <p>
                Realizado por{" "}
                <a
                  href="https://goohub.digital"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Goo Hub Digital</strong>
                </a>
              </p>
            </div>
            <div className="flex items-center justify-end">
              <img src={logo} alt="Mompli logo" className="w-32" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default Footer;
