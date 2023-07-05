import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Movies/Carousel";
import CardMovie from "./Movies/CardMovie";
import Searcher from "./Movies/Searcher";
import Pager from "./Pager";
import { InfinitySpin } from "react-loader-spinner";
import { toast, Toaster } from "react-hot-toast";

function Landing() {
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies) {
      dispatch(fetchMovies());
    }
  }, []);

  console.log(movies);

  return (
    <>
      <Toaster />
      <Header />
      <Carousel />

      <section className="flex flex-col justify-center items-center">
        <Searcher />
        {status === "loading" ? (
          <div className="fixed bg-black bg-opacity-90 w-full h-screen flex justify-center items-center z-10">
            <InfinitySpin width="200" color="#4fa94d" />
          </div>
        ) : status === "failed" ? (
          toast.error("Ha ocurrido un error")
        ) : movies.length === 0 ? (
          <h1 className="text-white text-3xl font-Coda">No hay peliculas</h1>
        ) : movies.movies ? (
          movies.movies.map((movie) => (
            <CardMovie key={movie._id} data={movie} />
          ))
        ) : (
          movies.latestMovies.map((movie) => (
            <CardMovie key={movie._id} data={movie} />
          ))
        )}
        <Pager
          currentPage={movies.currentPage}
          totalPages={movies.totalPages}
        />
      </section>
      <Footer />
    </>
  );
}

export default Landing;
