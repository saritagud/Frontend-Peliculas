import {Link} from 'react-router-dom'


function ButtonDetails(){
    return(
        <>
            <Link to={'/detalles'}><button className="text-white bg-verde p-3 rounded-xl font-Marcellus text-xl mb-5"> Ver mas </button></Link>
        </>
    )
}

export default ButtonDetails;