import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTitle } from 'react-use';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewRow from '../ServiceDetails/ReviewSection/ReviewRow/ReviewRow';

const MyReviews = () => {

    useTitle(`${document.title}-MyReviews`)
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://hayday-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('haydaytoken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [user?.email])

    const handleSingleDelete = (_id) => {
        fetch(`https://hayday-server.vercel.app/reviews/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('haydaytoken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = reviews.filter(revs => revs._id !== _id);
                    setReviews(remaining);
                    Swal.fire('The review has been deleted');
                }
            })
    };

    const handleAllDelete = () => {
        const confirmation = window.confirm('Are you sure? You want to delete all of your reviews!');

        if (confirmation) {
            fetch(`https://hayday-server.vercel.app/reviews?email=${user?.email}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('haydaytoken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        setReviews([]);
                        Swal.fire('All your reviews has been removed');
                    }
                })
        }
    }

    const handleUpdate = (_id) => {
        const updatingtext = window.prompt('Update review text');
        if (updatingtext) {
            // setReviewUpdating(text)
            let updatingReview = reviews.find(rev => rev._id === _id);
            updatingReview.text = updatingtext;
            fetch(`https://hayday-server.vercel.app/reviews/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('haydaytoken')}`
                },
                body: JSON.stringify(updatingReview)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        const updatedReview = reviews.find(rev => rev._id === _id);
                        const remainingReviews = reviews.filter(revs => revs._id !== _id);
                        setReviews([updatedReview, ...remainingReviews])
                    }
                })
        }
    }

    if (reviews.length === 0) {
        return (
            <div className='my-96'>
                <p className='text-9xl font-bold text-green-900 '>You have not added any service review yet</p>
                <p className='text-9xl font-bold text-green-900'>Try our <span onClick={() => navigate('/services')} className='text-blue-900 cursor-pointer'>services</span></p>
            </div>
        )
    }
    else {
        return (
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <button onClick={handleAllDelete} className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Text</th>
                            <th>Rating</th>
                            <th>serviceName</th>
                            <th>Date</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleSingleDelete={handleSingleDelete}
                                handleUpdate={handleUpdate}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
};

export default MyReviews;
