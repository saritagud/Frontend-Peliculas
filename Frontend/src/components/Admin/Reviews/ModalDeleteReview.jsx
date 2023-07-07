import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import { decodeToken } from "react-jwt";

function ModalDeleteReview({ id, deleteAction }) {
  const [isOpen, setIsOpen] = useState(false);
  // const status = useSelector((state) => state.movie.status);
  const dispatch = useDispatch()
  const token = JSON.parse(localStorage.getItem('token'))
  const {id: userID, isAdmin} = decodeToken(token).data
  const deleteAReview = () => {
    const datos = {
      body: {
        usuarioId: userID,
        isAdmin
      },
      reviewID: id
    }
    dispatch(deleteAction({ datos }));
    setIsOpen(false);
    if (status == "succeeded") {
      toast.success("Se ha eliminado correctamente");
    }
  };

  return (
    <>
      <FaTrash
        className="text-right text-2xl flex items-end justify-end cursor-pointer hover:text-verde"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <section className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 min-h-screen overflow-scroll">
          <div className="bg-fondo rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] text-white flex flex-col gap-4 overflow-auto">
            <h1 className="text-[20px] sm:text-2xl text-center md:text-3xl">
              ¿Está seguro/a de eliminar este comentario?
            </h1>

            <div className="flex items-center justify-center w-full gap-2">
              <button
                className="bg-verde p-3 text-xl rounded-xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                Volver atrás
              </button>

              <button
                className="bg-verde p-3 text-xl rounded-xl 2xl:text-2xl"
                onClick={deleteAReview}
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

ModalDeleteReview.propTypes = {
  id: PropTypes.string.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default ModalDeleteReview;
