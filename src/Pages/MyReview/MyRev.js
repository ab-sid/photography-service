import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const MyRev = ({ myreview, handleDelete }) => {
    const { _id, img, name, review } = myreview;


    return (
        <div>
            <Card style={{ width: '18rem' }} className='mb-3'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {review}
                    </Card.Text>
                    <Link to={`/update/${_id}`}><Button className='me-5' variant="primary">Edit</Button></Link>
                    <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
                </Card.Body>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default MyRev;