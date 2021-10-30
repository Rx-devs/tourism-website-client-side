import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthInit from "../Firebase/Firebase.init";

firebaseAuthInit();

const useFirebaseAuth = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // log In
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
        })
    }

    // log Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
             })
    }

    // firebase hook
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    
    return {
        user,
        signInWithGoogle,
        logOut,

    }

}

export default useFirebaseAuth;