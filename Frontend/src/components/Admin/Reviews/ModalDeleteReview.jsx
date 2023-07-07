import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import { deleteReview } from "../../../features/reviews/reviewsSlice";

function ModalDeleteReview({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const status = useSelector((state) => state.reviews.status);
  const dispatch = useDispatch()

  const deleteAReview = () => {
    dispatch(deleteReview(id));
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
};

export default ModalDeleteReview;
