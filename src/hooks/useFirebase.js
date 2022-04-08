import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState({})
    const signWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                setUser(user)
                console.log(user);
            })
            .catch((error) => {
                console.error(error)
            })
    }
    const handleSignOUt = () => {
        signOut(auth,)
            .then(() => {

            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])
    // return [user, setUser]
    return { user, signWithGoogle, handleSignOUt }
}

export default useFirebase