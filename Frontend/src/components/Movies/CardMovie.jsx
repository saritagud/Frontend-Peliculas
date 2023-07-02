import ButtonDetails from "../Movies/ButtonDetails";

function CardMovie() {
  return (
    <>
      <section className=" m-6 text-white w-full flex flex-col justify-center items-center ">
        
        <div className="bg-Card bg-cover flex flex-col justify-center items-center  rounded-xl h-[60vh] w-[80%]">
          <div className="flex flex-col justify-end items-center p-5 bg-black/75 w-full h-full rounded-xl opacity-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
            <ButtonDetails />
          </div>
        </div>
        <h1 className="font-Coda  text-left text-lg w-[80%] mt-3">
          Nombre peli
        </h1>
        <h2 className="font-Marcellus text-lg mt-2 w-[80%]">Fecha peli</h2>

      </section>
    </>
  );
}

export default CardMovie;
