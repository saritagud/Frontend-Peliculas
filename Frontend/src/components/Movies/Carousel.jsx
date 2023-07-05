import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonDetails from "./ButtonDetails";
import { fetchMoviesLastest } from "/src/features/movies/moviesSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";
/* import { toast, Toaster } from "react-hot-toast"; */
import { useEffect } from "react";

function Carousel() {
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMoviesLastest());
    }
  }, [dispatch, status]);
  return (
    <>
      {/* <Toaster /> */}
      <ResponsiveCarousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        className="text-verde"
      >
        {status === "loading" ? (
          <div className="fixed bg-black bg-opacity-90 w-full h-screen flex justify-center items-center z-10">
            <InfinitySpin width="200" color="#4fa94d" />
          </div>
        )  : movies.length === 0 ? (
          <h1 className="text-white text-3xl font-Coda">No hay peliculas</h1>
        ) : (
          movies.movies.map((movie) => (
            <section
              key={movie._id}
              className="bg-fondo bg-cover flex flex-col justify-center items-center w-full min-h-[70vh] mb-10 sm:mb-14"
            >
              <div className=" flex flex-col justify-center items-center p-1 w-full min-h-[70vh] sm:w-[70%]">
                <img src={movie.imagen} className="p-9 rounded-xl " />
                <h1 className="text-white text-center  mb-8 font-Coda -mt-20  text-4xl text">
                  {movie.titulo}
                </h1>
                <ButtonDetails movieID={movie._id} />
              </div>
            </section>
          ))
        )}
      </ResponsiveCarousel>
    </>
  );
}

export default Carousel;
