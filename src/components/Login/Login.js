import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signWithGoogle } = useFirebase()
    return (
        <div>
            <h2>Please Login!!</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signWithGoogle}>Google Sign In</button>
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