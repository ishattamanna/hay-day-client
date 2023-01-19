import React from 'react';

const IntroBanner = () => {
    return (
        <div className="card w-[90%] my-5 h-[500px] bg-base-100 shadow-xl image-full mx-auto">
            <figure><img className='w-full' src="https://images.unsplash.com/photo-1605895370326-e96b9d52e3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwZ2FyZGVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">About Me!</h2>
                <p>Hellow gardeners.</p>
                <p>My name is Md Fahim Faisal. This is my official website. All the servises here will be given by me</p>
            </div>
        </div>
    );
};

export default IntroBanner;