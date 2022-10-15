import React, { useEffect, FC } from "react";
import {PATHS} from '../../config/RouteConfig'
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { CheckUserExpired} from "../../utils/FunctionUtils";


const useAuth = () => 
{
    if(localStorage.hasOwnProperty('IS_LOGGED_IN') && localStorage.getItem('IS_LOGGED_IN') != "false")
    {
        return true;
    } else {
        return false;
    }
}


export const PrivateRoute: FC = () => {
  const location = useLocation();
  useEffect(() => {
    CheckUserExpired("private");
  }, [location]);
  const isAuth = useAuth()
    return isAuth? <Navigate to={PATHS.DASHBOARD} />:<Outlet/>;
  
};
