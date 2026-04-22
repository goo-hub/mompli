import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import BurguerButton from "./BurguerButton/burguerButton";

import logo from "../../img/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    const menu = menuRef.current;
    if (!showMenu) {
      gsap.to(menu, { x: "0%", duration: 0.3, ease: "circ.out" });
    } else {
      gsap.to(menu, { x: "100%", duration: 0.3, ease: "circ.in" });
    }
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // Ocultar el menú al montar el componente
    gsap.set(menuRef.current, { x: "100%" });
  }, []);

  return (
    <div className="w-full lg:w-24 h-auto lg:h-[95%] my-0 lg:my-auto bg-light lg:bg-transparent fixed top-0 lg:top-5 flex justify-center items-center left-0 p-5 border-solid border-r-0 lg:border-r-2 border-primary z-50">
      <BurguerButton action={handleToggleMenu} showMenu={showMenu} />

      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 top-[72px] lg:top-0 flex flex-col bg-light w-[calc(100%)] md:w-64 xl:w-96 p-6 text-primary justify-between transition-transform z-[9999]"
      >
        <button
          className="text-primaryfont-bold text-lg mb-4 hidden lg:absolute top-4 right-4"
          onClick={handleToggleMenu}
        >
          &#10005;
        </button>

        <ul className="text-primary uppercase space-y-4">
          <li className="mb-2 cursor-pointer font-brandon font-bold text-2xl tracking-tighter">Inicio</li>
          <li className="mb-2 cursor-pointer font-brandon font-bold text-2xl tracking-tighter">¿Quiénes somos?</li>
          <li className="mb-2 cursor-pointer font-brandon font-bold text-2xl tracking-tighter">Servicios</li>
          <li className="mb-2 cursor-pointer font-brandon font-bold text-2xl tracking-tighter">Contacto</li>
          <li className="mb-2 cursor-pointer font-brandon font-bold text-2xl tracking-tighter">
            Política de privacidad
          </li>
        </ul>

        <div className="w-full flex flex-col gap-3">
          <ul className="w-full flex justify-center gap-3">
            <li>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
          <p className="text-xs text-center  text-primary ">
            {new Date().getFullYear()} © Mompli
          </p>
        </div>
      </div>

      <img
        src={logo}
        alt="logo Mompli"
        className="block lg:hidden w-40 relative left-2 top-0 invert-0 z-20"
      />

      <span className="text-black hidden lg:block  font-bold tracking-widest vertical text-2xl text-center uppercase">
        Sabemos de normativa
      </span>
    </div>
  );
};

export default Header;
