import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>This is Home</h2>
            <h3>Current User {user ? user.displayName : 'nobody'}</h3>
        </div>
    );
};

export default Home;