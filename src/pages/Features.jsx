import React from 'react'
import slider from "../assets/slider2.jpg"
import { Link } from 'react-router-dom'

const Features = () => {
    return (
        <>
            <header class=" text-white py-8">
                <div class="container mx-auto text-center">
                    <h1 class="text-4xl font-bold mb-4">Explore Uni Track Features</h1>
                    <p class="text-lg">Discover how Uni Track can help you find your ideal university and course with ease.</p>
                </div>
            </header>

            <section class="py-12 ">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col lg:flex-row items-center mb-12">
                        <div class="lg:w-1/2 mb-6 lg:mb-0">
                            <img src={slider} alt="Feature 1" class="rounded-lg shadow-lg" />
                        </div>
                        <div class="lg:w-1/2 lg:pl-12">
                            <h2 class="text-3xl font-bold mb-4">Calculate Your Cluster Points</h2>
                            <p class="text-lg mb-4">Easily calculate your cluster points to determine your eligibility for different courses across universities. Our tool simplifies the process, saving you time and effort.</p>
                            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row-reverse items-center mb-12">
                        <div class="lg:w-1/2 mb-6 lg:mb-0">
                            <img src={slider} alt="Feature 2" class="rounded-lg shadow-lg" />
                        </div>
                        <div class="lg:w-1/2 lg:pr-12">
                            <h2 class="text-3xl font-bold mb-4">Explore Universities</h2>
                            <p class="text-lg mb-4">Get detailed information about universities including their programs, cut-off points, and campus facilities. Find the perfect fit for your academic journey.</p>
                            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row items-center mb-12">
                        <div class="lg:w-1/2 mb-6 lg:mb-0">
                            <img src={slider} alt="Feature 3" class="rounded-lg shadow-lg" />
                        </div>
                        <div class="lg:w-1/2 lg:pl-12">
                            <h2 class="text-3xl font-bold mb-4">Personalized Recommendations</h2>
                            <p class="text-lg mb-4">Receive personalized university and course recommendations based on your academic profile and interests. Uni Track helps you make informed decisions for your future.</p>
                            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row-reverse items-center mb-12">
                        <div class="lg:w-1/2 mb-6 lg:mb-0">
                            <img src={slider} alt="Feature 5" class="rounded-lg shadow-lg" />
                        </div>
                        <div class="lg:w-1/2 lg:pl-12">
                            <h2 class="text-3xl font-bold mb-4">Comprehensive Guides</h2>
                            <p class="text-lg mb-4">Access a library of guides and resources to help you with every step of the university application process. From writing personal statements to preparing for interviews, we've got you covered.</p>
                            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
                        </div>
                    </div>
                </div >
            </section >
            <section class="py-7 text-white text-center">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold mb-4">Ready to Start Your University Journey?</h2>
                    <p class="text-lg mb-8">Sign up today and take the first step towards your future with Uni Track.</p>
                    <a href="/register" class="btn btn-lg btn-outline btn-success"><Link to="/register">Get Started</Link></a>
                </div>
            </section>

        </>
    )
}

export default Features