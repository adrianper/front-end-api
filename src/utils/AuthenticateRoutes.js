import { useStore } from "react-redux"
import { Outlet, Navigate, useLocation } from "react-router-dom"

const AuthenticateRoutes = () => {
    const auth = {user: {mail:"adrian@mail.com"}}
    // const { auth } = useStore(store => store)
    
    return auth.user ? <Outlet /> : <Navigate to='/login' />
}

export default AuthenticateRoutes