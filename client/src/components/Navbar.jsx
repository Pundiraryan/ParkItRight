import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../userContext'
import globe from '../assets/world-globe.png'
import park from '../assets/parking.png'
import report from '../assets/air-horn.png'
const Navbar = () => {
    const { user } = useContext(UserContext)
    return (
        <div>
            <header className='fixed top-0 z-10 bg-gray-100 py-3 flex w-screen flex-row md:px-4 gap-2 justify-center md:justify-evenly items-center md:gap-3'>

                <Link to='/' className='flex items-center gap-3'>
                    <img src={park} alt="" className='w-[40px]' />
                    <span className='font-bold text-2xl text-black'>ParkItRight</span>

                </Link>
                {/* <div className='w-2/5 flex justify-right border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-200'>
                    <div className='justify-center w-2/5'>Search</div>
                    <div className=' border-l border-gray-300'></div>
                    <div>Any week</div>
                    <div className=' border-l border-gray-300'></div>
                    <div>Guest</div>
                    <button className='bg-primary text-white p-1 rounded-full '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-65 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </button>
                </div> */}
                <div className="h-12 flex w-4/6 overflow-hidden rounded-full border border-gray-400 bg-gray-300 shadow-sm hover:shadow-lg md:w-1/2">
                    <div className="grow">
                        <input
                            type="search"
                            placeholder="Where you want to park?"
                            className="h-full w-full border-none py-2 px-4 text-sm  focus:outline-none md:text-lg"
                        // onChange={(e) => handleSearch(e)}
                        // value={searchText}
                        />
                    </div>
                    <div className="bg-blue flex cursor-pointer  items-center bg-primary text-white">
                        <button
                            className="flex rounded-r-full bg-primary py-2 px-4 md:p-2"
                        // onClick={handleSearch}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="mt-1 h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                            <span className="ml-1 hidden md:block">Search</span>
                        </button>
                    </div>
                </div>
                <Link to={user ? 'account' : '/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-3 hover:shadow-md shadow-gray-200'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </div>
                    <div className='bg-gray-500 text-white rounded-full border border-gray-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1 overflow-hidden">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>

                    </div>
                    {user && (
                        user.name
                    )}

                </Link>
                <Link to='/report'>
                    {/* <img src={report} alt="" className='w-[40px]' />
                    <span className='font-bold text-xl text-primary'>Report</span>
                     */}
                    <div className="px-2 flex items-center overflow-hidden rounded-full border border-gray-300 shadow-sm hover:shadow-lg">
                        <img
                            className="h-10 w-10 md:h-10 md:w-10"
                            src={report}
                            alt=""
                        /><br />
                        <p className='text-black+ text-sm'>Report</p>
                    </div>

                </Link>

                <div>


                </div>
                {/* <br className="border border-gray-600" /> */}
            </header>


        </div>

    )
}

export default Navbar
