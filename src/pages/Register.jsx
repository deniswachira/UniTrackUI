import { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loading-icons'
import { useMutation } from '@tanstack/react-query';
import wretch from "wretch";
import { Context } from '../context/Context';
import { localhostURL, azureURL } from '../components/Constants';

function Register() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError] = useState(false);
    const [successMgs, setSuccessMgs] = useState(false);
    const { dispatch } = useContext(Context);
    const navigate = useNavigate();


    const RegisterMutation = useMutation({
        mutationFn: async (data) => {
            wretch(`${localhostURL}/users/auth/register`)
                .post(data).json()
                .then((data) => {
                    if (data.token) {
                        setSuccessMgs(true);
                        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
                        navigate("/user_profile");
                        setTimeout(() => setSuccessMgs(false), 4000);
                    }
                })
                .catch(error => {
                    dispatch({ type: 'LOGIN_FAILURE' });
                    setError(error.message);
                    setTimeout(() => setError(false), 3000);
                })
        },
        onError: (error) => {
            setError(error.message);
            setTimeout(() => setError(false), 3000);
        }
    })

    const onSubmit = async (data) => {
        RegisterMutation.mutate(data);
        // console.log(data)
    };
    return (
        <main className='mt-10px'>
            {
                RegisterMutation.isLoading ?
                    (
                        <ThreeDots stroke="#98ff98" strokeOpacity={.125} speed={.75} />
                    ) : (
                        error ? (
                            <div className="alert alert-error mt-60px shadow-lg w-fit z-50 text-center text-white absolute top-0 right-0" >
                                <div><span className='text-2xl'>😒</span>
                                    <span>Error! Email Or Username Already Exist!</span>
                                </div>
                            </div >
                        ) : (
                            successMgs && (
                                <div className="alert alert-error mt-60px shadow-lg w-fit z-50 text-center text-white absolute top-0 right-0" >
                                    <div><span className='text-2xl'>😁</span>
                                        <span>User registered Successfully</span>
                                    </div>
                                </div>
                            )
                        )
                    )
            }
            <div className="hero-content">
                <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold registerHeader">✍️  Register now!</h1>

            </div>
            <div className="form-control mt-4 text-center">
                <p className="text-sm">
                    Already have an Account? <Link className="text-blue-500 hover:underline" to="/login">Login here</Link>
                </p>
            </div>
            <div className="hero ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card">
                            <div className="card-body md:flex-row sm:flex-col lg:flex-row">
                                <div>

                                    <label className="label"><span className="label-text">First Name</span></label>
                                    <input type="text" {...register("firstName", { required: true })} placeholder="Enter your firstname" className="input input-bordered" />
                                    {errors.firstName?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">First name is required 😶</p>}
                                    <label className="label"><span className="label-text">Last Name</span></label>
                                    <input type="text" {...register("lastName", { required: true })} placeholder="Enter your lastname" className="input input-bordered" />
                                    {errors.lastName?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Last name is required 😶</p>}
                                    <label className="label"><span className="label-text">County</span></label>
                                    <input type="text" {...register("county", { required: true })} placeholder="Enter your age" className="input input-bordered" />
                                    {errors.county?.type === 'required' && <p className="label-text-alt text-red-400 pt-2"> County is required 😶</p>}
                                    <label className="label"><span className="label-text">Username</span></label>
                                    <input type="text" {...register("userName", { required: true })} placeholder="Choose your username" className="input input-bordered" />
                                    {errors.userName?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Username is required 😶</p>}
                                </div>
                                <div className='md:ml-4 lg:ml-4'>
                                    <label className="label"><span className="label-text">Gender</span></label>
                                    <select {...register("gender", { required: true })} className="select select-bordered w-full max-w-xs">
                                        <option selected disabled value="">Select your gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.gender?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Gender is required 😶</p>}
                                    <label className="label"><span className="label-text">Final Grade</span></label>
                                    <select {...register("finalGrade", { required: true })} className="select select-bordered w-full max-w-xs">
                                        <option selected disabled value="">Select your Grade</option>
                                        <option value="A">A</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B">B</option>
                                        <option value="B-">B-</option>
                                        <option value="C+">C+</option>
                                        <option value="C">C</option>
                                        <option value="C-">C-</option>
                                        <option value="D+">D+</option>
                                        <option value="D">D</option>
                                        <option value="D-">D-</option>
                                        <option value="E">E</option>
                                    </select>
                                    {errors.finalGrade?.type === 'required' && <p className="label-text-alt text-red-400 pt-2"> final grade is required 😶</p>}
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
