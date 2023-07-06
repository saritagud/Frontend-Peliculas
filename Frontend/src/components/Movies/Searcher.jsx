import { FaSearch } from "react-icons/fa";

function Searcher() {
  return (
    <>
      <section className="flex justify-end items-center w-full p-8">
        <input
          type="text"
          placeholder="Buscar peliculas"
          className="p-3 rounded-xl bg-verde text-white placeholder-white mr-5 font-Marcellus text-lg w-[60%] sm:w-[40%] md:text-xl xl:text-2xl xl:w-[30%] 2xl:text-3xl 2xl:p-5 2xl:mr-20 "
        ></input>
        <FaSearch className="text-white -ml-14 text-lg 2xl:text-3xl 2xl:-ml-32" />
      </section>
    </>
  );
}

export default Searcher;
