import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import SingleMyReview from '../SingleMyReview/SingleMyReview';
import './MyReview.css';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);

    useTitle('My Review');

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
                        <h4 className='text-center'>You Added No Review Yet!!</h4>
                }
            </div>
        </div>
    );
};

export default MyReview;