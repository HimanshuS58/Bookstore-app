import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const initialAuthUser = localStorage.getItem("Users");

    const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined) // Whenever we need to access the local storage data which is stored in the JSON string format, we always use JSON.parse() to access it in the JSON object.

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);