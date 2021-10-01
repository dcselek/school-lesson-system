import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import useAuth from '../../context/AuthContext'

export default function ProtectedRoute({ element, path }) {
    const { authed } = useAuth();
    const ele = authed === true ? element : <Navigate to="/main" replace />
    return (
        <Route path={path} element={ele} />
    )
}
