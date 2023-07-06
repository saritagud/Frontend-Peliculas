import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function ButtonDetails({ movieID }) {
   return (
      <>
         <Link to={`/detalles/${movieID}`}>
            <button className='text-white bg-verde p-3 rounded-xl font-Marcellus text-xl mb-5 hover:bg-verde2 lg:text-2xl'>
               Ver mas
            </button>
         </Link>
      </>
   )
}

ButtonDetails.propTypes = {
   movieID: PropTypes.string.isRequired,
}

export default ButtonDetails
