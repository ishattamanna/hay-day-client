import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const AllServices = () => {

    const wholeServices = useLoaderData();

    return (
        <div>
            <h1 className='text-5xl font-bold text-green-900 my-5'>All Our Services</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 p-5 my-5'>
                {
                    wholeServices.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;