import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    useTitle(`${document.title}-services`)
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://hayday-server.vercel.app/services?quantity=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='w-[90%] mx-auto my-10'>
            <h3 className='text-start font-bold text-green-900 text-3xl mb-5'>Services</h3>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to={'/services'} className='text-center my-2 flex items-center text-green-900 font-bold text-xl'>See All <FaArrowRight className='ml-2'></FaArrowRight> </Link>
        </div>
    );
};

export default Services;