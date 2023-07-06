import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonDetails from "./ButtonDetails";
import { useSelector, useDispatch } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";
/* import { toast, Toaster } from "react-hot-toast"; */
import { useEffect } from "react";
import { fetchMoviesLastest } from "../../features/latestMovies/latestMovies";

function Carousel() {
  const { latestMovies, status } = useSelector((state) => state.latestMovies);
  console.log(latestMovies);
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
        ) : latestMovies.length === 0 ? (
          <h1 className="text-white text-3xl font-Coda">No hay peliculas</h1>
        ) : latestMovies.latestMovies ? (
          latestMovies.latestMovies.map((movie) => (
            <section
              key={movie._id}
              className="bg-fondo bg-cover flex flex-col justify-center items-center w-full min-h-[70vh] mb-10 sm:mb-14 "
            >
              <div className=" flex flex-col justify-center items-center p-1 w-full min-h-[70vh] sm:w-[70%] md:w-[60%] lg:w-[45%] xl:flex-row xl:w-[40%] xl:gap-8">
                <img
                  src={movie.imagen}
                  className="p-9 rounded-xl  lg:rounded-3xl"
                />
                <div className="w-full">
                  <h1 className="text-white text-center  mb-8 font-Coda -mt-20  text-4xl lg:text-5xl w-full xl:mt-0 ">
                    {movie.titulo}
                  </h1>
                  <ButtonDetails movieID={movie._id} />
                </div>
              </div>
            </section>
          ))
        ) : (
          latestMovies.latestMovies.map((movie) => (
            <section
              key={movie._id}
              className="bg-fondo bg-cover flex flex-col justify-center items-center w-full min-h-[70vh] mb-10 sm:mb-14 "
            >
              <div className=" flex flex-col justify-center items-center p-1 w-full min-h-[70vh] sm:w-[70%] md:w-[60%] lg:w-[45%] xl:flex-row xl:w-[40%] xl:gap-8">
                <img
                  src={movie.imagen}
                  className="p-9 rounded-xl  lg:rounded-3xl"
                />
                <div className="w-full">
                  <h1 className="text-white text-center  mb-8 font-Coda -mt-20  text-4xl lg:text-5xl w-full xl:mt-0 ">
                    {movie.titulo}
                  </h1>
                  <ButtonDetails movieID={movie._id} />
                </div>
              </div>
            </section>
          ))
        )}
      </ResponsiveCarousel>
    </>
  );
}

export default Carousel;
