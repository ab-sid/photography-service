import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, title, description, price } = service;
    return (
        <div>
            <Card style={{ width: '18rem' }} className='mb-3'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card.Img variant="top" src={img} />
                    </PhotoView>
                </PhotoProvider>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100) + '...'}
                        <h5>Price: ${price}</h5>
                    </Card.Text>
                    <Link to={`/singleservice/${_id}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;