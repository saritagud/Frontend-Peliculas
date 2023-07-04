import { FaPencilAlt } from 'react-icons/fa'
import { FaWindowClose } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editMovie } from '../../features/movies/moviesSlice'
import PropTypes from 'prop-types';

function ModalEdit({ data }) {
   const [isOpen, setIsOpen] = useState(false)
   const dispatch = useDispatch()
   const [movie, setMovie] = useState({
      image: data.imagen,
      titulo: data.titulo,
      sinopsis: data.sinopsis,
      genero: data.genero,
      actoresPrincipales: data.actoresPrincipales,
      directores: data.directores,
      franquicia: data.franquicia || '',
      fechaPublicacion: data.fechaPublicacion
   })

   const handleFile = e => {
      console.log(e.target.files[0])
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

      if (movie.image === null) return console.error('Debe subir una imagen de la pelicula')
      if (movie.titulo === '') return console.error('El campo "Titulo" no puede estar vacio')
      if (movie.sinopsis === '') return console.error('El campo "Sinopsis" no puede estar vacio')
      if (movie.genero === '') return console.error('El campo "genero" no puede estar vacio')
      if (movie.actoresPrincipales === '') return console.error('El campo "Actores Principales" no puede estar vacio')
      if (movie.directores === '') return console.error('El campo "Directores" no puede estar vacio')
      if (movie.franquicia === '') return console.error('El campo "Franquicia" no puede estar vacio')
      if (movie.fechaPublicacion === '') return console.error('El campo "Fecha de Publicacion" no puede estar vacio')

      const body = new FormData()
      movie.image !== data.image && body.append('image', movie.image)
      movie.titulo !== data.titulo && body.append('titulo', movie.titulo)
      movie.sinopsis !== data.sinopsis && body.append('sinopsis', movie.sinopsis)
      movie.genero !== data.genero && body.append('genero', movie.genero)
      movie.actoresPrincipales !== data.actoresPrincipales && body.append('actoresPrincipales', movie.actoresPrincipales)
      movie.directores !== data.directores && body.append('directores', movie.directores)
      movie.franquicia !== data.franquicia && body.append('franquicia', movie.franquicia)
      movie.fechaPublicacion !== data.fechaPublicacion && body.append('fechaPublicacion', movie.fechaPublicacion)

      const datos = {
         body,
         movieID: data._id
      }
      dispatch(editMovie({datos}))
      setIsOpen(false)
   }

   return (
      <>
         <FaPencilAlt
            className='text-right text-2xl flex items-end justify-end  cursor-pointer '
            onClick={() => setIsOpen(true)}
         />

         {isOpen && (
            <form className='fixed flex justify-center items-start inset-0 backdrop-blur-sm bg-black bg-opacity-30   min-h-screen overflow-scroll' onSubmit={handleSubmit}>
               <section className='bg-fondo  rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] text-white flex flex-col  gap-4  m-10 overflow-auto'>
                  <div className='flex justify-end mb-3 w-full '>
                     <FaWindowClose
                        className=' text-2xl cursor-pointer md:text-3xl'
                        onClick={() => setIsOpen(false)}
                     />
                  </div>
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
                     value={movie.titulo}
                     onChange={handleChange}
                  />

                  <label className='w-full text-xl'>Genero</label>
                  <input
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='genero'
                     value={movie.genero}
                     onChange={handleChange}
                  />

                  <label className='w-full text-xl'>Sipnosis</label>
                  <textarea
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='sinopsis'
                     value={movie.sinopsis}
                     onChange={handleChange}
                  ></textarea>

                  <label className='w-full text-xl'>Fecha de publicación</label>
                  <input
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='date'
                     name='fechaPublicacion'
                     value={movie.fechaPublicacion}
                     onChange={handleChange}
                  />

                  <label className='w-full text-xl'>Actores principales</label>
                  <textarea
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='actoresPrincipales'
                     value={movie.actoresPrincipales}
                     onChange={handleChange}
                  ></textarea>

                  <label className='w-full text-xl'>Directores</label>
                  <input
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='directores'
                     value={movie.directores}
                     onChange={handleChange}
                  />

                  <label className='w-full text-xl'>
                     Franquicia que creó la película
                  </label>
                  <input
                     className='w-full  rounded-xl p-2 text-black text-lg'
                     type='text'
                     name='franquicia'
                     value={movie.franquicia}
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

ModalEdit.propTypes = {
   data: PropTypes.object.isRequired,
}

export default ModalEdit
