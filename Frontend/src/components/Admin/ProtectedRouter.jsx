import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRouter({ isAllowed, children}) {
   if (!isAllowed) return <Navigate to={'/'}/> 
   return (
      children ? children : <Outlet/>
   )
}

export default ProtectedRouter