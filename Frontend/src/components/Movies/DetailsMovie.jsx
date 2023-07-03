import { useDispatch, useSelector } from "react-redux";
import Reviews from "./Reviews";
import { useEffect } from "react";
import { fetchMovie } from "../../features/movie/movieSlice";
import { useParams } from "react-router-dom";
import { formatearFecha } from "../../logic/funciones";

function DetailsMovie() {
  const { movieID } = useParams()
  const movie = useSelector(state => state.movie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovie(movieID))
  }, [dispatch, movieID])

  const { imagen, titulo, sinopsis, genero, actoresPrincipales, franquicia, fechaPublicacion, comentarios} = movie
  
  const arrayOfActors = actoresPrincipales?.split(', ')

  return (
    <>
      <section className={`bg-[url("${imagen}")] object-cover flex flex-col justify-center items-center w-full`}>
        <div className="flex flex-col justify-center items-center p-10 bg-black/75 w-full h-full text-white ">
          <img src={imagen} className="rounded-xl" />

          <h1 className="text-left w-full text-2xl font-Coda mt-3">{titulo}</h1>

          <p className="text-left w-full text-xl font-Marcellus mt-3">
            {sinopsis}
          </p>

          <h2 className="text-left w-full text-xl font-Marcellus mt-3">Genero: {genero}</h2>

          <h2 className="text-left w-full text-xl font-Marcellus mt-3">Actores principales</h2>
          <ul className="text-left w-full text-xl font-Marcellus mt-3">
            {arrayOfActors?.map((actor, index) => 
              <li key={index}>{actor}</li>
            )}
          </ul>

          <p className="text-left w-full text-xl font-Marcellus mt-3">Franquicia que creó la película: {franquicia}</p>
          <p className="text-left w-full text-xl font-Marcellus mt-3">Fecha de creación: {formatearFecha(fechaPublicacion)}</p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center p-5">
        <h1 className="text-white text-3xl font-Coda  w-full text">Reviews</h1>
        {comentarios?.map(comentario => 
          <Reviews key={comentario._id} review={comentario}/>
        )}
      </section>
    </>
  );
}

export default DetailsMovie;
