import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import AccountNav from './AccountNav';
import Perks from './Perks';
import PhotoUploader from './PhotoUploader';
import backgroundImage from '../assets/bg.png';

const ReportForm = () => {
  const { id } = useParams();
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function savePlace(e) {
    e.preventDefault();
    const placeData = { id, address, description, addedPhotos };
    if (id) {
      await axios.put('/report', { id, ...placeData });
      setRedirect(true);
    } else {
      await axios.post('/report', placeData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <section>
        <div className="bg-primary mt-4 text-white py-10">
          <div className="container mx-auto flex flex-col md:flex-row my-3 md:my-10">
            <div className="flex flex-col w-full lg:w-1/3 p-4 md:p-8">
              <p className="ml-4 md:ml-6 text-red-400 text-4xl md:text-5xl uppercase tracking-loose mt-12 md:mt-24">
                REPORT
              </p>
              <p className="text-2xl md:text-3xl my-4 md:my-8 leading-relaxed md:leading-snug">
                In case of negligent parking!
              </p>
              <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Please help us keep our streets safe and report any cars parked in non-parking zones
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-5/6 justify-center">
              <div className="container w-full px-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-4/5 px-2 sm:px-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                      <div className="flex-auto p-4 md:p-10 mx-2">
                        <form onSubmit={savePlace}>
                          <div className="border-0 px-3 py-3 rounded text-sm shadow w-full justify-center bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
                            <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 text-xl sm:text-2xl lg:text-3xl">
                              Location
                            </div>
                            <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 text-lg sm:text-lg lg:text-lg">
                              Add location of No-parking
                            </div>
                            <input
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              placeholder="Address"
                            />
                          </div>
                          <div className="border-0 mt-4 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
                            <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 text-xl sm:text-2xl lg:text-3xl">
                              Photos
                            </div>
                            <div className="border-0 sm:px-1 py-1 rounded w-full sm:w-full lg:w-5/6 text-lg sm:text-lg lg:text-lg">
                              Add Clear images with Vehicle Number
                            </div>
                            <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
                          </div>
                          <div className="border-0 mt-4 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
                            <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 text-xl sm:text-2xl lg:text-3xl">
                              Description
                            </div>
                            <div className="border-0 sm:px-5 py-1 rounded w-full sm:w-full lg:w-5/6 text-lg sm:text-lg lg:text-lg">
                              Describe the severity
                            </div>
                            <textarea className="" value={description} onChange={(e) => setDescription(e.target.value)} />
                          </div>
                          <div className="text-center mt-6">
                            <button
                              id="feedbackBtn"
                              className="bg-primary text-white text-center mx-auto active:bg-primary text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                              style={{ transition: "all 0.15s ease 0s" }}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportForm;
