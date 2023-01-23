import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return (
        // <Routes>
        // <Route {...rest}>{!user ? <Navigate to="/" /> :  children}</Route>
        // </Routes>
        user ? <Outlet /> : <Navigate to="/" />
      );
  
}
 
export default PrivateRoute;