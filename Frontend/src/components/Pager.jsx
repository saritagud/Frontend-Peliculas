import { useDispatch } from 'react-redux'
import { fetchMovies } from '../features/movies/moviesSlice'
import PropTypes from 'prop-types';

function Pager({ currentPage, totalPages }) {
   const dispatch = useDispatch()

   const hasNext = currentPage < totalPages
   const hasPrev = currentPage === 1

   const prevPage = () => {
      dispatch(fetchMovies(currentPage - 1))
   }

   const nextPage = () => {
      dispatch(fetchMovies(currentPage + 1))
   }

   const handlePage = page => {
      dispatch(fetchMovies(page))
   }

   return (
      <article className='flex justify-center items-center gap-4 my-5 sm:my-10'>
         <button
            className={`${
               hasPrev ? 'opacity-0 pointer-events-none' : ''
            } bg-verde text-white px-4 py-2 rounded-xl font-Marcellus text-lg hover:bg-verde2 md:text-2xl`}
            onClick={() => prevPage()}
         >
            Anterior
         </button>
         {[...Array(totalPages)].map((_, index) => (
            <button
               key={index}
               className={`${
                  index + 1 === currentPage ? 'bg-verde' : ''
               } hover:bg-verde2 text-white py-2 px-4 rounded-lg font-Marcellus text-lg md:text-2xl`}
               onClick={() => handlePage(index + 1)}
            >
               {index + 1}
            </button>
         ))}
         <button
            className={`${
               hasNext ? '' : 'opacity-0 pointer-events-none'
            } bg-verde text-white px-4 py-2 rounded-xl font-Marcellus text-lg hover:bg-verde2 md:text-2xl`}
            onClick={() => nextPage()}
         >
            Siguiente
         </button>
      </article>
   )
}

Pager.propTypes = {
   currentPage: PropTypes.number.isRequired,
   totalPages: PropTypes.number.isRequired
}
export default Pager
