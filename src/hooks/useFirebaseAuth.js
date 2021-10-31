import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthInit from "../Firebase/Firebase.init";

firebaseAuthInit();

const useFirebaseAuth = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    
    // log In
    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    // log Out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }

    // firebase hook
    useEffect(() => {
        const changingAuthState = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        });
        return () => changingAuthState;
    }, [])
    
    return {
        user,
        signInWithGoogle,
        logOut,
        isLoading,
        setIsLoading,
    }

}

export default useFirebaseAuth;