import React, { useState } from 'react'

const authContext = React.createContext();

function useAuth() {
    const [authToken, setAuthToken] = useState("");
    const [authed, setAuthed] = useState(false);
    return {
        authed,
        setAuthToken,
        authToken,
        async login(userInfo) {
            const response = await fetch("/login", {
                method: "POST", headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(userInfo)
            });

            const data = await response.json();

            await localStorage.setItem("user", JSON.stringify(data));
            await setAuthToken(data.id);
            setAuthed(true);
        },
        isAuth() {
            if(JSON.parse(localStorage.getItem("user"))?.id){
                return true;
            }else{
                return false;
            }
        },
        logout() {
            localStorage.clear();
            setAuthed(false);    
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