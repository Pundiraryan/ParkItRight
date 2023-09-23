import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleLoginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      setUser(response.data);
      toast.success('Login Successful');
      setRedirect(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className='mt-10 flex items-center justify-center h-screen bg-primary'>
      <div className='w-full max-w-md border-black-500 rounded-3xl text-black hover:shadow-xl shadow-sm px-4 py-4 bg-white'>
        <h1 className='text-3xl md:text-5xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto' onSubmit={handleLoginUser}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full py-2 px-4 mb-4 border rounded-md focus:outline-none focus:border-black'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full py-2 px-4 mb-4 border rounded-md focus:outline-none focus:border-black'
          />
          <div className='mt-3'>
            <button className='bg-primary text-white py-2 px-4 rounded-md w-full' type='submit'>
              Login
            </button>
          </div>
          <div className='text-center py-2 text-gray-500'>
            Don't have an account yet!{' '}
            <Link to='/register' className='underline text-black font-medium'>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
