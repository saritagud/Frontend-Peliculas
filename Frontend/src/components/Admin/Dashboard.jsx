import Header from '../Header'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import ModalCreate from './ModalCreate'
import { InfinitySpin } from 'react-loader-spinner'
import ListOfMovies from './ListOfMovies'
import ListOfReviews from './Reviews/ListOfReviews'
import { fetchReviews } from '../../features/reviews/reviewsSlice'
import { fetchMovies } from '../../features/movies/moviesSlice'

function Dashboard() {
   const { movies, status, currentPage, totalPages } = useSelector(
      state => state.movies
   )
   const { reviews, status: statusReview } = useSelector(state => state.reviews)
   const [data, setData] = useState('movies')
   const dispatch = useDispatch()

   useEffect(() => {
      if (movies) {
         dispatch(fetchMovies())
      }
   }, [])

   const handleData = data => {
      if (data === 'movies') {
         setData(data)
         dispatch(fetchMovies())
      } else {
         setData(data)
         dispatch(fetchReviews())
      }
   }

   return (
      <>
         <Header />
         <section className='min-h-screen flex flex-col items-center p-5 gap-5 w-full sm:p-14 sm:gap-8 lg:p-32 lg:gap-12'>
            <h1 className='text-white text-3xl font-Coda mt-10 sm:text-4xl lg:text-5xl  '>
               Admin
            </h1>
            <div className=' flex justify-end w-full gap-5'>
               <button
                  className='bg-verde p-2 rounded-xl text-lg font-Marcellus text-white hover:bg-verde2 md:text-xl 2xl:text-3xl 2xl:p-5'
                  onClick={() => handleData('movies')}
                  disabled={data === 'movies'}
               >
                  Peliculas
               </button>
               <button
                  className='bg-verde p-2 rounded-xl text-lg font-Marcellus text-white hover:bg-verde2 md:text-xl 2xl:text-3xl 2xl:p-5'
                  onClick={() => handleData('reviews')}
                  disabled={data === 'reviews'}
               >
                  Reviews
               </button>
            </div>


            {data === 'movies' ? (
               <>
                  <ModalCreate />
                  
                  <div className='border-2 w-full'></div>

                  {status === 'loading' ? (
                     <div className='fixed bg-black bg-opacity-90 w-full h-screen flex justify-center items-center z-10'>
                        <InfinitySpin
                           width='200'
                           color='#4fa94d'
                        />
                     </div>
                  ) : (
                     <ListOfMovies
                        movies={movies}
                        currentPage={currentPage}
                        totalPages={totalPages}
                     />
                  )}
               </>
            ) : statusReview === 'loading' ? (
               <div className='fixed bg-black bg-opacity-90 w-full h-screen flex justify-center items-center z-10'>
                  <InfinitySpin
                     width='200'
                     color='#4fa94d'
                  />
               </div>
            ) : (
               <ListOfReviews reviews={reviews} />
            )}
         </section>
         <Footer />
      </>
   )
}

export default Dashboard
