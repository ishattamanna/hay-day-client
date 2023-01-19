import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const DetailCard = ({ service }) => {

    const { name, thumbnail, rating, price, details } = service;
    return (
        <div className='border-gray-200 my-10 shadow-lg shadow-green-500 border-2 border-solid rounded-lg'>
            <div>
                <PhotoProvider>
                    <PhotoView src={thumbnail}>
                        <img className='w-full cursor-pointer lg:h-[500px] h-[500px] rounded-lg' src={thumbnail} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='p-5'>
                <h3 className='font-bold text-5xl my-10 truncate text-green-900'>{name}</h3>
                <p className='text-start'>{details}</p>
                <p className='my-5 text-xl font-bold text-start'>Price : $<span className='text-yellow-900 font-bold'>{price}</span></p>
                <div className='flex items-center'>
                    <div className='flex text-yellow-500 text-3xl'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalf></FaStarHalf>
                    </div>
                    <p className='ml-2 text-3xl font-bold'>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;