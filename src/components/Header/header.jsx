import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import BurguerButton from "./BurguerButton/burguerButton";

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
    <div className="w-24 h-[95%] my-auto fixed top-5 hidden lg:flex justify-center items-center left-0 p-5 border-solid border-r-2 border-primary z-50">
      <BurguerButton action={handleToggleMenu} showMenu={showMenu} />

      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 flex flex-col bg-accent w-[calc(100%-15px)] md:w-64 xl:w-96 p-6 text-white justify-between transition-transform z-[9999]"
      >
        <button
          className="text-primary dark:text-neutral-100 font-bold text-lg mb-4 absolute top-4 right-4"
          onClick={handleToggleMenu}
        >
          &#10005;
        </button>

        <ul className="text-primary uppercase dark:text-neutral-100 space-y-4">
          <li className="mb-2 cursor-pointer">Inicio</li>
          <li className="mb-2 cursor-pointer">¿Quiénes somos?</li>
          <li className="mb-2 cursor-pointer">Servicios</li>
          <li className="mb-2 cursor-pointer">Contacto</li>
          <li className="mb-2 cursor-pointer">Política de privacidad</li>
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
          <p className="text-xs text-center text-primary dark:text-neutral-100">
            {new Date().getFullYear()} © Mompli
          </p>
        </div>
      </div>

      <span className="text-black  font-bold tracking-widest vertical text-2xl text-center uppercase">
        Sabemos de normativa
      </span>
    </div>
  );
};

export default Header;
