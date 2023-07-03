/* FaArrowLeft */

function Reviews({ review }) {
  const { _id, usuario, contenido } = review
  return (
    <>
      <section className="flex flex-col justify-center items-center text-white w-[80%] p-5 mt-5 border-r-2 border-b-2 border-opacity-20 border-solid border-black">
        <h2 className="font-Coda w-full ">@{usuario.usuario}</h2>
        <div className="border-2 w-full "></div>
        <p className="font-Marcellus">
          {contenido}
        </p>
      </section>
    </>
  );
}

export default Reviews;
