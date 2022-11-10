import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateReview = () => {
    const storedReview = useLoaderData();
    const [rev, setReview] = useState(storedReview);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const review = form.review.value;
        console.log(rev);
        fetch(`https://assignment-11-server-psi-seven.vercel.app/myreview/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rev)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Review Updated successfully');
                }
            })

    }

    const handleUpdateBlue = event => {
        const field = event.target.name
        const value = event.target.value
        const newReview = { ...rev }
        newReview[field] = value;
        setReview(newReview);
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='my-3'>Update Review</h1>

            <Form onSubmit={handleUpdate}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={handleUpdateBlue} defaultValue={storedReview.name} name='name' type="text" placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Review</Form.Label>
                    <Form.Control onChange={handleUpdateBlue} defaultValue={storedReview.review} name='review' type="text" placeholder="Enter email" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>

            </Form>
            <ToastContainer />
        </div>
    );
};

export default UpdateReview;