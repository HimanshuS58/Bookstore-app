import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        await axios.post('https://bookstore-app-backend-tp91.onrender.com/user/signup', userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Signup successfully")
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));  // Note: when we store the data into the local storage we store it in the form of string that's why we always use JSON.stringify().
                setTimeout(() => {
                    window.location.href = '/'  // route back to the homepage
                }, 2000)
            })
            .catch((error) => {
                console.log("Error: ", error.response.data);
                toast.error("Error: ", error.response.data);
            })
    };

    return (
        <>
            <div className='flex h-screen items-center justify-center dark:bg-slate-800'>
                <div className="w-145 shadow-xl p-5 rounded-md dark:bg-white dark:text-black" >
                    <div className="">
                        <form
                            method="dialog"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            {/* if there is a button in form, it will close the modal */}
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost relative md:left-130">
                                ✕
                            </Link>
                            <h3 className="font-bold text-lg">Signup</h3>

                            {/* Name */}
                            <div className='mt-4'>
                                <span>Name</span>
                                <br />
                                <input type="text"
                                    placeholder='Enter your name'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && (
                                    <span className='text-sm text-red-500'>This field is required</span>
                                )}
                            </div>
                            {/* Email */}
                            <div className='mt-4'>
                                <span>Email</span>
                                <br />
                                <input type="email"
                                    placeholder='Enter your email'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && (
                                    <span className='text-sm text-red-500'>This field is required</span>
                                )}
                            </div>
                            {/* password */}
                            <div className='mt-4'>
                                <span>Password</span>
                                <br />
                                <input type="text"
                                    placeholder='Enter password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && (
                                    <span className='text-sm text-red-500'>This field is required</span>
                                )}
                            </div>
                            {/* Button */}
                            <div className='flex justify-around mt-5'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                    Signup
                                </button>
                                <p>
                                    Have account?{" "}
                                    <Link
                                        onClick={() => document.getElementById('my_modal_3').showModal()}
                                        className='underline text-blue-500'
                                    >
                                        Login
                                    </Link>
                                </p>
                                <Login />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
