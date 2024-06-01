import React from 'react'

const Contact = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center ">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg text-gray-600">We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
            </div>
            <div className="flex justify-center">
                <div className="w-full max-w-lg">
                    <div className="card shadow-2xl p-6">
                        <div className="card-body">
                            <form>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text text-xl">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your name" className="input input-bordered input-primary input-lg w-full" />
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text text-xl">Email</span>
                                    </label>
                                    <input type="email" placeholder="Enter your email" className="input input-bordered input-primary input-lg w-full" />
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text text-xl">Message</span>
                                    </label>
                                    <textarea placeholder="Enter your message" className="textarea textarea-bordered textarea-primary w-full" rows="6"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary btn-outline w-full">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact