import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">AB Siddique</Navbar.Brand>
                    <Nav className="ms-auto align-items-center">
                        <Link className='me-2 text-decoration-none' to='/home'>Home</Link>
                        <Link className='me-2 text-decoration-none' to='/services'>Services</Link>

                        <Nav.Link href='#deets'>
                            {
                                user?.uid ?
                                    <>
                                        <span className='me-2'>{user?.displayName}</span>
                                        <Link className='me-2 text-decoration-none' to='/addservice'>Add Services</Link>
                                        <Link className='me-2 text-decoration-none' to='/myreview'>My Review</Link>
                                        <Button onClick={handleLogOut} variant="outline-warning">Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='me-2 text-decoration-none' to='/login'>Login</Link>

                                    </>
                            }
                        </Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;