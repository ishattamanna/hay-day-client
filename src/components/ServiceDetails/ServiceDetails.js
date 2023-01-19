import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from 'react-use';
import DetailCard from './DetailCard/DetailCard';
import ReviewSection from './ReviewSection/ReviewSection';

const ServiceDetails = () => {
    const service = useLoaderData();
    useTitle(`${document.title}-ServiceDetails`)

    return (
        <div className='w-[90%] mx-auto'>
            <DetailCard service={service}></DetailCard>
            <ReviewSection service={service} ></ReviewSection>
        </div>

    );
};

export default ServiceDetails;