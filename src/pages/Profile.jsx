import React from 'react'
import UserSidebar from '../components/UserSidebar'
import { useForm } from "react-hook-form";

const Profile = () => {
    const { register, formState: { errors } } = useForm();
    return (
        <>
            <div className="flex flex-row mt-60px sm:h-fit md:h-full bg-base-200 ">
                <UserSidebar />
                <label htmlFor="my-modal-3" className="btn bg-warning text-dark updates" >
                    UPDATE DATA
                </label>
                <main className="container  grid md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center h-full mx-2 mb-3">

                    <>

                        <ul className="menu menu-vertical bg-base-100 rounded-box p-2 text-xl">
                            <li><a href="#">Full Names : </a> </li>
                            <li><a href="#">Age : </a></li>
                            <li><a href="#">Gender : </a> </li>
                            <li><a href="#">Email : </a></li>
                            <li><a href="#">G.P.A : </a></li>
                            <li><a href="#">Education Level : </a></li>
                            <li><a href="#">Country of Residence : </a></li>
                        </ul>
                        <ul className="menu menu-vertical bg-base-100 rounded-box p-2 text-xl justify-center">
                            <li><a>Username : </a></li>
                            <li><a>Password : ******</a></li>
                        </ul>
                    </>
                </main>
            </div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal" >
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-3xl text-center font-bold">Update Details</h3>
                    <form >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-warning">Name</span>
                            </label>
                            <input type="text" className="input input-warning"
                                {...register("fullname", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="text-xl text-warning">Gender</span></label>
                            <select  {...register("gender", { required: true })} className="select select-warning">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-warning">Education Level</span>
                            </label>
                            <select {...register("education_level", { required: true })} className="select select-warning">
                                <option value="postgraduate">Postgraduate</option>
                                <option value="undergraduate">Undergraduate</option>
                                <option value="seniorsecondaryschool">Senior Secondary School</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-warning">Email</span>
                            </label>
                            <input type="text" className="input input-warning "
                                {...register("email", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-warning">GPA</span>
                            </label>
                            <input type="text" className="input input-warning input-bordered"
                                {...register("gpa", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-warning">country</span>
                            </label>
                            <select {...register("country", { required: true })} className="select select-warning">
                                <option value="kenya">Kenya</option>
                                <option value="uganda">Uganda</option>
                                <option value="tanzania">Tanzania</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-warning">Username</span>
                            </label>
                            <input type="text" className="input input-warning"
                                {...register("username", { required: true })} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-warning">Password</span>
                            </label>
                            <input type="text" className="input input-warning"
                                {...register("password", { required: true })} />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn w-3/4 btn-outline btn-info mx-auto">Update</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Profile