import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decodeToken } from "react-jwt";
import { addReview } from "../../../services/movie";

function ModalCreateReview() {
  const [isOpen, setIsOpen] = useState(false);
  const { movieID } = useParams();
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token"));
  const userID = decodeToken(token).data.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      usuarioId: userID,
      contenido: e.target.contenido.value,
    };
    const datos = {
      body,
      movieID,
    };
    dispatch(addReview({ datos }));
  };

  return (
    <>
      <button
        className="bg-verde p-3 text-xl rounded-xl m-5 text-white font-Marcellus hover:bg- md:text-2xl 2xl:text-3xl 2xl:p-5"
        onClick={() => setIsOpen(true)}
      >
        Agregar Review
      </button>

      {isOpen && (
        <form
          className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30  min-h-screen overflow-scroll"
          onSubmit={handleSubmit}
        >
          <section className="bg-fondo rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] text-white flex flex-col items-center gap-4 m-8 overflow-auto font-Marcellus dark:bg-verde2">
            <div className="flex justify-end mb-3 w-full ">
              <FaWindowClose
                className="text-2xl cursor-pointer md:text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Comentario
            </label>
            <textarea
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4 min-h-[30vh] xl:min-h-[50vh] "
              type="text"
              name="contenido"
            ></textarea>
            <button className="bg-verde p-3 text-xl rounded-xl m-8 md:text-2xl md:w-[40%] 2xl:text-3xl 2xl:p-5 dark:bg-white dark:text-black">
              Agregar
            </button>
          </section>
        </form>
      )}
    </>
  );
}

export default ModalCreateReview;
