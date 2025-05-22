import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Formulario from "../Formulario/formulario";

import logo from "../../img/logo.svg";

const Footer = () => {
  return (
    <div className="w-full bg-light z-50">
      <div className="container mx-auto pt-24 flex flex-col justify-center items-start">
        <h2 className=" text-primary font-bold uppercase text-5xl">
          Hablemos de tu proyecto
        </h2>
        <div className="w-full grid grid-cols-2 py-24 items-center">
          <div className="w-full">
            <p className=" text-primary uppercase">
              <strong>Estamos listos</strong> para acompañarte en cada paso
              <br />
              Completa el formulario <strong>y te responderemos pronto</strong>
            </p>
          </div>
          <div className="w-full">
            <Formulario />
          </div>
        </div>
      </div>

      <footer className="bg-transparent container mx-auto text-black font-Inter pb-12 flex justify-end">
        <div className="flex flex-row justify-between items-end w-full relative">
          {/* Línea vertical y enlaces */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end uppercase">
            <div className="border-l border-black h-48 mr-4" />
            <ul className="flex gap-4">
              <li className="hover:underline cursor-pointer mr-4">Contacto</li>
              <li className="hover:underline cursor-pointer mr-4">
                Política de Privacidad
              </li>
              <li className="hover:underline cursor-pointer">Servicios</li>
            </ul>
          </div>

          {/* RRSS */}
          <div className="flex gap-4 mb-4 md:mb-0 absolute bottom-0 left-1/2 -translate-x-1/2">
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

          {/* Derechos y logo */}
          <div className="text-right text-xs flex items-center gap-4">
            <div>
              <p>© {new Date().getFullYear()} derechos reservados por</p>
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
};

export default Footer;
