import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Formulario = () => {
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const serviceRef = useRef(null);
  const checkboxRef = useRef(null);
  const errorRef = useRef(null);

  // Mostrar textarea cuando el email tiene contenido
  useEffect(() => {
    if (email.length > 0) {
      gsap.to(serviceRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [email]);

  // Mostrar checkbox cuando el textarea tiene contenido
  useEffect(() => {
    if (service.length > 0) {
      gsap.to(checkboxRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [service]);

  // Animar mensaje de error si existe
  useEffect(() => {
    if (error && errorRef.current) {
      gsap.fromTo(
        errorRef.current,
        { opacity: 0, y: -5 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      setError("Debes aceptar las políticas de privacidad.");
      return;
    }
    setError("");
    // Aquí iría el envío real del formulario
    console.log("Formulario enviado:", { email, service });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto py-6 space-y-4 font-Inter"
    >
      <div>
        <input
          type="email"
          className="w-full border-b border-black outline-none py-2 bg-transparent uppercase font-bold placeholder:text-[#232323]"
          value={email}
          placeholder="Ingresa tu correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Campo de servicio (textarea) */}
      <div
        ref={serviceRef}
        className="overflow-hidden opacity-0 h-0 transition-all duration-500 pt-2"
      >
        <label className="block text-2xl font-bold text-black mb-2">
          ¿En qué servicio estás interesado?
        </label>
        <textarea
          className="w-full h-32 uppercase bg-transparent text-gray-600 p-4 outline-none border-b border-black placeholder:text-gray-500"
          placeholder="Describe el servicio y nosotros te contactamos"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />
      </div>

      {/* Checkbox de términos */}
      <div
        ref={checkboxRef}
        className="flex items-center gap-2 overflow-hidden opacity-0 h-0"
      >
        <input
          type="checkbox"
          id="terms"
          checked={accepted}
          onChange={() => setAccepted(!accepted)}
          className="w-5 h-5 border border-black rounded-full"
        />
        <label htmlFor="terms" className="text-sm text-gray-700">
          He leído y acepto las{" "}
          <span className="underline">Políticas de privacidad</span>
        </label>
      </div>

      {/* Mensaje de error */}
      <div
        ref={errorRef}
        className={`text-red-600 text-sm min-h-[1rem] ${
          error ? "block" : "invisible"
        }`}
      >
        {error}
      </div>

      {/* Botón de envío */}
      <div>
        <button
          type="submit"
          disabled={!accepted}
          className={`px-16 uppercase py-4 font-bold transition-colors ${
            accepted
              ? "bg-primary text-light hover:bg-light  border border-primary hover:text-primary cursor-pointer"
              : "bg-gray-500 text-light cursor-not-allowed"
          }`}
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
