import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../userContext';
// import { Toast } from 'react-toastify/dist/types';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false)
  const{setUser} = useContext(UserContext)

  const handleLoginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        email, password
      }
      )
      setUser(response.data)
      // console.log(user);
      toast.success('Login Succesful')
      setRedirect(true)

    } catch (error) {
      toast.error(error)


    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }



  return (
    <div className='mt-10 grow flex items-center justify-around h-screen bg-sky-800 py-12'>
      <div className='h-3/5 w-2/5 border-black-500 rounded-3xl  md:border text-black hover:shadow-xl shadow-sm px-8 py-8 bg-white'>
        <h1 className='text-5xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto' onSubmit={handleLoginUser} >
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
          <div className='mt-3'>
          <button className='primary' type='submit'>Login</button>
          </div>
          <div className='text-center py-2 text-gray-500'>
            Don't have account yet ! <Link to='/register' className='underline text-black font-medium'>Register now</Link>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login
