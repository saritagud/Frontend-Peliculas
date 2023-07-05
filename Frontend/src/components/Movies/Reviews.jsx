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
        <section className="flex flex-col justify-center items-center text-white w-[80%] p-5 mt-5 border-r-2 border-b-2 border-opacity-20 border-solid border-black">
          <h2 className="font-Coda w-full ">@{usuario.usuario}</h2>
          <div className="border-2 w-full "></div>
          <p className="font-Marcellus">{contenido}</p>
        </section>
      )}
    </>
  );
}

Reviews.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Reviews;
