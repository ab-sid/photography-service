import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from '../Banner/Banner';
import BookNow from '../BookNow/BookNow';
import Partner from '../Partner/Partner';
import Services from '../Services/Services';


const Home = () => {

    useTitle('Home');

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