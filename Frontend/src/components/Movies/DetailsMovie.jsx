import { useDispatch, useSelector } from "react-redux";
import Reviews from "./Reviews";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatearFecha } from "../../logic/funciones";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import ModalCreateReview from "../Admin/Reviews/ModalCreateReview";
import { fetchMovie } from "../../services/movie";

function DetailsMovie() {
  const { movieID } = useParams();
  const { movie, status } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const navegar = useNavigate();

  useEffect(() => {
    dispatch(fetchMovie(movieID));
  }, [dispatch, movieID]);

  const {
    imagen,
    titulo,
    sinopsis,
    genero,
    actoresPrincipales,
    franquicia,
    fechaPublicacion,
    comentarios,
  } = movie;
  console.log(comentarios);
  const arrayOfActors = actoresPrincipales?.split(", ");

  return (
    <>
      {status === "loading" ? (
        <div className="fixed bg-black bg-opacity-90 w-full h-screen flex justify-center items-center z-10">
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : (
        <div>
          <section
            className={
              "bg-black flex flex-col justify-start items-start w-full dark:bg-green-100"
            }
          >
            <IoMdArrowRoundBack
              className="text-white text-4xl m-5 text-left xl:text-5xl xl:m-10 cursor-pointer dark:text-black"
              onClick={() => navegar("/")}
            />
            <div className="flex flex-col justify-center items-center p-10 w-full h-full text-white md:p-20  lg:p-32 lg:pt-5 xl:flex-row xl:gap-10 xl:p-20 xl:items-start dark:text-black">
              <img
                src={imagen}
                className="rounded-xl sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[35%]"
                alt={titulo}
              />

              <div className="w-full xl:flex xl:flex-col xl:gap-5">
                <h1 className="text-left w-full text-2xl font-Coda mt-3 lg:mt-5 2xl:text-3xl ">
                  {titulo}
                </h1>

                <p className="text-left w-full text-xl font-Marcellus mt-3 2xl:text-3xl ">
                  {sinopsis}
                </p>

                <h2 className="text-left w-full text-xl font-Marcellus mt-3 2xl:text-3xl ">
                  Género: {genero}
                </h2>

                <h2 className="text-left w-full text-xl font-Marcellus mt-3 2xl:text-3xl ">
                  Actores principales
                </h2>
                <ul className="text-left w-full text-xl font-Marcellus mt-3 2xl:text-3xl ">
                  {arrayOfActors?.map((actor, index) => (
                    <li key={index}>{actor}</li>
                  ))}
                </ul>

                <p className="text-left w-full text-xl font-Marcellus mt-3 2xl:text-3xl ">
                  Franquicia que creó la película: {franquicia}
                </p>
                <p className="text-left w-full text-xl font-Marcellus mt-3 2xl:text-3xl ">
                  Fecha de publicación: {formatearFecha(fechaPublicacion)}
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col justify-center items-center p-5  xl:p-10 dark:bg-slate-50">
            <h1 className="text-white text-3xl font-Coda w-full xl:text-5xl dark:text-black">
              Reviews
            </h1>
            <ModalCreateReview />

            <div className="w-full flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:gap-5">
              {comentarios?.map((comentario) => (
                <Reviews key={comentario._id} review={comentario} />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default DetailsMovie;
