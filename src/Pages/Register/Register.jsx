
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { useEffect, useState } from "react";
import SocialLogin from "../../Shared/SocialAuth/SocialLogin";
import { toast } from "react-toastify";
import registerLottieData from '../../assets/lottie/lottie-register.json'
import Lottie from "lottie-react";


const Register = () => {
    const { createUser, updateUserProfile, setUser } = UseAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    useEffect(() => {
            document.title = "Register | Library"
          }, [])


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;
        // console.log(email, password, photoURL);

        // clear error message
        setError("");

        // password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError(
                "Password must contain an uppercase letter, a lowercase letter, and be at least 6 characters long."
            );
            return;
        };


        // sing Up
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
                updateUserProfile({ displayName: name, photoURL: photo })
                navigate("/")
                toast.success("Successfully Register")
            })
            .catch(err => {
                // console.log(err)
            })
    }



    return (
        <div className="py-20 bg-gradient-to-br from-green-100 via-purple-100 to-blue-50">


            <div className="w-11/12 lg:w-9/12 mx-auto lg:flex justify-around items-center">

                <div className="flex-1">
                    <div className="lg:w-3/4 mx-auto  p-6 bg-white rounded-lg shadow-lg">
                        {/* Title */}
                        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">
                            Register
                        </h2>

                        {/* Registration Form */}
                        <form onSubmit={handleRegister} className="space-y-3">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:border-gray-600"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:border-gray-600"
                                    required
                                />
                            </div>

                            {/* Photo URL Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Photo URL
                                </label>
                                <input
                                    type="url"
                                    name="photoURL"
                                    placeholder="Enter your photo URL"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:border-gray-600"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:border-gray-600"
                                    required
                                />
                                {
                                    error && <p className='text-xs text-red-500'>{error}</p>
                                }
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700">
                                Register
                            </button>
                        </form>

                        {/* Login Link */}
                        <div className="mt-3 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?
                                <Link to="/login" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Login
                                </Link>
                            </p>
                        </div>

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
 
                <div className="flex-1 max-w-md">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Register;