import React from 'react';
import homeCard from '../../../assets/garden_quotes.jpg'

const Card = () => {
    return (
        <div className='w-[90%] mx-auto my-10'>
            <h3 className='font-bold text-3xl text-start mb-5 text-green-900'>Introduction</h3>
            <div className="card lg:card-side bg-base-100 shadow-xl shadow-green-500 rounded-lg">
                <figure className='lg:w-[50%]'><img className='w-full' src={homeCard} alt="Album" /></figure>
                <div className="card-body lg:w-[50%]">
                    <h2 className="card-title">About Us!</h2>
                    <p className='text-start font-bold'>Hello visiters. Welcome to my web site.</p>
                    <p className='text-start'>This site will allow you to add different kind of services in your garden. Our purpose is to help people to build their own garden and make a wonderful yard in their house.</p>
                    <p>
                        We will visit your place and examine your house and will propose the best gardening design for your house
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-green-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;