import { formatearFecha } from '../../logic/funciones'
import { Link } from 'react-router-dom'

function CardMovie({ data }) {
   const { _id, imagen, titulo, fechaPublicacion } = data
   return (
      <>
         <section className=' m-6 text-white w-[60%] '>
            <div className="bg-Card bg-cover flex flex-col justify-center items-center  rounded-xl h-[60vh] w-[80%]">
                <div className="flex flex-col justify-end items-center p-5 bg-black/75 w-full h-full rounded-xl opacity-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                    <ButtonDetails />
                </div>
            </div>
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
