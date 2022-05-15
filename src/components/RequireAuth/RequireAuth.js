import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
import { userContext } from "../../App";

const RequireAuth = ({ children }) => {
    const [user, loading] = useContext(userContext);
    let location = useLocation();

    if (loading) {
        return <Spinner></Spinner>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user) {
        return children;
    }
};

export default RequireAuth;
