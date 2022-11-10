import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import SingleMyReview from '../SingleMyReview/SingleMyReview';
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
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h1 className='text-center my-4 text-warning'>This is My Reviews</h1>

                        <div className='my-review-section'>
                            {
                                myreviews.length > 0 ?
                                    myreviews.map(myreview => <SingleMyReview key={myreview._id} myreview={myreview}></SingleMyReview>)
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