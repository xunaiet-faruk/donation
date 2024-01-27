import { useContext, useState } from "react";
import { Authcontext } from "../../Component/Firebase/Context";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {

    const { users, loading } =useContext(Authcontext);
    const location =useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(users){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Private;