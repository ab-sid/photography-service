import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';
import './AllServices.css';

const AllServices = () => {
    const services = useLoaderData()
    useTitle('Services');
    return (
        <Container>
            <Row>
                <Col lg='12'>
                    <h1 className='my-5 text-center text-warning'>All Services</h1>
                    <div className='all-services-section'>
                        {
                            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AllServices;