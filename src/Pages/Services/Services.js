import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <h1 className='text-center'>Services</h1>
            <div className='serviceCard-section'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </>
    );
};

export default Services;