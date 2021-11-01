import React, { useState } from 'react'

const authContext = React.createContext();

function useAuth() {
    const [UserInfoAuth, setUserInfoAuth] = useState(null);
    const [authed, setAuthed] = useState(false);
    return {
        UserInfoAuth,
        authed,
        setUserInfoAuth,
        async login() {
            const response = await fetch("/login", {
                method: "POST", headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(UserInfoAuth)
            });

            const data = await response.json();

            await localStorage.setItem("user", JSON.stringify(data));
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