import React from 'react';
import logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-color2 text-color3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a  className='hover:text-colorOrange duration-300'>Services</a></li>
                            <li>
                                <a>Job Category</a>
                                <ul className="p-2">
                                <li><a className='hover:text-colorOrange'>Construction Worker</a></li>
                                    <li><a className='hover:text-colorOrange duration-300'>Cleaner</a></li>
                                    <li><a className='hover:text-colorOrange duration-300'>Agriculture</a></li>
                                    <li><a className='hover:text-colorOrange duration-300'>Labour</a></li>
                                    <li><a className='hover:text-colorOrange duration-300'>Cleaner</a></li>
                                    <li><a className='hover:text-colorOrange duration-300'>Driver</a></li>
                                </ul>
                            </li>
                            <li><a className='hover:text-colorOrange'>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-sm sm:text-xl font-bold"><h1>Job<span className='text-colorOrange'>Questify</span> </h1></a>
                    {/* <img className='w-32 h-32' src={logo} alt="" /> */}
                </div>
                <div className="navbar-center hidden lg:flex">  
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='hover:text-colorOrange duration-300'>Services</a></li> 
                        <li>
                            <details>
                                <summary className='hover:text-colorOrange duration-300'>Job Category</summary>
                                <ul className="p-2">
                                    <li><a className='hover:text-colorOrange duration-300'>Construction Worker</a></li>
                                    <li><a className='hover:text-colorOrange duration-300'>Cleaner</a></li>
                                    <li><a className='hover:text-colorOrange duration-300'>Agriculture</a></li>
                                    <li><a className='hover:text-colorOrange duration-300'>Labour</a></li>
                                    <li><a className='hover:text-colorOrange duration-300'>Cleaner</a></li>
                                    <li><a className='hover:text-colorOrange duration-300'>Driver</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a className='hover:text-colorOrange duration-300'>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/submitApplication'  className="btn btn-ghost font-bold cursor-pointer text-colorOrange text-sm sm:text-lg hover:text-color3 duration-300">Submit Application</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;