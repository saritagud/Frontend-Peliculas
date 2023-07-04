import { Link } from 'react-router-dom'

function ButtonDetails({ movieID }) {
   return (
      <>
         <Link to={`/detalles/${movieID}`}>
            <button className='text-white bg-verde p-3 rounded-xl font-Marcellus text-xl mb-5'>
               Ver mas
            </button>
         </Link>
      </>
   )
}

export default ButtonDetails
