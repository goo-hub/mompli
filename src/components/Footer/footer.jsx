import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Formulario from "../Formulario/formulario";
import { forwardRef } from "react";

import logo from "../../img/logo.png";

const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full bg-light z-50">
      <div className="container mx-auto pt-24 flex flex-col justify-center items-start px-5 lg:px-28 2xl:px-8">
        <h2 className="text-primary font-bold uppercase text-xl md:text-6xl">
          Hablemos de tu proyecto
        </h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-24 items-start">
          <div className="order-1">
            <p className="text-primary text-xl hidden lg:block">
              Estamos listos para acompañarte en cada paso. <br />
              Completa el formulario y te responderemos pronto
            </p>
            <p className="text-primary text-xl lg:hidden">
              Estamos listos para acompañarte en cada paso, completa el
              formulario y te responderemos pronto
            </p>
            <div className="hidden lg:block mt-12">
              <ul>
                <li className="mt-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-3 " />
                  <a
                    href="https://mompli.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    324 540 4397
                  </a>
                </li>
                <li className="mt-2">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3 " />
                  <a
                    href="mailto:aliados@mompli.com.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    aliados@mompli.com.co
                  </a>
                </li>
                <li className="">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-3 " />
                  Centro Comercial Junín Local 218, La Candelaria.{" "}
                </li>
                <li>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebookF} className="" />
                    </a>
                    <a
                      href="https://instagram.com/mompli__"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative block lg:hidden order-3 lg:order-3  border border-primary p-6">
            <ul className="space-y-4 font-medium">
              <li>
                <FontAwesomeIcon icon={faWhatsapp} className="mr-3 " />
                <a
                  href="https://mompli.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  324 540 4397
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 " />
                <a
                  href="mailto:aliados@mompli.com.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aliados@mompli.com.co
                </a>
              </li>
              <li className="">
                <FontAwesomeIcon icon={faLocationDot} className="mr-3 " />
                Centro Comercial Junín Local 218, La Candelaria.{" "}
              </li>
              <li>
                <div className="flex gap-4 absolute top-5 right-5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} className="" />
                  </a>
                  <a
                    href="https://instagram.com/mompli__"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full order-2 lg:order-2">
            <Formulario />
          </div>
        </div>
      </div>

      <footer className="relative bg-transparent container mx-auto text-black pb-0 lg:pb-12 flex justify-end">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-end w-full relative pb-44 lg:pb-0">
          {/* Menu Mobile */}
          <div className="bg-primary text-white flex justify-center items-center py-12 w-full absolute bottom-0 left-0 lg:hidden">
            <ul className="flex items-center gap-8 uppercase font-brandon font-bold">
              <li className="hover:underline cursor-pointer">Servicios</li>
              <li className="hover:underline cursor-pointer mr-0 lg:mr-4">
                Política
              </li>
              <li className="hover:underline cursor-pointer mr-0 lg:mr-4">
                Contacto
              </li>
            </ul>
          </div>

          {/* Línea vertical y enlaces */}
          <div className="hidden lg:flex flex-col lg:flex-row items-start lg:items-end uppercase px-5 lg:px-28 2xl:px-8">
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
          <div className="text-right text-xs flex flex-col-reverse lg:flex-row items-center gap-4 px-5 lg:px-28 2xl:px-8">
            <div>
              <p>© {new Date().getFullYear()} Derechos reservados</p>
              <p>
                Realizado por{" "}
                <a
                  href="https://goohubdigital.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Goo Hub Digital</strong>
                </a>
              </p>
            </div>
            <div className="flex items-center justify-end">
              <img src={logo} alt="Mompli logo" className="w-32 mt-8 lg:mt-0" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default Footer;
