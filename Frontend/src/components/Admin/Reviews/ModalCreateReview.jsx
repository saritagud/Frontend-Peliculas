import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";

function ModalCreateReview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-verde p-3 text-xl rounded-xl m-5 text-white font-Marcellus hover:bg-verde2"
        onClick={() => setIsOpen(true)}
      >
        Agregar pelicula
      </button>

      {isOpen && (
        <form className="fixed flex justify-center items-start inset-0 backdrop-blur-sm bg-black bg-opacity-30  min-h-screen overflow-scroll">
          <section className="bg-fondo rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] text-white flex flex-col gap-4 m-8 overflow-auto font-Marcellus">
            <div className="flex justify-end mb-3 w-full ">
              <FaWindowClose
                className="text-2xl cursor-pointer md:text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <label className="w-full text-xl">Comentario</label>
            <textarea
              className="w-full rounded-xl p-2 text-black text-lg font-sans"
              type="text"
              name="contenido"
            ></textarea>
            <button className="bg-verde p-3 text-xl rounded-xl m-8">Agregar</button>
          </section>
        </form>
      )}
    </>
  );
}

export default ModalCreateReview;
