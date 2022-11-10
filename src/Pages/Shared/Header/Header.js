import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">AB Siddique</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto align-items-center">
                            <Link className='me-2 text-decoration-none' to='/home'>Home</Link>
                            <Link className='me-2 text-decoration-none' to='/services'>Services</Link>
                            <Link className='me-2 text-decoration-none' to='/blog'>Blog</Link>
                            {user?.uid ?
                                <>
                                    <Link className='me-2 text-decoration-none' to='/addservice'>Add Services</Link>
                                    <Link className='me-2 text-decoration-none' to='/myreview'>My Review</Link>
                                    <Button onClick={handleLogOut} variant="outline-secondary">Log Out</Button>
                                </>
                                :
                                <Link className='me-2 text-decoration-none' to='/login'>Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;