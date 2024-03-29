/* FaArrowLeft */
import PropTypes from "prop-types";
import ModalDeleteReview from "../Admin/Reviews/ModalDeleteReview";
import { decodeToken } from "react-jwt";
import { deleteReview } from "../../services/movie";

function Reviews({ review }) {
  const tokenLS = JSON.parse(localStorage.getItem("token"));
  const { data } = decodeToken(tokenLS);

  const { contenido } = review;
  return (
    <>
      {review.length === 0 ? (
        <h1 className="text-white text-3xl font-Coda">
          Por el momento no existen Reviews
        </h1>
      ) : (
        <section className="flex flex-col justify-start items-center text-white w-full p-5 mt-5 border-r-2 border-b-2 border-opacity-20 border-solid border-black min-h-[30vh] sm:w-[45%] sm:border-r-4 sm:border-b-4 gap-3 md:text-xl xl:w-[30%]  dark:bg-green-100 dark:text-black">
          <div className="w-full flex justify-between ">
            <h2 className="font-Coda w-full">
              @{review.usuario.usuario}
            </h2>
            {data.isAdmin || data.id === review.usuario._id && (
                <ModalDeleteReview
                  id={review._id}
                  deleteAction={deleteReview}
                />
              )}
          </div>
          <div className="border-2 w-full dark:border-verde3"></div>
          <p className="font-Marcellus w-full sm:text-xl 2xl:text-2xl ">
            {contenido}
          </p>
        </section>
      )}
    </>
  );
}

Reviews.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Reviews;
