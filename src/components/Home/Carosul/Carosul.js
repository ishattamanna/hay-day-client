import React from 'react';
import img_1 from '../../../assets/carosul_img_1.jpg'
import img_2 from '../../../assets/carosul_img_2.jpg'
import img_3 from '../../../assets/carosul_img_3.jpg'
import img_4 from '../../../assets/carosul_img_4.jpg'
import img_5 from '../../../assets/carosul_img_5.jpg'

const Carosul = () => {
    return (
        <div className="carousel w-[90%] mx-auto my-5 rounded-lg h-96">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img_1} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle bg-green-300">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-green-300">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img_2} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-green-300">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-green-300">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img_3} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-green-300">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-green-300">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img_4} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-green-300">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-green-300">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img_5} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-green-300">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-green-300">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carosul;