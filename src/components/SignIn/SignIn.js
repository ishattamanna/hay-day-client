import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTitle } from 'react-use';
import Swal from 'sweetalert2';
import authImage from '../../assets/authImage.jfif'
import { AuthContext } from '../../contexts/AuthProvider';
import { JwtContext } from '../../contexts/JWT';


const SignIn = () => {
    useTitle(`${document.title}-SignIn`)

    const { signIn, googleSignIn, fbSignIn, gitSignIn, resetPassword } = useContext(AuthContext);
    const { jwtManager } = useContext(JwtContext)
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                jwtManager(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setError('user not found');
                    return;
                }
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setError('Password did not matched');
                }
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                jwtManager(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    };

    const handleFbSignIn = () => {
        fbSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                jwtManager(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    };

    const handleGitSignIn = () => {
        gitSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                jwtManager(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
            })
    };

    const handleReset = () => {
        if (!userEmail) {
            setError('Please provide your email to reset password');
        }
        else {
            resetPassword(userEmail)
                .then(() => {
                    Swal.fire('Please check your email to reset password');
                })
                .catch(error => {
                    console.error(error);
                })
        }

    };

    return (
        <div className='flex lg:flex-row flex-col'>
            <div className='lg:w-[50%] lg:h-full h-[500px] lg:p-0 p-10 px-20 rounded-lg'>
                <img className='w-full h-full rounded-lg' src={authImage} alt="" />
            </div>
            <div className='lg:w-[50%] w-[90%] mx-auto p-10'>
                <div className="flex flex-col p-6 border-2 border-solid border-green-900 rounded-lg sm:p-10 ">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold text-green-900">Sign in</h1>
                        <p className="text-sm text-green-400 font-bold">Sign in to access your account</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-start font-bold text-green-900">Email address</label>
                                <input onBlur={(event) => setUserEmail(event.target.value)} type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md border-green-900 border-solid border-5 text-green-900 font-bold" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-start font-bold text-green-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-green-900 border-5 text-green-900 font-bold border-solid" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className='flex items-center'>
                                <p className='text-xl text-green-900 font-bold'>Forgot Password?</p>
                                <p onClick={handleReset} className='btn btn-ghost mx-5 text-blue-900 font-bold '>Reset</p>
                            </div>
                            <div>
                                <p className='text-red-800 font-bold'>{error}</p>
                                <button type="submit" className="btn btn-primary bg-green-500 w-full">Sign in</button>
                            </div>
                            <p className="text-center text-green-900 text-xl font-bold">Don't have an account yet?
                                <Link to={'/signup'} className="hover:underline text-blue-900">Sign up</Link>.
                            </p>
                        </div>
                    </form>
                </div>
                <div className='flex items-center justify-evenly my-10'>
                    <hr className='w-[40%] border-10 border-green-900 ' />
                    <p className='text-green-900 font-bold text-xl'>Or</p>
                    <hr className='w-[40%] border-10 border-green-900 ' />
                </div>
                <div className='flex items-center justify-evenly'>
                    <FaGoogle onClick={handleGoogleSignIn} className='text-5xl font-bold text-green-900 cursor-pointer'></FaGoogle>
                    <FaFacebook onClick={handleFbSignIn} className='text-5xl font-bold text-green-900 cursor-pointer'></FaFacebook>
                    <FaGithub onClick={handleGitSignIn} className='text-5xl font-bold text-green-900 cursor-pointer'></FaGithub>
                </div>
            </div>

        </div>
    );
};

export default SignIn;