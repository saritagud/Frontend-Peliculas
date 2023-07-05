import { formatearFecha } from "../../logic/funciones";
import ButtonDetails from "./ButtonDetails";
import PropTypes from "prop-types";

function CardMovie({ data }) {
  const { _id, imagen, titulo, fechaPublicacion } = data;
  return (
    <>
      <section className=" m-6 text-white w-[60%] ">
        <div className=" w-full">
          <img src={imagen} className="rounded-xl" />
          
          <div className=" flex justify-center items-end cursor-pointer opacity-0 transition-all duration-500 w-full hover:opacity-100 h-full -mt-32">
          <ButtonDetails movieID={_id} />
          </div>
        </div>

        <h1 className="font-Coda mt-16 text-left w-full tracking-wide">
        {titulo}
        </h1>
        <h2 className="font-Marcellus w-full mt-2">          {formatearFecha(fechaPublicacion)}</h2>
      </section>

      
    </>
  );
}

CardMovie.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardMovie;
