import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterMovies } from "../../services/movies";

function Searcher() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault()
    const search = {
      palabraClave: e.target.search.value
    }
    dispatch(filterMovies(search))
  }
  return (
    <>
      <section className="flex justify-end items-center w-full p-5">
        <form className="flex justify-end items-center w-full" onSubmit={handleSubmit}>
          <input
            name="search"
            type="text"
            placeholder="Buscar peliculas"
            className="p-3 rounded-xl bg-verde text-white placeholder-white mr-5 font-Marcellus text-lg w-[60%] sm:w-[40%] md:text-xl xl:text-2xl xl:w-[30%] 2xl:text-3xl 2xl:p-5 2xl:mr-20 "
          />
          <button>
            <FaSearch className="text-white -ml-14 text-lg 2xl:text-3xl 2xl:-ml-32" />
          </button>
        </form>
      </section>
    </>
  );
}

export default Searcher;
