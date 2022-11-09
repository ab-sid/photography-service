import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ReviewAll = ({ rev }) => {
    console.log(rev);
    const { img, name, review } = rev;
    return (
        <div>
            <Card style={{ width: '18rem' }} className='mb-3'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {review}

                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewAll;