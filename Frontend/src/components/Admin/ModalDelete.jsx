import { FaTrash } from "react-icons/fa";
import { useState } from "react";

function ModalDelete() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FaTrash
        className="text-right text-2xl flex items-end justify-end  cursor-pointer "
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <section className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30   min-h-screen overflow-scroll">
          <div className="bg-fondo   rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] text-white flex flex-col  gap-4   overflow-auto">
            <h1 className="text-[20px] sm:text-2xl text-center md:text-3xl ">
              ¿Está seguro/a de eliminar esta promocion?
            </h1>

            <div className=" flex items-center justify-center w-full gap-2">
              <button className="bg-verde p-3 text-xl rounded-xl " onClick={() => setIsOpen(!isOpen)}>
                Volver atras
              </button>

              <button className="bg-verde p-3 text-xl rounded-xl ">
                Eliminar
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ModalDelete;
