import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/buttons/MainButton';
import useAuth from '../context/AuthContext'

export default function MainPage() {

    const [data, setData] = useState(null)
    const { logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {

        const response = await fetch("/me", {
            method: "GET", headers: {
                'Content-Type': 'application/json'
            }
        })

        const status = await response.status

        if (status === 403) {
            logout();
            navigate("/");
        }
    }

    useEffect(() => {
        async function authMe() {
            const response = await fetch("/me", {
                method: "GET", headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 123'
                }
            })

            const data = await response.json();

            setData(data.username);
        }

        authMe();
    }, [])

    return (
        <>
            <h1>Main Page Hoşgeldin {JSON.stringify(data)}</h1>
            <MainButton onClick={handleLogout} kind="secondary" label="Fake Logout" />
        </>
    )
}
