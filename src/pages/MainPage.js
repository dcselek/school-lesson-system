import { Button } from 'carbon-components-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../context/AuthContext'

export default function MainPage() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div>
            <h1>Main Page</h1>
            <Button onClick={handleLogout}>Back To</Button>
        </div>
    )
}
