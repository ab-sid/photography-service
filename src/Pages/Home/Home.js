import React from 'react';
import Banner from '../Banner/Banner';
import BookNow from '../BookNow/BookNow';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BookNow></BookNow>
        </div>
    );
};

export default Home;