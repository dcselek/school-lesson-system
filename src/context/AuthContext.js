import React, { useState } from 'react'

const authContext = React.createContext();

function useAuth() {
    const [authToken, setAuthToken] = useState("");
    const [authed, setAuthed] = useState(false);
    const [userType, setUserType] = useState("");
    return {
        authed,
        setAuthToken,
        authToken,
        userType,
        setUserType,
        async login(userInfo) {
            const response = await fetch("/login", {
                method: "POST", headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(userInfo)
            });

            const data = await response.json();

            await localStorage.setItem("user", JSON.stringify(data));
            await setAuthToken(data.id);
        },
        isAuth() {
            if (JSON.parse(localStorage.getItem("user"))?.id) {
                setAuthed(true);
                return true;
            } else {
                return false;
            }
        },
        logout() {
            localStorage.clear();
            setAuthed(false);
        },
        async userTypeHandler() {
            const userId = await JSON.parse(localStorage.getItem("user"))
            setAuthToken(userId.id);

            const response = await fetch("/me", {
                method: "GET", headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            });

            const data = await response.json();
            setUserType(data.type);
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