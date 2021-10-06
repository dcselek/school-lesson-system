import React, { useState } from 'react'

const authContext = React.createContext();

function useAuth() {
    const [UserInfoAuth, setUserInfoAuth] = useState(null);
    return {
        UserInfoAuth,
        setUserInfoAuth,
        async login() {
            const response = await fetch("/login", {
                method: "POST", headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(UserInfoAuth)
            });

            const data = await response.json();

            await localStorage.setItem("user", JSON.stringify(data));
        },
        isAuth() {
            if(JSON.parse(localStorage.getItem("user")).id){
                return true;
            }else{
                return false;
            }
        },
        logout() {
            localStorage.clear();    
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