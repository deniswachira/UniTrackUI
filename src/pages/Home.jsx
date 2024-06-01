import React from 'react'
import { Link } from 'react-router-dom';
import slider2 from "../assets/slider2.jpg"
const Home = () => {
    return (
        <div className='justify-center align-center h-full bg-base-150 sm:w-full'>
            <div className="w-full md:h-fit ">
                <div className="relative w-full h-fit ">
                    <div className="hero h-fit ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={slider2} className="max-w-full sm:max-w-md md:max-w-2xl rounded-lg shadow-2xl" alt='no pic' />
                            <div className='hero1 sm:text-center md:text-center lg:text-left'>
                                <h1 className="text-5xl font-bold">Welcome to Uni Track</h1>
                                <p className="py-6">Chart Your Course to University Success</p>
                                <button className="btn btn-outline btn-success inline-block"><Link to="/register">Register To Get Started</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home