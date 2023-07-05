import Header from "../Header";
import Footer from "../Footer";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/movies/moviesSlice";
import { fetchReviews } from "../../features/reviews/reviewsSlice";
import { useEffect, useState } from "react";
import ModalCreate from "./ModalCreate";
import Pager from "../Pager";
import { InfinitySpin } from "react-loader-spinner";
import { toast, Toaster } from "react-hot-toast";
import ModalDeleteReview from "./Reviews/ModalDeleteReview"
import ModalEditReview from "./Reviews/ModalEditReview"

function Dashboard() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const reviews = useSelector((state) => state.reviews);
  const status = useSelector((state) => state.movies.status);
  const [contentMode, setContentMode] = useState(true);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (contentMode === false) {
      dispatch(fetchReviews());
    }
  }, [dispatch, contentMode]);

  const handleContentButtonClick = (mode) => {
    setContentMode(mode);
  };

  return (
    <>
      <Toaster />
      <Header />
      <section className="min-h-screen flex flex-col items-center p-5 gap-5 w-full">
        <h1 className="text-white text-3xl font-Coda mt-10">Admin</h1>
        <div className=" flex justify-end w-full gap-5">
          <button
            className="bg-verde p-2 rounded-xl text-lg font-Marcellus text-white"
            onClick={() => handleContentButtonClick(true)}
          >
            Peliculas
          </button>
          <button
            className="bg-verde p-2 rounded-xl text-lg font-Marcellus text-white"
            onClick={() => handleContentButtonClick(false)}
          >
            Reviews
          </button>
        </div>

        <ModalCreate />

        <div className="border-2 w-full"></div>

        {status === "loading" ? (
          <div className="fixed bg-black bg-opacity-90 w-full h-screen flex justify-center items-center z-10">
            <InfinitySpin width="200" color="#4fa94d" />
          </div>
        ) : status === "failed" ? (
          toast.error("Ha ocurrido un error")
        ) : contentMode === true && movies.length === 0 ? (
          <h1>No hay peliculas</h1>
        ) : contentMode === "reviews" && reviews.reviews.length === 0 ? (
          <h1>No hay reviews</h1>
        ) : contentMode === true ? (
          movies.movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-white p-5 rounded-xl w-full flex justify-between font-Marcellus text-xl"
            >
              <p>{movie.titulo}</p>

              <div className="flex gap-2">
                <ModalEdit data={movie} />
                <ModalDeleteReview id={movie._id} />
              </div>
            </div>
          ))
        ) : (
          contentMode === false &&
          reviews.reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white p-5 rounded-xl w-full flex justify-between font-Marcellus text-xl"
            >
              <p>{review.usuario}</p>
              <div className="flex gap-2">
                <ModalEditReview data={review} />
                <ModalDelete id={review._id} />
              </div>
            </div>
          ))
        )}

        {contentMode === true && movies.currentPage && (
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
