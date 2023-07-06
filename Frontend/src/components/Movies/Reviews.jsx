/* FaArrowLeft */
import PropTypes from "prop-types";

function Reviews({ review }) {
  const { usuario, contenido } = review;
  return (
    <>
      {review.length === 0 ? (
        <h1 className="text-white text-3xl font-Coda">
          Por el momento no existen Reviews
        </h1>
      ) : (
        <section className="flex flex-col justify-start items-center text-white w-full p-5 mt-5 border-r-2 border-b-2 border-opacity-20 border-solid border-black min-h-[30vh] sm:w-[80%] sm:border-r-4 sm:border-b-4 gap-3 md:text-xl">
          <h2 className="font-Coda w-full">@{usuario.usuario}</h2>
          <div className="border-2 w-full "></div>
          <p className="font-Marcellus w-full sm:text-xl">{contenido}</p>
        </section>
      )}
    </>
  );
}

Reviews.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Reviews;
