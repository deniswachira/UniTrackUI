import React from 'react';

const HowItWorks = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">How Uni Track Works</h1>
                <p className="text-lg text-gray-600">Follow these simple steps to navigate through Uni Track and find your ideal university and course.</p>
            </div>
            <div className="relative">
                <div className="mb-12 flex flex-col  items-center">
                    <div className="w-full flex justify-end pr-8 order-2 md:order-1">
                        <div className="text-right md:text-left">
                            <div className="text-primary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto md:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.364A9 9 0 0112 15a9 9 0 016.879 3.364M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">Step 1: Register and Create Your Profile</h2>
                            <p className="text-sm md:text-base">Sign up for a Uni Track account and fill in your personal details, academic background, and interests. This helps us tailor the recommendations to suit your needs.</p>
                            <a href="/register" className="btn btn-primary btn-outline mt-4">Register Now</a>
                        </div>
                    </div>
                </div>
                <div className="mb-12 flex flex-col  items-center">
                    <div className="w-full  flex justify-end pl-8 order-1 md:order-2">
                        <div className="text-left md:text-right">
                            <div className="text-primary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto md:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9h8M8 13h3m-3 4h3m4-4h3m0 4h3m0-10H5v14h14V5z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">Step 2: Calculate Your Cluster Points</h2>
                            <p className="text-sm md:text-base">Use our cluster points calculator to determine your eligibility for various courses. Enter your exam scores and get instant results.</p>
                            <a href="/calculator" className="btn btn-primary btn-outline mt-4">Try the Calculator</a>
                        </div>
                    </div>
                </div>
                <div className="mb-12 flex flex-col items-center">
                    <div className="w-full  flex justify-end pr-8 order-2 md:order-1">
                        <div className="text-right md:text-left">
                            <div className="text-primary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto md:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6a4 4 0 014 4v1h1a4 4 0 014 4v1h-8v-1a4 4 0 00-4-4H4v-1a4 4 0 014-4h2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">Step 3: Explore Universities and Courses</h2>
                            <p className="text-sm md:text-base">Browse through our extensive database of universities and courses. Filter your search based on location, course type, and cut-off points to find your best matches.</p>
                            <a href="/universities" className="btn btn-primary btn-outline mt-4">Explore Now</a>
                        </div>
                    </div>
                </div>
                <div className="mb-12 flex flex-col items-center">
                    <div className="w-full flex justify-end pl-8 order-1 md:order-1">
                        <div className="text-left md:text-right">
                            <div className="text-primary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto md:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8m-8 4h6M5 3v18a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H6a1 1 0 00-1 1z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">Step 4: Receive Personalized Recommendations</h2>
                            <p className="text-sm md:text-base">Get personalized university and course recommendations based on your profile and preferences. This helps you make informed decisions about your future education.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
