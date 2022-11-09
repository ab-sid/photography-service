import React from 'react';
import Banner from '../Banner/Banner';
import BookNow from '../BookNow/BookNow';
import Partner from '../Partner/Partner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BookNow></BookNow>
            <Partner></Partner>
        </div>
    );
};

export default Home;