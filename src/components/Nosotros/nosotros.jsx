import { useState } from "react";
import Modal from "react-modal";

const mainImg = require("../../img/nosotros.png");

Modal.setAppElement("#root");

const Nosotros = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="container group h-auto py-0 lg:pb-12 lg:pt-48 mx-auto flex justify-center items-start flex-col px-5 lg:px-28 2xl:px-8">
        <div className="w-full lg:w-9/12 border-t border-primary">
          <div className="flex justify-between pt-6 relative">
            <p className="text-md tracking-wider mb-8 lg:mb-4 before:inline-block before:transition-all duration-500 before:w-5 before:h-5 before:mr-4 before:border before:border-primary before:group-hover:bg-accent before:rounded-full ">
              ¿Quiénes somos?
            </p>
            <div className="w-[1px] h-16 rotate-45 absolute -top-2 right-6 bg-primary">
              &nbsp;
            </div>
          </div>
          <h2 className="text-primary uppercase text-xl lg:text-5xl font-bold">
            Experiencia que respalda tu crecimiento
          </h2>
          <img
            src={mainImg}
            alt="foto de persona leyendo una etiqueta de un producto"
            className="w-full max-w-[500px] mt-8 lg:mt-0 grayscale transition duration-500 block lg:hidden"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center py-12 lg:py-24">
          <div className="w-full lg:w-1/2">
            <p className="text-primary ml-0 2xl:ml-12 text-xl hyphens-auto text-justify lg:text-left">
              En Mompli llevamos 12 años acompañando a empresas y emprendedores
              en el cumplimiento de requisitos ante entidades regulatorias en
              Colombia. Somos una empresa familiar, cercana y comprometida, que
              combina experiencia técnica con atención personalizada para que
              cada trámite sea claro, ágil y exitoso.{" "}
              <span className="block lg:hidden float-left">
                —{" "}
                <button
                  onClick={() => openModal()}
                  className="px-2 py-1 border-2 border-primary font-geraldton"
                >
                  Saber Más
                </button>
              </span>
            </p>
            <button
              onClick={() => openModal()}
              className={`hidden lg:block px-16 mt-12 ml-0 2xl:ml-12 uppercase py-4 font-bold transition-colors bg-accent text-light hover:bg-light border border-accent hover:border-primary hover:text-primary rounded-sm cursor-pointer`}
            >
              Saber más
            </button>
          </div>
          <div className="w-full lg:w-1/2 grid place-content-center">
            <img
              src={mainImg}
              alt="foto de persona leyendo una etiqueta de un producto"
              className="w-full max-w-[500px] mt-8 lg:mt-0 grayscale transition duration-500 hidden lg:block"
            />
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Detalles del servicio"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          className="bg-light max-w-4xl w-full p-8 relative shadow-lg border-b-[24px] border-accent"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Nuestra historia
            </h2>
            <p className="mb-4 text-gray-600"></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 hover:text-black font-bold"
            >
              &#10005;
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Nosotros;
