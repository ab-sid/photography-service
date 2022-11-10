import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import SingleMyReview from '../SingleMyReview/SingleMyReview';
import MyRev from './MyRev';
import './MyReview.css';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);

    useTitle('My Review');

    useEffect(() => {
        fetch(`https://assignment-11-server-psi-seven.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`https://assignment-11-server-psi-seven.vercel.app/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('deleted successfully');
                        const remaining = myreviews.filter(myre => myre._id !== id);
                        setMyreviews(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h1 className='text-center my-4 text-warning'>This is My Reviews</h1>

                        <div className='my-review-section'>
                            {
                                myreviews.length > 0 ?
                                    //myreviews.map(myreview => <SingleMyReview key={myreview._id} myreview={myreview}></SingleMyReview>)
                                    myreviews.map(myreview => <MyRev key={myreview._id} myreview={myreview} handleDelete={handleDelete}></MyRev>)
                                    :
                                    <h4 className='text-center text-danger'>You Added No Review Yet!!</h4>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MyReview;