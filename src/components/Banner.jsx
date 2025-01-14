import React from 'react';
import BannerImage from './../assets/images/Banner.jpg'
import BannerImage2 from './../assets/images/Banner3.webp'

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen text-white"
                style={{
                    backgroundImage: `url(${BannerImage2})`,
                }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-black items-center text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl text-nowrap font-bold">Your career starts here</h1>
                        <p className="mb-5">
                            Search <strong className='font-bold'>104,824</strong> job postings in Europe.
                        </p>
                        <div className='my-2'>
                            <label className="input bg-white rounded-full flex items-center gap-2">
                                <input type="text" className="grow text-color2 w-full" placeholder="Search" />
                                <p className="cursor-pointer"><svg class="h-5 w-5 text-color2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg></p>
                            </label></div>
                            <div className='text-black text-nowrap flex align-middle justify-center text-center gap-2'>
                                <h1 className='font-bold'> Trending Jobs: </h1>
                                <p className='cursor-pointer hover:text-colorOrange duration-300'> Construction Worker</p> |
                                <p className='cursor-pointer hover:text-colorOrange duration-300'> Cleaner </p> |
                                <p className='cursor-pointer hover:text-colorOrange duration-300'> Agriculture</p> |
                                <p className='cursor-pointer hover:text-colorOrange duration-300'> Labour</p> |
                                <p className='cursor-pointer hover:text-colorOrange duration-300'> Driver</p> 
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;