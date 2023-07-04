import { formatearFecha } from '../../logic/funciones'
import ButtonDetails from './ButtonDetails'
import PropTypes from 'prop-types';

function CardMovie({ data }) {
   const { _id, imagen, titulo, fechaPublicacion } = data
   return (
      <>
         <section className=' m-6 text-white w-[60%] '>
            <div className={`bg-[url('${imagen}')] bg-cover flex flex-col justify-center items-center  rounded-xl h-[60vh] w-[80%]`}>
               <div className='flex flex-col justify-end items-center p-5 bg-black/75 w-full h-full rounded-xl opacity-0 hover:opacity-100 transition-all duration-500 cursor-pointer'>
                  <ButtonDetails movieID={_id}/>
               </div>
            </div>
            <h1 className='font-Coda mt-3 text-left w-full tracking-wide'>
               {titulo}
            </h1>
            <h2 className='font-Marcellus w-full mt-2'>
               {formatearFecha(fechaPublicacion)}
            </h2>
         </section>
      </>
   )
}

CardMovie.propTypes = {
   data: PropTypes.object.isRequired,
}

export default CardMovie
