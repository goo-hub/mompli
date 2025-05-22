import { useEffect, useState } from "react";

import logo from "../../img/logo.svg";
const hero1 = require("../../img/mompli_hero1.jpg");
const hero2 = require("../../img/mompli_hero2.jpg");

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

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col h-screen w-full z-10">
      <div className="w-full flex items-start justify-start h-3/4 relative">
        <div className="h-full w-24 absolute left-1/2 -translate-x-1/2 -translate-y-1 top-0 z-0 bg-[#E3E3E3]"></div>
        <img
          src={logo}
          alt="logo Mompli"
          className="w-72 relative left-48 top-4"
        />
        {/* Indicadores */}
        <div className="absolute top-4 left-1/2 -translate-x-20 flex gap-2 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === current ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        {/* Slider Visual */}
        <div className="relative w-full h-full overflow-hidden -top-1">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index}`}
              className={`absolute top-0 right-0 w-7/12 h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto flex justify-between h-1/4 -mt-12">
        {/* Texto */}
        <div className="w-full md:w-10/12 flex flex-col justify-center px-6 py-12 md:py-0 ">
          <p className="text-2xl  tracking-widest mb-4 border-t border-primary pt-6  before:inline-block before:w-5 before:h-5 before:mr-4 before:border before:border-primary before:rounded-full">
            {slides[current].subtitle}
          </p>
          <h1 className="text-3xl md:text-6xl font-bold  leading-tight mb-6">
            {slides[current].title}
          </h1>
        </div>
        {/* Botón tipo rombo */}
        <div className="relative group w-40 h-40 rounded-xl scale-y-[70%] ">
          <div className="absolute inset-0 transfor rounded-md rotate-45 bg-primary outline-double  outline-offset-4 outline-[#c5c5c5]"></div>
          <button className="absolute inset-0 transform rotate-45 flex  items-center justify-center text-white font-bold  text-xl">
            <span className="-rotate-45 font-medium scale-y-[150%]">
              EMPIEZA HOY
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
