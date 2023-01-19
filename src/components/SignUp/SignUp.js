import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTitle } from 'react-use';
import Swal from 'sweetalert2';
import authImage from '../../assets/authImage.jfif'
import { AuthContext } from '../../contexts/AuthProvider';
import { JwtContext } from '../../contexts/JWT';

const SignUp = () => {
    useTitle(`${document.title}-SignUp`)

    const { signUp, setProfile } = useContext(AuthContext);
    const { jwtManager } = useContext(JwtContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password);

        if (password.length < 6) {
            setError('Password must contain at least 6 charactes');
        }

        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                jwtManager(user)
                setUserProfile(name, photoUrl);
                Swal.fire('Your Account has been created');
                navigate(from, { replace: true })
                form.reset();
            })
            .catch(error => {
                console.error(error);
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {

                    setError('This user already exists');
                }
            })
    }

    const setUserProfile = (name, photoUrl) => {

        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        setProfile(profile)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='flex lg:flex-row flex-col'>
            <div className='lg:w-[50%] lg:h-full h-[500px] lg:p-0 p-10 px-20 rounded-lg'>
                <img className='w-full h-full rounded-lg' src={authImage} alt="" />
            </div>
            <div className='lg:w-[50%] w-[90%] mx-auto p-10'>
                <div className="flex flex-col p-6 border-2 border-solid border-green-900 rounded-lg sm:p-10 ">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold text-green-900">Sign Up</h1>
                        <p className="text-sm text-green-400 font-bold">Sign Up to create account</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-start font-bold text-green-900">User Name</label>
                                <input type="text" name="name" id="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md border-green-900 border-solid border-5 text-green-900 font-bold" />
                            </div>
                            <div>
                                <label htmlFor="photoUrl" className="block mb-2 text-start font-bold text-green-900">Photo Url</label>
                                <input type="text" name="photoUrl" id="photoUrl" placeholder="Your Profile Image" className="w-full px-3 py-2 border rounded-md border-green-900 border-solid border-5 text-green-900 font-bold" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-start font-bold text-green-900">Email address</label>
                                <input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md border-green-900 border-solid border-5 text-green-900 font-bold" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-start font-bold text-green-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-green-900 border-5 text-green-900 font-bold border-solid" required />
                            </div>
                        </div>
                        <div className="space-y-2 mt-5">
                            <p className='text-red-800 font-bold'>{error}</p>
                            <div>
                                <button type="submit" className="btn btn-primary bg-green-500 w-full">Sign Up</button>
                            </div>
                            <p className="text-center text-green-900 text-xl font-bold">Already have an account yet?
                                <Link to={'/signin'} className="hover:underline text-blue-900">Sign In</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignUp;