import React, { useContext } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, loading } = useContext(AuthContext);
    useTitle('Register');
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/login')
            })
            .catch(e => console.error(e));
    }
    if (loading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h1 className='text-center mb-3 text-warning'>Register</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control name='name' type="text" placeholder="Enter name" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" required />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                            <h5 className='mt-2'>Already have an Accout?<Link to='/login'>Login</Link></h5>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;