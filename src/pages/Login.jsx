import { useState, useContext } from 'react';
import login from "../assets/Login.png";
import { useForm } from "react-hook-form";
import wretch from 'wretch';
import { Context } from '../context/Context';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loading-icons';
import { localhostURL, azureURL } from '../components/Constants';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError] = useState(false);
    const { dispatch } = useContext(Context);
    const navigate = useNavigate();

    const loginMutation = useMutation({
        mutationFn: async (data) => {
            return wretch(`${localhostURL}/users/auth/login`)
                .post(data)
                .json()
                .then((data) => {
                    if (data.token) {
                        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
                        navigate("/user_profile");
                    }
                })
                .catch(error => {
                    dispatch({ type: 'LOGIN_FAILURE' });
                    setError(error.message);
                    setTimeout(() => setError(false), 3000);
                });
        },
        onError: (error) => {
            setError(error);
            setTimeout(() => setError(false), 3000);
        }
    });

    const onSubmit = (data) => {
        loginMutation.mutate(data);
    };

    return (
        <div className='flex items-center justify-center h-screen p-4 mt-5 loginPage'>
            <div className="flex flex-col-reverse lg:flex-row justify-around items-center w-full lg:w-3/4 max-w-screen-lg">
                {
                    loginMutation.isLoading ? (
                        <ThreeDots stroke="#98ff98" strokeOpacity={.125} speed={.85} />
                    ) : (
                        error && (
                            <div className="alert alert-error mt-60px shadow-lg w-fit z-50 text-center text-white absolute top-0 right-0">
                                <div>
                                    <span >Wrong Credentials 😒</span>
                                </div>
                            </div>
                        )
                    )
                }
                <div className="w-full lg:w-1/2 p-4 flex justify-center">
                    <div className="card w-full max-w-sm shadow-2xl p-4">
                        <div className="card-header loginHeader text-center mb-4">
                            <h1 className="text-3xl lg:text-5xl font-bold">Login 🔐</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text text-lg lg:text-xl">Username</span>
                                    </label>
                                    <input type="text" {...register("userName", { required: true })} placeholder="Enter username" className="input input-warning input-lg input-bordered w-full" />
                                    {errors.userName?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Username is required 😶</p>}
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text text-lg lg:text-xl">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} placeholder="Enter password" className="input input-warning input-lg input-bordered w-full" />
                                    {errors.password?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Password is required 😶</p>}
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover" to="/reset">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-outline btn-success w-full">Login</button>
                                </div>
                                <div className="form-control mt-4 text-center">
                                    <p className="text-sm">
                                        Don't have an account? <Link className="text-blue-500 hover:underline" to="/register">Register here</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-4 flex justify-center loginImg">
                    <img alt='Login' src={login} className="max-w-full lg:max-w-lg rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Login;
