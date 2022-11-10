import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Partner.css';

const Partner = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center text-warning'>Partners</h1>
            <Container>
                <Row>
                    <Col lg='12' className='bg-warning rounded text-white mt-4 p-4'>
                        <div className='partner-1 p-3'>
                            <h3>Upglam</h3>
                            <h3>SquareStone</h3>
                            <h3>Investify</h3>
                            <h3>Virogan</h3>
                        </div>
                        <div className='partner-2 p-3'>
                            <h3>Martino</h3>
                            <h3>Nutrilix</h3>
                            <h3>Knewish</h3>
                            <h3>Waverio</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Partner;