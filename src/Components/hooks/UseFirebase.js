import { useEffect, useState } from "react"
import initAuth from "../../Firebase/firebaseInit"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initAuth();

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setError(error.message);
            });

    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user)
            }
        })
    }, [])

    return {
        user,
        error,
        googleSignIn,
        logOut
    }
}
export default useFirebase;