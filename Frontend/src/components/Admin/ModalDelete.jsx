import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { toast, Toaster } from "react-hot-toast";
import { deleteMovie } from "../../services/movies";

function ModalDelete({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.movies.status);
  const token = JSON.parse(localStorage.getItem("token"))

  const deleteAMovie = () => {
    const datos = {
      movieID: id,
      token
    };
    dispatch(deleteMovie({datos}));
    setIsOpen(false);
    if (status == "succeeded") {
      toast.success("Se ha eliminado correctamente");
    }
  };

  return (
    <>
      <Toaster />
      <FaTrash
        className="text-right text-2xl flex items-end justify-end cursor-pointer hover:text-verde 2xl:text-4xl"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <section className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 min-h-screen overflow-scroll">
          <div className="bg-fondo rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] text-white flex flex-col gap-4 overflow-auto 2xl:p-10">
            <h1 className="text-[20px] sm:text-2xl text-center md:text-3xl 2xl:text-4xl">
              ¿Está seguro/a de eliminar esta pelicula?
            </h1>

            <div className="flex items-center justify-center w-full gap-2 2xl:gap-5">
              <button
                className="bg-verde p-3 text-xl rounded-xl 2xl:text-2xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                Volver atrás
              </button>

              <button
                className="bg-verde p-3 text-xl rounded-xl 2xl:text-2xl"
                onClick={deleteAMovie}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Eliminando..." : "Eliminar"}
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

ModalDelete.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ModalDelete;
