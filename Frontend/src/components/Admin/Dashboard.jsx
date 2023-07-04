import Header from '../Header'
import Footer from '../Footer'
import ModalEdit from './ModalEdit'
import ModalDelete from './ModalDelete'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../features/movies/moviesSlice'
import { useEffect } from 'react'
import ModalCreate from './ModalCreate'

function Dashboard() {
   const movies = useSelector(state => state.movies)
   const dispatch = useDispatch()

   useEffect(() => {
      if (movies.movies.length === 0) {
         dispatch(fetchMovies())
      }
   }, [dispatch, movies])

   return (
      <>
         <Header />
         <section className='min-h-screen flex flex-col  items-center p-5 gap-5'>
            <h1 className='text-white text-3xl font-Coda mt-10'>Admin</h1>
            <div className=' flex justify-end w-full gap-5'>
               <button className='bg-verde p-2 rounded-xl text-lg font-Marcellus text-white'>
                  Peliculas
               </button>
               <button className='bg-verde p-2 rounded-xl text-lg font-Marcellus text-white'>
                  Reviews
               </button>
            </div>

            <ModalCreate />

            <div className='border-2 w-full'></div>

            {movies.movies.length === 0 ? (
               // Esto ⬇️ hay que mejorarlo
               <h1>no hay movies</h1>
            ) : (
               movies.movies.map(movie => (
                  <div
                     key={movie._id}
                     className='bg-white p-5 rounded-xl w-full flex justify-between font-Marcellus text-xl'
                  >
                     <p>{movie.titulo}</p>

                     <div className='flex gap-2'>
                        <ModalEdit data={movie} />
                        <ModalDelete id={movie._id}/>
                     </div>
                  </div>
               ))
            )}
         </section>
         <Footer />
      </>
   )
}

export default Dashboard
