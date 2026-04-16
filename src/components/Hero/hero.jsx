import { useEffect, useState } from "react";

import logo from "../../img/logo.png";
const hero1 = require("../../img/mompli_hero1.png");
const hero2 = require("../../img/mompli_hero2.png");

const slides = [
  {
    image: hero1,
    subtitle: "Permisos y registros, sin complicaciones",
    title: "¿TIENES UN PRODUCTO LISTO? NOSOTROS LO HACEMOS LEGAL",
  },
  {
    image: hero2,
    subtitle: "Expertos en normatividad INVIMA",
    title: "CUMPLE CON LA LEY, SIN COMPLICARTE",
  },
];

const Hero = ({ onCtaClick }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col h-full lg:h-screen w-full z-10 pb-28 sm:pb-20 lg:pb-0">
      <div className="w-full flex flex-col lg:flex-row items-start justify-start h-3/4 relative">
        <img
          src={logo}
          alt="logo Mompli"
          className="block w-48 2xl:w-72 relative left-4 lg:left-28 2xl:left-48 top-4 invert lg:invert-0 z-20"
        />

        {/* Indicadores */}
        <div className="absolute top-4 left-1/2 -translate-x-20 hidden lg:flex gap-2 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === current ? "bg-accent" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="w-[45vw] h-[1px] bg-black absolute bottom-12 xl:bottom-6 2xl:bottom-1 left-[10vw] hidden lg:block"></div>

        {/* Slider Visual */}
        <div className="relative group w-full h-full overflow-hidden ml-0 lg:-ml-20 xl:ml-0 -mt-16 2xl:mt-0 z-10">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index}`}
              className={`absolute -top-1 -right-0 w-full lg:w-7/12 h-full object-cover grayscale transition-all duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-0 lg:px-24 2xl:px-2 h-1/4 mt-0 lg:-mt-12">
        {/* Texto */}
        <div className="group w-full lg:w-10/12 flex flex-col justify-center px-6 py-6 lg:py-0 mt-0 lg:mt-12">
          <p className="text-lg lg:text-2xl font-guess tracking-widest mb-4 pt-6 before:transition-all duration-500 before:inline-block before:w-5 before:h-5 before:mr-4 before:border before:border-primary before:group-hover:bg-accent before:rounded-full">
            {slides[current].subtitle}
          </p>
          <h1 className="text-2xl lg:text-4xl 2xl:text-6xl font-bold  leading-tight mb-6">
            {slides[current].title}
          </h1>
        </div>
        <div className="hidden lg:block relative group w-40 h-40 rounded-xl scale-y-[70%] cursor-pointer z-30 -translate-y-8">
  
  {/* Fondo principal */}
  <div className="absolute inset-0 transform rotate-45 bg-accent group-hover:bg-primary rounded-md transition duration-300 group-hover:shadow-[0_0_30px_4px_rgba(0,0,0,0.2)]" />

  {/* Anillos — parten pequeños desde el centro y crecen hacia afuera */}
  {[0, 0.6, 1.2, 1.8, 2.4].map((delay, i) => (
    <div
      key={i}
      className="absolute rotate-45 rounded-md pointer-events-none border border-white/10"
      style={{
        animation: `diamondRing 3s linear infinite`,
        animationDelay: `${delay}s`,
        top: "50%",
        left: "50%",
        width: "0%",
        height: "0%",
        transform: "rotate(45deg) translate(-50%, -50%)",
        transformOrigin: "top left",
      }}
    />
  ))}

  {/* Texto */}
  <button
    onClick={onCtaClick}
    className="absolute inset-0 transform rotate-45 flex items-center justify-center text-white font-bold text-xl transition-all duration-300 group-hover:text-light"
  >
    <span className="-rotate-45 font-medium scale-y-[150%] tracking-widest group-hover:-translate-y-1 transition-all duration-300">
      EMPIEZA HOY
    </span>
  </button>

  <style>{`
    @keyframes diamondRing {
      0% {
        width: 0%;
        height: 0%;
        opacity: 1;
      }
      80% {
        opacity: 1;
      }
      100% {
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  `}</style>
</div>
      </div>
    </section>
  );
};

export default Hero;
