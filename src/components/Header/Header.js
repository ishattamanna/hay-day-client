import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/symbol-hay-day-supercell-crop-logo-removebg-preview.png'
import { AuthContext } from '../../contexts/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    const menu = <>
        <NavLink to="/" className={'btn btn-ghost font-bold'}>Home</NavLink>
        <NavLink to={'/services'} className={'btn btn-ghost font-bold'}>Services</NavLink>
        <NavLink to={'/blog'} className={'btn btn-ghost font-bold'}>Blog</NavLink>
        {
            user?.uid ?
                <>
                    <NavLink to={'/myreviews'} className={'btn btn-ghost font-bold'}>My Reviews</NavLink>
                    <NavLink to={'/addservice'} className={'btn btn-ghost font-bold'}>Add Service</NavLink>
                    <button onClick={handleSignOut} className={'btn btn-success text-black font-bold'}>Sign Out</button>
                </>
                :
                <NavLink to={'/signin'} className="btn btn-success text-black font-bold">Sign In</NavLink>
        }

    </>

    return (
        <div className="navbar px-[20px] bg-green-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <NavLink to={'/'} className="w-[100px] h-[100px]"><img src={logo} alt="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex items-center justify-evenly">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            {
                user?.uid &&
                <div className="navbar-end">
                    <p className='text-xl font-bold'>{user.displayName}</p>
                    {
                        user?.photoURL ?
                            <img className='mx-2 w-[60px] border-black border-solid border-2 h-[60px] rounded-full' src="" alt="" />
                            :
                            <FaUserAlt className='mx-2 border-black border-solid border-2 p-2 w-[60px] h-[60px] rounded-full'></FaUserAlt>
                    }
                </div>
            }
        </div>
    );
};

export default Header;