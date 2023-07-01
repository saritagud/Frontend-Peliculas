import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel() {
  return (
    <>
      <ResponsiveCarousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        className="text-verde"
      >
        <section className="bg-Card bg-cover flex flex-col justify-center items-center w-full ">
          <div className=" flex flex-col justify-center items-center p-10 bg-black/75 w-full h-full">
            <img src="src\assets\posterCars.webp" className="p-9 rounded-xl" />
            <h1 className="text-white text-center  mb-8 font-Coda -mt-20  text-4xl text">
              Guardianes de la galaxia
            </h1>
          <button className="text-white bg-verde p-3 rounded-xl font-Marcellus text-xl mb-5"> <a href="/detalles">Ver mas</a> </button>
          </div>
        </section>
      </ResponsiveCarousel>
    </>
  );
}

export default Carousel;
