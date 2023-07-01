import Reviews from "./Reviews";

function DetailsMovie() {

  return (
    <>
      <section className="bg-Card bg-cover  flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center p-10 bg-black/75 w-full h-full text-white ">
          <img src="src\assets\posterCars.webp" className="rounded-xl" />

          <h1 className="text-left w-full text-2xl font-Coda mt-3">Titulo</h1>

          <p className="text-left w-full text-xl font-Marcellus mt-3">
            Aunque sigue afectado por la pérdida de Gamora, Peter Quill debe
            reunir a su equipo para defender el universo de una nueva amenaza o,
            en caso de fracasar, será el final de los Guardianes.
          </p>

          <h2 className="text-left w-full text-xl font-Marcellus mt-3">Genero: Accion</h2>

          <h2 className="text-left w-full text-xl font-Marcellus mt-3">Actores principales</h2>
          <ul className="text-left w-full text-xl font-Marcellus mt-3">
            <li>Chris pratt</li>
          </ul>

          <p className="text-left w-full text-xl font-Marcellus mt-3">Franquicia que creó la película: Marvel Studios</p>
          <p className="text-left w-full text-xl font-Marcellus mt-3">Fecha de creación: 4 de mayo de 2023 </p>
        </div>
      </section>

      <section>
        <h1 className="text-white text-3xl font-Coda m-5">Reviews</h1>

        <Reviews/>
      </section>
    </>
  );
}

export default DetailsMovie;
