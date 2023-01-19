import React, { useContext, useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthProvider';
import ReviewRow from './ReviewRow/ReviewRow';

const ReviewSection = ({ service }) => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://hayday-server.vercel.app/servicereviews/${service._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [service._id, reviews]);

    const handleSubmit = (event) => {

        if (!user?.uid) {
            Swal.fire('Please Sign In to add review');
            navigate('/signin');
            return;
        }

        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const image = user?.photoURL;
        const name = user?.displayName;
        const serviceId = service._id;
        const serviceName = service.name
        const text = form.review.value;
        console.log(email, name, serviceId, text, image, rating);

        const review = {
            email,
            image,
            name,
            serviceId,
            text,
            rating,
            serviceName
        }

        fetch(`https://hayday-server.vercel.app/servicereviews/${service._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('haydaytoken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setReviews([...reviews, data])
                }
                form.reset();
            })
    }

    const handleRating = (event) => {

        if (event.target.name === 'rating1') {
            setRating(1);
        }
        else if (event.target.name === 'rating2') {
            setRating(2);
        }
        else if (event.target.name === 'rating3') {
            setRating(3)
        }
        else if (event.target.name === 'rating4') {
            setRating(4);
        }
        else {
            setRating(5);
        }

    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Text</th>
                            <th>Rating</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex items-center justify-between mt-5'>
                    {
                        user?.photoURL ?
                            <img className='w-[60px] h-[60px] rounded-full' src={user?.photoURL} alt="" />
                            :
                            <FaUserAlt className='w-[60px] h-[60px] rounded-full'></FaUserAlt>
                    }
                    <div className="form-control w-[80%]">
                        <label className="label">
                            {
                                user?.displayName &&
                                <span className="label-text font-bold">{user?.displayName}</span>
                            }
                        </label>
                        <input name='review' type="text" placeholder="Type here" className="input input-bordered border-green-900 shadow-green-900 shadow-lg" required />
                        <label className="label">
                            {
                                user?.email &&
                                <span className="label-text-alt font-bold">{user.email}</span>
                            }
                        </label>
                    </div>
                    <button className='btn btn-primary bg-green-500' type="submit">Add Review</button>
                </div>
                <div className='flex items-center justify-center mb-10'>
                    <p className='text-green-900 text-3xl font-bold'>Rate this service : </p>
                    <div className="rating mx-5">
                        <input type="radio" onChange={handleRating} checked={rating === 1} name="rating1" className={`mask mask-star-2 bg-orange-400`} />
                        <input type="radio" onChange={handleRating} checked={rating === 2} name="rating2" className={`mask mask-star-2 bg-orange-400`} />
                        <input type="radio" onChange={handleRating} checked={rating === 3} name="rating3" className={`mask mask-star-2 bg-orange-400`} />
                        <input type="radio" onChange={handleRating} checked={rating === 4} name="rating4" className={`mask mask-star-2 bg-orange-400`} />
                        <input type="radio" onChange={handleRating} checked={rating === 5} name="rating5" className={`mask mask-star-2 bg-orange-400`} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ReviewSection;