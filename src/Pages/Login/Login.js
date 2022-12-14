import { GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Spinner from 'react-bootstrap/Spinner';
import { Col, Container, Row } from 'react-bootstrap';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { googleLoginProvider, signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    useTitle('Login');
    const handleGoogleSignIn = () => {
        googleLoginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <div id='loader' className='text-center d-none'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h1 className='mt-1 mb-3 text-center text-warning'>Please Login</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <h5 className='mt-2'>Create an Accout?<Link to='/register'>Register</Link></h5>
                        </Form>
                        <Button className='mt-5' onClick={handleGoogleSignIn} variant="outline-primary">Login With Google</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;