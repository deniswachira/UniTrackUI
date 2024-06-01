import { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Register() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <main className='mt-10px'>
            <div className="hero-content">
                <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold registerHeader">✍️  Register now!</h1>

            </div>
            <div className="form-control mt-4 text-center">
                <p className="text-sm">
                    Already have an Account? <Link className="text-blue-500 hover:underline" to="/login">Login here</Link>
                </p>
            </div>
            <div className="hero ">
                <form>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card">
                            <div className="card-body md:flex-row sm:flex-col lg:flex-row">
                                <div>

                                    <label className="label"><span className="label-text">First Name</span></label>
                                    <input type="text" {...register("fname", { required: true })} placeholder="Enter your firstname" className="input input-bordered" />
                                    {errors.fname?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">First name is required 😶</p>}
                                    <label className="label"><span className="label-text">Last Name</span></label>
                                    <input type="text" {...register("lname", { required: true })} placeholder="Enter your lastname" className="input input-bordered" />
                                    {errors.lname?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Last name is required 😶</p>}
                                    <label className="label"><span className="label-text">Age</span></label>
                                    <input type="text" {...register("age", { required: true })} placeholder="Enter your age" className="input input-bordered" />
                                    {errors.age?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Age is required 😶</p>}
                                    <label className="label"><span className="label-text">Username</span></label>
                                    <input type="text" {...register("username", { required: true })} placeholder="Choose your username" className="input input-bordered" />
                                    {errors.username?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Username is required 😶</p>}
                                </div>
                                <div className='md:ml-4 lg:ml-4'>
                                    <label className="label"><span className="label-text">Gender</span></label>
                                    <select {...register("gender", { required: true })} className="select select-bordered w-full max-w-xs">
                                        <option selected disabled value="">Select your gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.gender?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Gender is required 😶</p>}
                                    <label className="label"><span className="label-text">Education level</span></label>
                                    <select {...register("education_level", { required: true })} className="select select-bordered w-full max-w-xs">
                                        <option selected disabled value="">Select education level</option>
                                        <option value="postgraduate">Postgraduate</option>
                                        <option value="undergraduate">Undergraduate</option>
                                        <option value="seniorsecondaryschool">Senior Secondary School</option>
                                    </select>
                                    {errors.education_level?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Education level is required 😶</p>}
                                    <label className="label"><span className="label-text">Email</span></label>
                                    <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ })} type="text" placeholder="Enter your email" className="input input-bordered" />
                                    {errors.email?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Email is required 😶</p>}
                                    {errors.email?.type === 'pattern' && <p className="label-text-alt text-red-400 pt-2">Invalid email 😶</p>}

                                    <label className="label"><span className="label-text">Password</span></label>
                                    <input {...register("password", { required: true })} type="password" placeholder="Enter password" className="input input-bordered input-md w-full max-w-xs" />
                                </div>
                            </div>
                            <div className="form-control mt-3 grid">
                                <button type="submit" className="btn btn-success btn-outline max-w-md place-self-center w-full">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Register;
