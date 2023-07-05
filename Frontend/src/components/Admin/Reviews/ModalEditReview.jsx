import { useState } from "react";
import { FaPencilAlt, FaWindowClose } from "react-icons/fa";
import PropTypes from "prop-types";

function ModalEditReview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FaPencilAlt
        className="text-right text-2xl flex items-end justify-end cursor-pointer hover:text-verde"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <form className="fixed flex justify-center items-start inset-0 backdrop-blur-sm bg-black bg-opacity-30 min-h-screen overflow-scroll">
          <section className="bg-fondo rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] text-white flex flex-col gap-4 m-10 overflow-auto">
            <div className="flex justify-end mb-3 w-full">
              <FaWindowClose
                className="text-2xl cursor-pointer md:text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <label className="w-full text-xl">Imagen</label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg"
              type="file"
              name="image"
            />

            <label className="w-full text-xl">Titulo</label>
            <label className="w-full text-xl">Comentario</label>
            <textarea
              className="w-full rounded-xl p-2 text-black text-lg font-sans"
              type="text"
              name="contenido"
            ></textarea>
            <button className="bg-verde p-3 text-xl rounded-xl m-8">
              Agregar
            </button>
          </section>
        </form>
      )}
    </>
  );
}

ModalEditReview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ModalEditReview;
