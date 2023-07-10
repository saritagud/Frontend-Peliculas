import PropTypes from "prop-types";
import ModalDelete from "./ModalDelete";
import Pager from "../Pager";
import ModalEdit from "./ModalEdit";

function ListOfMovies({ movies, currentPage, totalPages }) {
   return (
      <>
         {
            movies.length === 0 ? (
               <h1 className="text-white text-3xl font-Coda">No hay comentarios aun</h1>
            ) : (
               <>
                  {movies.map((movie) => (
                     <div
                        key={movie._id}
                        className="bg-white p-5 rounded-xl w-full flex justify-between items-center font-Marcellus text-xl md:text-2xl lg:p-7 2xl:p-10 2xl:text-3xl  dark:bg-verde/40"
                     >
                        <p>{movie.titulo}</p>
                        <div className="flex items-center justify-center gap-2">
                           <ModalEdit data={movie} />
                           <ModalDelete id={movie._id} />
                        </div>
                     </div>
                  ))}
                  {currentPage && 
                     <Pager
                        currentPage={currentPage}
                        totalPages={totalPages}
                     />
                  }
               </>
            )
         }
      </>
   )
}

ListOfMovies.propTypes = {
   movies: PropTypes.array.isRequired,
   currentPage: PropTypes.number,
   totalPages: PropTypes.number,
};

export default ListOfMovies