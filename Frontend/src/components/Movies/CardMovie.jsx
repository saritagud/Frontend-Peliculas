import { formatearFecha } from '../../logic/funciones'
import { Link } from 'react-router-dom'

function CardMovie({ data }) {
   const { _id, imagen, titulo, fechaPublicacion } = data
   return (
      <>
         <section className=' m-6 text-white w-[60%] '>
            <img
               src={imagen}
               className='rounded-xl'
            />
            <h1 className='font-Coda mt-3 text-left w-full tracking-wide'>
               {titulo}
            </h1>
            <h2 className='font-Marcellus w-full mt-2'>
               {formatearFecha(fechaPublicacion)}
            </h2>
            <Link
               to={`/detalles/${_id}`}
               className='text-white bg-verde p-3 rounded-xl font-Marcellus text-xl mb-5'
            >
               Ver mas
            </Link>
         </section>
      </>
   )
}

export default CardMovie
