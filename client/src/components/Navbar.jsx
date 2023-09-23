import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../userContext'
// import globe from '../assets/world-globe.png'
import park from '../assets/parking.png'
import report from '../assets/air-horn.png'
import SearchBar from './SearchBar';

const Navbar = () => {
    const { user } = useContext(UserContext)
    return (
        <>
  {/* Main navigation container */}
  <nav
    className="fixed top-0 z-10 flex w-full flex-wrap items-center justify-between bg-white py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-white lg:py-2"
    data-te-navbar-ref=""
  >
    <div className="flex w-full flex-wrap items-center justify-between px-3">
      <div>
        <div
          className="mx-12 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
          href="#"
        >
            <Link to='/' className='flex items-center gap-2'>
                   <img src={park} alt="" className='w-[40px]' />
                   <span className='font-bold text-2xl text-black'>ParkItRight</span>

                 </Link>
        </div>
      </div>
      {/* Hamburger button for mobile view */}
      <button
        className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button"
        data-te-collapse-init=""
        data-te-target="#navbarSupportedContent4"
        aria-controls="navbarSupportedContent4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* Hamburger icon */}
        <span className="[&>svg]:w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {/* Collapsible navbar container */}
      <div
        className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto pr-3"
        id="navbarSupportedContent4"
        data-te-collapse-item=""
      >
        {/* Left links */}
        <ul
          className="list-style-none mr-28 flex flex-col pl-3 lg:mt-1 lg:flex-row"
          data-te-navbar-nav-ref=""
        >
          {/* Home link */}
         
        </ul>
        {/* <div className="h-12 flex w-4/6 overflow-hidden rounded-full border border-gray-400 bg-gray-300 shadow-sm hover:shadow-lg md:w-1/2">
                     <div className="grow">
                         <input
                             type="search"
                             placeholder="Where you want to park?"
                             className="h-full w-full border-none py-2 px-4 text-sm  focus:outline-none md:text-lg"
                        //  onChange={(e) => handleSearch(e)}
                        //  value={searchText}
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
                 </div> */}
        <div className="flex items-center">
        {<SearchBar />}
          <button
            type="button"
            data-te-ripple-init=""
            data-te-ripple-color="light"
            className="mr-16 inline-block rounded px-6 pb-2 pt-2.5 border-black text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out  focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
          >
            <Link to={user ? 'account' : '/login'} className='flex items-center gap-2 border bg-gray-300 border-gray-300 rounded-full py-2 px-3 hover:shadow-md shadow-gray-200'>
               <div>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                         </svg>

                     </div>
                     <div className='bg-gray-500 text-white rounded-full border border-gray-500'>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 relative top-1 overflow-hidden">
                             <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                         </svg>

                     </div>
                     {user && (
                         user.name
                     )}

                </Link>
          </button>
          {/* <button
            type="button"
            data-te-ripple-init=""
            data-te-ripple-color="light"
            className="mr-3 inline-block rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          > */}
             <Link to='/report'>
                     {/* <img src={report} alt="" className='w-[40px]' />
                     <span className='font-bold text-xl text-primary'>Report</span>
                     */}
                     <div className="px-2 py-1 bg-red-400 flex items-center overflow-hidden rounded-full border hover:shadow-lg">
                         <img
                             className="h-10 w-10 md:h-10 md:w-10"
                             src={report}
                             alt=""
                         /><br />
                       <p className='text-black text-md'>Report</p>
                    </div>

             </Link>
          {/* </button> */}
         
        </div>
      </div>
    </div>
  </nav>
</>
 
//   <div>
//             <header className='fixed top-0 z-10 bg-gray-100 py-3 flex w-screen flex-row md:px-4 gap-2 justify-center md:justify-evenly items-center md:gap-3'>

//                 <Link to='/' className='flex items-center gap-3'>
//                     <img src={park} alt="" className='w-[40px]' />
//                     <span className='font-bold text-2xl text-black'>ParkItRight</span>

//                 </Link>
//                 {/* <div className='w-2/5 flex justify-right border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-200'>
//                     <div className='justify-center w-2/5'>Search</div>
//                     <div className=' border-l border-gray-300'></div>
//                     <div>Any week</div>
//                     <div className=' border-l border-gray-300'></div>
//                     <div>Guest</div>
//                     <button className='bg-primary text-white p-1 rounded-full '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-65 h-5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
//                     </svg>
//                     </button>
//                 </div> */}
//                 <div className="h-12 flex w-4/6 overflow-hidden rounded-full border border-gray-400 bg-gray-300 shadow-sm hover:shadow-lg md:w-1/2">
//                     <div className="grow">
//                         <input
//                             type="search"
//                             placeholder="Where you want to park?"
//                             className="h-full w-full border-none py-2 px-4 text-sm  focus:outline-none md:text-lg"
//                         // onChange={(e) => handleSearch(e)}
//                         // value={searchText}
//                         />
//                     </div>
//                     <div className="bg-blue flex cursor-pointer  items-center bg-primary text-white">
//                         <button
//                             className="flex rounded-r-full bg-primary py-2 px-4 md:p-2"
//                         // onClick={handleSearch}
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={3}
//                                 stroke="currentColor"
//                                 className="mt-1 h-4 w-4"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//                                 />
//                             </svg>
//                             <span className="ml-1 hidden md:block">Search</span>
//                         </button>
//                     </div>
//                 </div>
//                 <Link to={user ? 'account' : '/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-3 hover:shadow-md shadow-gray-200'>
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                         </svg>

//                     </div>
//                     <div className='bg-gray-500 text-white rounded-full border border-gray-500'>
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1 overflow-hidden">
//                             <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
//                         </svg>

//                     </div>
//                     {user && (
//                         user.name
//                     )}

//                 </Link>
//                 <Link to='/report'>
//                     {/* <img src={report} alt="" className='w-[40px]' />
//                     <span className='font-bold text-xl text-primary'>Report</span>
//                      */}
//                     <div className="px-2 flex items-center overflow-hidden rounded-full border border-gray-300 shadow-sm hover:shadow-lg">
//                         <img
//                             className="h-10 w-10 md:h-10 md:w-10"
//                             src={report}
//                             alt=""
//                         /><br />
//                         <p className='text-black+ text-sm'>Report</p>
//                     </div>

//                 </Link>

//                 <div>


//                 </div>
//                 {/* <br className="border border-gray-600" /> */}
//             </header>


//         </div>

    )
}

export default Navbar