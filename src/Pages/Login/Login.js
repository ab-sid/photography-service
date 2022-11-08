import { GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Login = () => {
    const { googleLoginProvider } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        googleLoginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Button onClick={handleGoogleSignIn} variant="outline-primary">Login With Google</Button>
        </div>
    );
};

export default Login;