import { IoAddCircleSharp } from "react-icons/io5";
import {FaWindowClose} from "react-icons/fa"
import { useState } from "react";

function ModalCreate() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IoAddCircleSharp
        className="text-right text-vino  text-4xl flex items-end justify-end mr-2 cursor-pointer  sm:text-5xl lg:text-6xl"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <form className="fixed flex justify-center items-start inset-0 backdrop-blur-sm bg-black bg-opacity-30   min-h-screen overflow-scroll">
          <div className="flex justify-end mb-3 w-full ">
            <FaWindowClose
              className=" text-2xl cursor-pointer md:text-3xl"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <section className="bg-fondo  rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] text-white flex flex-col  gap-4  m-10 overflow-auto">
            <label className="w-full text-xl">Titulo</label>
            <input
              className="w-full  rounded-xl p-2 text-black text-lg"
              type="text"
            ></input>

            <label className="w-full text-xl">Sipnosis</label>
            <textarea
              className="w-full  rounded-xl p-2 text-black text-lg"
              type="text"
            ></textarea>

            <label className="w-full text-xl">Fecha de publicación</label>
            <input
              className="w-full  rounded-xl p-2 text-black text-lg"
              type="text"
            ></input>

            <label className="w-full text-xl">Actores principales</label>
            <textarea
              className="w-full  rounded-xl p-2 text-black text-lg"
              type="text"
            ></textarea>

            <label className="w-full text-xl">Directores</label>
            <input
              className="w-full  rounded-xl p-2 text-black text-lg"
              type="text"
            ></input>

            <label className="w-full text-xl">
              Franquicia que creó la película
            </label>
            <input
              className="w-full  rounded-xl p-2 text-black text-lg"
              type="text"
            ></input>

            <button className="bg-verde p-3 text-xl rounded-xl m-8">
              Registrarse
            </button>
          </section>
        </form>
      )}
    </>
  );
}

export default ModalCreate;
