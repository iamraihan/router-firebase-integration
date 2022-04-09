import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    // const { signWithGoogle } = useFirebase()
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>Please Login!!</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>
            <form>


                <input type="email" name="" id="" placeholder='type your email' />
                <br />
                <input type="password" name="" id="" placeholder='input your password' /> <br />
                <input type="submit" value="Login" />

            </form>
        </div>
    );
};

export default Login;