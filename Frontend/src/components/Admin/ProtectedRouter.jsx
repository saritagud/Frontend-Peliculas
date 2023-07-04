import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types';

function ProtectedRouter({ isAllowed, children}) {
   if (!isAllowed) return <Navigate to={'/'}/> 
   return (
      children ? children : <Outlet/>
   )
}

ProtectedRouter.propTypes = {
   isAllowed: PropTypes.bool.isRequired,
   children: PropTypes.node.isRequired,
}

export default ProtectedRouter