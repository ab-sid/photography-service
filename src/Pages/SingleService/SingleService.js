import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ReviewAll from '../ReviewAll/ReviewAll';
import './SingleService.css';



const SingleService = () => {
    const [reviews, setReviews] = useState([]);
    // const url = `http://localhost:5000/reviews?service=${_id}`;
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    const { _id, img, title, description, price } = useLoaderData()

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const img = form.img.value;
        const review = form.review.value;

        const addReview = {
            service: _id,
            name,
            email,
            img,
            review
        }
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Added Successfully')
                    form.reset();
                }
            })
            .catch(e => console.error(e))
    }
    return (
        <div>
            <Card className='mb-3'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                        <h5>Price: ${price}</h5>
                    </Card.Text>
                </Card.Body>
            </Card>
            <div>
                <h1 className='text-center mt-5'>Review of {title}</h1>
                <div className='review-section'>
                    {
                        reviews.map(rev => <ReviewAll key={rev._id} rev={rev}></ReviewAll>)

                    }

                </div>
            </div>
            <div className='w-50 mx-auto'>
                <h3 className='text-center mt-4'>Please Add Your Review</h3>
                <Form onSubmit={handleAddReview}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control name='img' type="text" placeholder="Enter Image link" required />
                    </Form.Group>
                    <FloatingLabel controlId="floatingTextarea2" label="Write Review here">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            name='review'
                            required
                        />
                    </FloatingLabel>
                    <Button className='mt-3' variant="primary" type="submit">
                        Add Review
                    </Button>
                </Form>
            </div>
        </div>

    );
};

export default SingleService;