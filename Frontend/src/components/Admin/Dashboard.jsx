import Header from "../Header";
import Footer from "../Footer";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/movies/moviesSlice";
import { useEffect } from "react";
import ModalCreate from "./ModalCreate";
import Pager from "../Pager";
import { InfinitySpin } from "react-loader-spinner";

function Dashboard() {
  const { movies, status } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  console.log(movies);

  useEffect(() => {
    if (movies) {
      dispatch(fetchMovies());
    }
  }, []);

  return (
    <>
      <Header />
      <section className="min-h-screen flex flex-col items-center p-5 gap-5 w-full sm:p-14 sm:gap-8 lg:p-32 lg:gap-12">
        <h1 className="text-white text-3xl font-Coda mt-10 sm:text-4xl lg:text-5xl  ">
          Admin
        </h1>
        <div className=" flex justify-end w-full gap-5">
          <button className="bg-verde p-2 rounded-xl text-lg font-Marcellus text-white hover:bg-verde2 md:text-xl">
            Peliculas
          </button>
          <button className="bg-verde p-2 rounded-xl text-lg font-Marcellus text-white hover:bg-verde2 md:text-xle">
            Reviews
          </button>
        </div>

        <ModalCreate />

        <div className="border-2 w-full"></div>

        {status === "loading" ? (
          <div className="fixed bg-black bg-opacity-90 w-full h-screen flex justify-center items-center z-10">
            <InfinitySpin width="200" color="#4fa94d" />
          </div>
        ) : movies.length === 0 ? (
          <h1 className="text-white text-3xl font-Coda">No hay peliculas</h1>
        ) : movies.movies ? (
          movies.movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-white p-5 rounded-xl w-full flex justify-between items-center font-Marcellus text-xl md:text-2xl lg:p-7"
            >
              <p>{movie.titulo}</p>
              <div className="flex items-center justify-center gap-2">
                <ModalEdit data={movie} />
                <ModalDelete id={movie._id} />
              </div>
            </div>
          ))
        ) : (
          movies.latestMovies.map((movie) => (
            <div
              key={movie._id}
              className="bg-white p-5 rounded-xl w-full flex justify-between font-Marcellus text-xl lg:p-7"
            >
              <p>{movie.titulo}</p>
              <div className="flex gap-2">
                <ModalEdit data={movie} />
                <ModalDelete id={movie._id} />
              </div>
            </div>
          ))
        )}
        {movies.currentPage && (
          <Pager
            currentPage={movies.currentPage}
            totalPages={movies.totalPages}
          />
        )}
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
