import React, { useEffect, useState } from 'react'

export default function MainPage() {

    const [data, setData] = useState(null)

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
        </>
    )
}
