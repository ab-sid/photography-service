import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SingleMyReview from '../SingleMyReview/SingleMyReview';
import './MyReview.css';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])
    return (
        <div>
            <h1 className='text-center'>This is my review</h1>

            <div className='my-review-section'>
                {
                    myreviews.length > 0 ?
                        myreviews.map(myreview => <SingleMyReview key={myreview._id} myreview={myreview}></SingleMyReview>) :
                        <h4 className='text-center'>You have no Review</h4>
                }
            </div>
        </div>
    );
};

export default MyReview;