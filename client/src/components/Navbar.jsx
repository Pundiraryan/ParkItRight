import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';
import park from '../assets/parking.png';
import report from '../assets/air-horn.png';
import SearchBar from './SearchBar';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="bg-white py-3 shadow-lg hover:shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center gap-2 ml-8 cursor-pointer">
          <img src={park} alt="" className="w-10" />
          <span className="font-bold text-xl text-black">ParkItRight</span>
        </Link>
        <button
          className="block lg:hidden"
          type="button"
          data-te-collapse-init=""
          data-te-target="#navbarSupportedContent4"
          aria-controls="navbarSupportedContent4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="w-7">
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

        <div
          className="flex-grow lg:flex lg:items-center lg:basis-auto"
          id="navbarSupportedContent4"
        >
          <ul className="list-none lg:mr-16">
            {/* Add your navigation links here */}
          </ul>
        </div>

        <div className="absolute top-0 left-0 right-0 mt-2 flex justify-center">
          <SearchBar />
        </div>

        <div className="absolute top-0 right-0 mt-3 mr-4 flex items-center gap-2">
          <button type="button" className="text-black text-sm lg:text-base ml-4">
            <Link to={user ? 'account' : '/login'}>
              <div className="flex items-center gap-2 border bg-gray-300 border-gray-300 rounded-full py-2 px-3 hover:shadow-lg shadow-gray-400">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>
                <div className="bg-gray-500 text-white rounded-full border border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 relative top-1 overflow-hidden"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {user && <span className="text-sm">{user.name}</span>}
              </div>
            </Link>
          </button>
          <button type="button" className="text-black text-sm lg:text-base">
            <Link to="/report">
              <div className="px-2 flex bg-red-400 items-center overflow-hidden rounded-full border border-gray-300 shadow-sm hover:shadow-lg">
                <img
                  className="h-10 w-10 md:h-10 md:w-10"
                  src={report}
                  alt=""
                />
                <p className="text-md">Report</p>
              </div>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
