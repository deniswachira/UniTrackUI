import React from 'react'

const Testimonials = () => {
    return (
        <>
            <div class="container mx-auto py-12 px-4">
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold mb-4">What Our Users Say</h1>
                    <p class="text-lg text-gray-600">Hear from students who have successfully navigated their university applications with Uni Track.</p>
                </div>
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <div class="flex items-center mb-4">
                                <div class="avatar">
                                    <div class="w-16 rounded-full">
                                        <img src="https://via.placeholder.com/150" alt="User 1" />
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h2 class="card-title text-xl font-bold">Jane Doe</h2>
                                    <p class="text-sm text-gray-500">Computer Science Student</p>
                                </div>
                            </div>
                            <p class="text-gray-700">"Uni Track made it so easy to understand the university application process. The cluster points calculator was incredibly helpful!"</p>
                        </div>
                    </div>
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <div class="flex items-center mb-4">
                                <div class="avatar">
                                    <div class="w-16 rounded-full">
                                        <img src="https://via.placeholder.com/150" alt="User 2" />
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h2 class="card-title text-xl font-bold">John Smith</h2>
                                    <p class="text-sm text-gray-500">Engineering Student</p>
                                </div>
                            </div>
                            <p class="text-gray-700">"Thanks to Uni Track, I found the perfect course and university. The personalized recommendations were spot on!"</p>
                        </div>
                    </div>
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <div class="flex items-center mb-4">
                                <div class="avatar">
                                    <div class="w-16 rounded-full">
                                        <img src="https://via.placeholder.com/150" alt="User 3" />
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h2 class="card-title text-xl font-bold">Alice Johnson</h2>
                                    <p class="text-sm text-gray-500">Business Student</p>
                                </div>
                            </div>
                            <p class="text-gray-700">"Navigating the application process was a breeze with Uni Track. I highly recommend it to all students."</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials