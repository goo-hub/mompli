const mainImg = require("../../img/nosotros.jpg");

const Nosotros = () => {
  return (
    <>
      <div className="container h-screen mx-auto flex justify-center items-start flex-col">
        <div className="w-9/12 border-t border-primary">
          <div className="flex justify-between pt-6 relative">
            <p className="text-md  tracking-wider mb-4 before:inline-block before:transition-all duration-500 before:w-5 before:h-5 before:mr-4 before:border before:border-primary before:hover:bg-accent before:rounded-full ">
              ¿Quiénes somos?
            </p>
            <div className="w-[1px] h-16 rotate-45 absolute -top-2 right-6 bg-primary">
              &nbsp;
            </div>
          </div>
          <h2 className=" text-primary uppercase text-5xl font-bold">
            Experiencia que respalda tu crecimiento
          </h2>
        </div>
        <div className="flex justify-center items-center py-24">
          <div className="w-full lg:w-1/2">
            <p className=" text-primary uppercase ml-12">
              En Mompli llevamos <strong>12 años acompañando a empresas</strong>{" "}
              y emprendedores en el cumplimiento de requisitos ante{" "}
              <strong>entidades regulatorias en Colombia</strong>. Somos una
              empresa familiar, cercana y comprometida, que combina experiencia
              técnica con atención personalizada para que cada
              <strong> trámite sea claro, ágil y exitoso</strong>.
            </p>
          </div>
          <div className="w-full lg:w-1/2 grid place-content-center">
            <img
              src={mainImg}
              alt="foto de persona leyendo una etiqueta de un producto"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
