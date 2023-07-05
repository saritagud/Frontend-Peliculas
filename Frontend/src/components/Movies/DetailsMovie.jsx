import { useDispatch, useSelector } from "react-redux";
import Reviews from "./Reviews";
import { useEffect } from "react";
import { fetchMovie } from "../../features/movie/movieSlice";
import { useParams } from "react-router-dom";
import { formatearFecha } from "../../logic/funciones";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

function DetailsMovie() {
  const { movieID } = useParams();
  const movies = useSelector((state) => state.movie.movie);
  const status = useSelector((state) => state.movie.status);
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
  } = movies;

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
              "bg-black flex flex-col justify-start items-start w-full"
            }
          >
            <IoMdArrowRoundBack
              className="text-white text-4xl m-5 text-left "
              onClick={() => navegar("/")}
            />
            <div className="flex flex-col justify-center items-center p-10 w-full h-full text-white ">
              <img src={imagen} className="rounded-xl sm:w-[70%]" alt={titulo} />

              <h1 className="text-left w-full text-2xl font-Coda mt-3">
                {titulo}
              </h1>

              <p className="text-left w-full text-xl font-Marcellus mt-3">
                {sinopsis}
              </p>

              <h2 className="text-left w-full text-xl font-Marcellus mt-3">
                Género: {genero}
              </h2>

              <h2 className="text-left w-full text-xl font-Marcellus mt-3">
                Actores principales
              </h2>
              <ul className="text-left w-full text-xl font-Marcellus mt-3">
                {arrayOfActors?.map((actor, index) => (
                  <li key={index}>{actor}</li>
                ))}
              </ul>

              <p className="text-left w-full text-xl font-Marcellus mt-3">
                Franquicia que creó la película: {franquicia}
              </p>
              <p className="text-left w-full text-xl font-Marcellus mt-3">
                Fecha de publicación: {formatearFecha(fechaPublicacion)}
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center items-center p-5">
            <h1 className="text-white text-3xl font-Coda  w-full text">
              Reviews
            </h1>
            {comentarios?.map((comentario) => (
              <Reviews key={comentario._id} review={comentario} />
            ))}
          </section>
        </div>
      )}
    </>
  );
}

export default DetailsMovie;
