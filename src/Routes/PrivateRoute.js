import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
            </div>
        );
    }

    if (user?.uid) {
        return children;
    }
    else {
        return <Navigate to={'/signin'} state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;