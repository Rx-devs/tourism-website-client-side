import React, { createContext } from "react";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;
    const allContexts = useFirebaseAuth();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;