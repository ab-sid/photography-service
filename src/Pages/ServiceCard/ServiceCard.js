import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, description } = service;
    return (
        <div>
            <Card style={{ width: '18rem' }} className='mb-3'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 50) + '...'}
                    </Card.Text>
                    <Link to={`/singleservice/${_id}`}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;