import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";


const initAuth = () => {
    initializeApp(firebaseConfig);
}

export default initAuth;