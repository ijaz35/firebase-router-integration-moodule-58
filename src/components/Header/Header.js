import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'

const auth = getAuth(app);
const Header = () => {
    //useAuthState hook to get user
    const [user] = useAuthState(auth)
    //useSignOut hook for sign out
    const [signOut] = useSignOut(auth)
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {user?.uid ?
                    <button onClick={() => signOut()}>Sign out</button>
                    :
                    <Link to='/login'>LogIn</Link>}
            </nav>
        </div>
    );
};

export default Header;