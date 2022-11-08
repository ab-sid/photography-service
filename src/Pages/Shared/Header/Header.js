import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">AB Siddique</Navbar.Brand>
                    <Nav className="ms-auto align-items-center">

                        <Link className='me-2 text-decoration-none' to='/login'>Login</Link>
                        <Nav.Link>{user?.displayName}</Nav.Link>
                        <Link className='me-2 text-decoration-none' to='/home'><Nav.Link>Test</Nav.Link></Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;