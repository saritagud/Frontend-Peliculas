import { useDispatch } from 'react-redux'
import { fetchMovies } from '../features/movies/moviesSlice'

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
      <article className='flex justify-center items-center gap-4 my-5'>
         <button
            className={`${
               hasPrev ? 'opacity-0 pointer-events-none' : ''
            } bg-blue-500 text-white px-4 py-2 rounded`}
            onClick={() => prevPage()}
         >
            Anterior
         </button>
         {[...Array(totalPages)].map((_, index) => (
            <button
               key={index}
               className={`${
                  index + 1 === currentPage ? 'bg-verde' : ''
               } hover:bg-green-600 text-white py-2 px-4 rounded`}
               onClick={() => handlePage(index + 1)}
            >
               {index + 1}
            </button>
         ))}
         <button
            className={`${
               hasNext ? '' : 'opacity-0 pointer-events-none'
            } bg-blue-500 text-white px-4 py-2 rounded`}
            onClick={() => nextPage()}
         >
            Siguiente
         </button>
      </article>
   )
}

export default Pager
