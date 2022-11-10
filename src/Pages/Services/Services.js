import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContext);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if (loading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        <>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h1 className='text-center mt-3 mb-5 text-warning'>Services</h1>
                        <div className='serviceCard-section'>
                            {
                                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                            }
                        </div>
                        <Link className='d-block text-center mt-2' to='/services'><Button variant="outline-secondary">See All</Button></Link>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Services;