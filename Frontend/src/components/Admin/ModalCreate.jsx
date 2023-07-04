import { IoAddCircleSharp } from 'react-icons/io5'
import { FaWindowClose } from 'react-icons/fa'
import { useState } from 'react'
import { addMovie } from '../../features/movies/moviesSlice'
import { useDispatch } from 'react-redux'

function ModalCreate() {
   const [isOpen, setIsOpen] = useState(false)
   const dispatch = useDispatch()
   const [movie, setMovie] = useState({
      image: null,
      titulo: '',
      sinopsis: '',
      genero: '',
      actoresPrincipales: '',
      directores: '',
      franquicia: '',
      fechaPublicacion: ''
   })

   const handleFile = e => {
      console.log(e.target.files[0]);
      let selectFile = e.target.files[0]
      if (!selectFile) return
      setMovie({
         ...movie,
         [e.target.name]: selectFile
      })
   }

   const handleChange = e => {
      setMovie({
         ...movie,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault()
      console.log(movie)
      const body = new FormData()
      movie.image !== '' && (body.append('image', movie.image))
      movie.titulo !== '' && (body.append('titulo', movie.titulo))
      movie.sinopsis !== '' && (body.append('sinopsis', movie.sinopsis))
      movie.genero !== '' && (body.append('genero', movie.genero))
      movie.actoresPrincipales !== '' && (body.append('actoresPrincipales', movie.actoresPrincipales))
      movie.directores !== '' && (body.append('directores', movie.directores))
      movie.franquicia !== '' && (body.append('franquicia', movie.franquicia))
      movie.fechaPublicacion !== '' && (body.append('fechaPublicacion', movie.fechaPublicacion))
      dispatch(addMovie(body))
      setIsOpen(false)
   }

   return (
      <>
         <IoAddCircleSharp
            className='text-right text-vino  text-4xl flex items-end justify-end mr-2 cursor-pointer  sm:text-5xl lg:text-6xl'
            onClick={() => setIsOpen(true)}
         />

         {isOpen && (
            <form
               className='fixed flex justify-center items-start inset-0 backdrop-blur-sm bg-black bg-opacity-30   min-h-screen overflow-scroll'
               onSubmit={handleSubmit}
            >
               <div className='flex justify-end mb-3 w-full '>
                  <FaWindowClose
                     className=' text-2xl cursor-pointer md:text-3xl'
                     onClick={() => setIsOpen(false)}
                  />
               </div>
               <section className='bg-fondo  rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] text-white flex flex-col  gap-4  m-10 overflow-auto'>
                  <label className='w-full text-xl'>Imagen</label>
                  <input
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='file'
                     name='image'
                     onChange={handleFile}
                  />

                  <label className='w-full text-xl'>Titulo</label>
                  <input
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='titulo'
                     onChange={handleChange}
                  />

                  <label className='w-full text-xl'>Genero</label>
                  <input
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='genero'
                     onChange={handleChange}
                  />

                  <label className='w-full text-xl'>Sipnosis</label>
                  <textarea
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='sinopsis'
                     onChange={handleChange}
                  ></textarea>

                  <label className='w-full text-xl'>Fecha de publicación</label>
                  <input
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='fechaPublicacion'
                     onChange={handleChange}
                  />

                  <label className='w-full text-xl'>Actores principales</label>
                  <textarea
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='actoresPrincipales'
                     onChange={handleChange}
                  ></textarea>

                  <label className='w-full text-xl'>Directores</label>
                  <input
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='directores'
                     onChange={handleChange}
                  />

                  <label className='w-full text-xl'>
                     Franquicia que creó la película
                  </label>
                  <input
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='franquicia'
                     onChange={handleChange}
                  />

                  <button className='bg-verde p-3 text-xl rounded-xl m-8'>
                     Registrarse
                  </button>
               </section>
            </form>
         )}
      </>
   )
}

export default ModalCreate
