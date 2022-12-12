import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Register = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    return (
        <div>
            <h3>Please Register!!</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={() => signInWithGoogle()} >SignIn with Google</button>
            </div>
            <form>
                <input type="text" placeholder='Enter your name' />
                <br></br>
                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter your password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;