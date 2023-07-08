import { deleteReview } from '../../../services/reviews';
import ModalDeleteReview from './ModalDeleteReview'
import PropTypes from "prop-types";

function ListOfReviews({ reviews }) {
   return (
      <>
         {
            reviews.length === 0 ? (
               <h1 className="text-white text-3xl font-Coda">No hay comentarios aun</h1>
            ) : (
               reviews.map((review) => (
                  <div
                     key={review._id}
                     className="bg-white p-5 rounded-xl w-full flex justify-between items-center font-Marcellus text-xl md:text-2xl lg:p-7 2xl:p-10 2xl:text-3xl"
                  >
                     <p>{review.contenido}</p>
                     <div className="flex items-center justify-center gap-2">
                        <ModalDeleteReview id={review._id} deleteAction={deleteReview}/>
                     </div>
                  </div>
               ))
            )
         }
      </>
   )
}

ListOfReviews.propTypes = {
   reviews: PropTypes.array.isRequired,
};

export default ListOfReviews