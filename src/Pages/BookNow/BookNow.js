import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './BookNow.css';
import img from '../../Assets/Images/Banner/B-4.jpeg';

const BookNow = () => {
    return (
        <div>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg='6'>
                        <div>
                            <img className='img-fluid' src={img} alt="" srcset="" />
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='mt-5 ms-4'>
                            <div>
                                <h1>Ready To Make<br />Your Moment <br />Memorable?</h1>
                            </div>
                            <div>
                                <Button variant="outline-secondary">Book Now</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookNow;