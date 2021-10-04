import React from 'react'
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/buttons/MainButton';
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
            <MainButton onClick={handleLogout} kind="secondary" label="Logout" />
        </div>
    )
}
