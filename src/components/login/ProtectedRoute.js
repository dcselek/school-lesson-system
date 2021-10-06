import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import useAuth from '../../context/AuthContext'

export default function ProtectedRoute({ element, path }) {
    const { isAuth } = useAuth();
    const ele =
        isAuth() === true ? (
            element
        ) : (
            <Navigate to="/" replace state={{ path }} />
        );

    return <Route path={path} element={ele} />;
}
