import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer bg-dark text-white text-center mt-5'>
            <div className='footer-nav d-flex justify-content-center align-items-center'>
                <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                <Nav.Link><Link to='/services'>Services</Link></Nav.Link>
                <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
            </div>
            <div className='pt-3 copyright'>
                <p className='pb-4'><small>AB Siddique@2022 All Rights Reserved</small></p>
            </div>
        </footer>
    );
};

export default Footer;