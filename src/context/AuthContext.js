import React, { useState } from 'react'

const authContext = React.createContext();

function useAuth() {
    const [authed, setAuthed] = useState(false);
    const [UserInfoAuth, setUserInfoAuth] = useState(null);


    return {
        UserInfoAuth,
        setUserInfoAuth,
        authed,
        async login() {

            const response = await fetch("/login", {
                method: "POST", headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(UserInfoAuth)
            });

            const data = await response.json();

            setAuthed(true);
            localStorage.setItem("user", JSON.stringify(data));

        },
        logout() {
            return new Promise((res) => {
                setAuthed(false);
                res();
            });
        }
    }
}

export function AuthProvider({ children }) {
    const auth = useAuth();

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}