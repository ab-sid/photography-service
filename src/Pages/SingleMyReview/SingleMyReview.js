import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SingleMyReview = ({ myreview }) => {
    const { _id, img, name, review } = myreview;
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                    }
                })
        }
    }
    return (
        <div>
            <Card style={{ width: '18rem' }} className='mb-3'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {review}
                    </Card.Text>
                    <Button className='me-5' variant="primary">Edit</Button>
                    <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleMyReview;