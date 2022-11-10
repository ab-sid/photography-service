import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const description = form.description.value;
        const date = form.date.value;

        const addService = {
            title,
            price,
            img,
            description,
            date
        }
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Service Added Successfully');
                    form.reset();
                }
            })
            .catch(e => console.error(e))
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <h1 className='text-center mb-4'>Add a Service</h1>
            <Form onSubmit={handleAddService}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name='title' type="text" placeholder="Enter title" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name='price' type="text" placeholder="Enter price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control name='img' type="text" placeholder="Enter Image link" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control name='date' type="date" placeholder="Enter date" required />
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea2" label="Description">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        name='description'
                        required
                    />
                </FloatingLabel>
                <Button className='mt-3' variant="primary" type="submit">
                    Add Service
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default AddService;