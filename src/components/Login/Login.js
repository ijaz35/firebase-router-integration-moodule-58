import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <h3>Please Login!!</h3>
            <div>
                <button onClick={handleGoogleSignIn} style={{ margin: '20px' }}>LogIn with Google</button>
            </div>
            <form>

                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter your password' />
                <br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;