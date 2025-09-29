import { useRef } from "react";

import Flotante from "./components/Flotante/flotante";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Nosotros from "./components/Nosotros/nosotros";
import Servicios from "./components/Servicios/servicios";

function App() {
  const invimaRef = useRef(null);
  const cannabisRef = useRef(null);
  const otrasRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='relative w-[100vw] h-screen bg-red'>
      <Header />
      <Hero onCtaClick={scrollToFooter} />
      <Nosotros />
      <Servicios refs={{ invimaRef, cannabisRef, otrasRef }} />
      <Flotante sections={{ invimaRef, cannabisRef, otrasRef }} />
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;
