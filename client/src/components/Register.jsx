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
        <div className='mt-4 grow flex items-center justify-around h-screen'>
        <div className='h-4/5 w-3/5 mb-20 border-black-400 md:border text-black shadow-sm px-8 py-12'>
          {/* <h1 className='text-5xl text-center mb-4'>Login</h1> */}
        {/* <div className="mt-4 grow flex items-center justify-around"> */}
            {/* <div className="mb-64"> */}
                <h1 className="text-5xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="mt-6">
                    <button type="submit" className="primary">Register</button>
                    <div className="text-center py-3 text-gray-500">
                        Already a member !{" "}
                        <Link
                            to="/login"
                            className="underline text-black font-medium"
                        >
                            Login
                        </Link>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
