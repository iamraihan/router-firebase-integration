import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app)
const Home = () => {
    // const { user } = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Current user is: {user ? user.displayName : 'No User Found'} </h2>
        </div>
    );
};

export default Home;