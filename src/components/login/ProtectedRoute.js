import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../../context/AuthContext'
import PropTypes from 'prop-types'

export default function ProtectedRoute({ children, ...rest }) {
    const { isAuth } = useAuth();
    const ele =
        isAuth() === true ? (
            children
        ) : (
            <Redirect to="/" />
        );

    return <Route {...rest} children={ele} />
}

ProtectedRoute.propTypes = {
    children: PropTypes.element
}