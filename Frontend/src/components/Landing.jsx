import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Movies/Carousel";
import CardMovie from "./Movies/CardMovie";
import Searcher from "./Movies/Searcher";
import Pager from "./Pager";
import { InfinitySpin } from "react-loader-spinner";
import { toast, Toaster } from "react-hot-toast";
import { fetchMovies } from "../services/movies";

function Landing() {
  const { movies, status, currentPage, totalPages } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies) {
      dispatch(fetchMovies());
    }
  }, []);

  return (
    <>
      <Toaster />
      <Header />
      <Carousel />

      <section className="flex flex-col justify-center items-center w-full">
        <Searcher />
        {status === "loading" ? (
          <div className="fixed bg-black bg-opacity-90 w-full h-screen flex justify-center items-center z-10">
            <InfinitySpin width="200" color="#4fa94d" />
          </div>
        ) : status === "failed" ? (
          toast.error("Ha ocurrido un error")
        ) : movies.length === 0 ? (
          <h1 className="text-white text-3xl font-Coda ">No hay películas</h1>
        ) : (
          <>
            <div className="w-full flex flex-col items-center justify-center md:flex-wrap md:flex-row md:w-[80%]  xl:w-full">
              {movies.map((movie) => (
                <CardMovie key={movie._id} data={movie} />
              ))}
            </div>
            <Pager
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Landing;
