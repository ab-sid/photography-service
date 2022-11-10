import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';
import './AllServices.css';

const AllServices = () => {
    const services = useLoaderData()
    useTitle('Services');
    return (
        <div className='all-services-section'>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllServices;