import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { Navigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const registerUser = async(e) =>{
      e.preventDefault()
      try {
        await axios.post('/register', {
          name , email , password
        })
        toast.success("Registered Successfully !");
        setRedirect(true);
        
      } catch (error) {
        toast.error("Registration Failed ! Try again later ")
        
      }
    }

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <div className='mt-10 flex items-center justify-center h-screen bg-primary py-20'>
            <div className='w-full max-w-md border-black-400 rounded-3xl md:border text-black hover:shadow-xl shadow-sm px-8 py-8 bg-white'>
                <h1 className="text-5xl text-center mb-4">Register</h1>
                <form onSubmit={registerUser}>
                    <div className="flex flex-col mb-4"> {/* Added this flex container */}
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded mt-2 focus:outline-none focus:border-primary"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded mt-2 focus:outline-none focus:border-primary"
                        />
                    </div>
                    <div className="flex justify-center"> {/* Centered flex container */}
                        <button
                            type="submit"
                            className="bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-primary w-full"
                        >
                            Register
                        </button>
                    </div>
                    <div className="text-center py-3 text-gray-500">
                        Already a member!{" "}
                        <Link
                            to="/login"
                            className="underline text-black font-medium"
                        >
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
