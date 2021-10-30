import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


// Initialize Firebase
const firebaseAuthInit = () => {
    initializeApp(firebaseConfig);
};

export default firebaseAuthInit;