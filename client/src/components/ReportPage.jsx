import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
//import AccountNav from './AccountNav'
import Perks from './Perks'
import PhotoUploader from './PhotoUploader'
import backgroundImage from '../assets/bg.png'
// import Background from '../assets/bg.png'
const ReportForm = () => {
    const { id } = useParams()
    //const [price , setPrice] = useState(100)
    //const [title, setTitle] = useState("")
    const [address, setAddress] = useState("")
    const [addedPhotos, setAddedPhotos] = useState([])
    const [description, setDescription] = useState("")
    //const [perks, setPerks] = useState([])
    //const [extraInfo, setExtraInfo] = useState('')
    //const [checkIn, setCheckIn] = useState('')
    //const [checkOut, setCheckOut] = useState('')
    //const [maxGuests, setMaxGuests] = useState(1)
    const [redirect, setRedirect] = useState(false)

    
    const handleApiRequest = async () => {
        try {
          if (!addedPhotos) {
            console.error('No photo selected.');
            return;
          }
    
          // Create a FormData object to send the photo
          const formData = new FormData();
          formData.append('photo', addedPhotos);
    
          // Make the first API request to the Flask API
          const response = await axios.post('http://your-flask-api-url/upload-photo', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          const { result } = response.data;
    
          // Check the result from the first API request
          if (result === true) {
            // If the result is true, make a further request to another API
            const dataToSend = {
              // Add variables from the request body as needed
              variable1: 'value1',
              variable2: 'value2',
            };
    
            const secondApiResponse = await axios.post('http://another-api-url', dataToSend);
    
            // Handle the response from the second API as needed
            console.log('Second API Response:', secondApiResponse.data);
          } else {
            // If the result is false, do nothing
            console.log('Result is false. No further action required.');
          }
    
          // Set the result state based on the response from the first API
          setResult(result);
        } catch (error) {
          console.error('Error:', error);
        }
      };

    // useEffect(() => {
    //     if (!id) {
    //         return;
    //     }

    //     axios.get('/places/' + id)
    //     .then(response => {
    //         const { data } = response
    //        // setTitle(data.title);
    //         setAddress(data.address);
    //         setAddedPhotos(data.photos)
    //         setDescription(data.description)
    //        // setExtraInfo(data.extraInfo)
    //        // setCheckIn(data.checkIn)
    //        // setCheckOut(data.checkOut)
    //        // setPerks(data.perks)
    //        // setMaxGuests(data.maxGuests)
    //        // setPrice(data.price)
    //     })

    // }, [id])

    function preInput(header, description) {
        return (
            <div>
                
                <h2 className='text-2xl mt-4'>{header}</h2>
                <p className='text-sm text-gray-500'>{description}</p>
            </div>

        )
    }


    async function savePlace(e) {
        e.preventDefault();
        //const placeData = {id, title, address, description, perks, addedPhotos, extraInfo, checkIn, checkOut, maxGuests ,price}
        const placeData = {id, address, description, addedPhotos}
        if(id){
            //AddPlace
            await axios.put("/report",{ id , ...placeData})
            setRedirect(true)


        }else{
            //newPlace
            await axios.post("/report", placeData)
            setRedirect(true)

        }

    }
    const toHome = () => {
        return <Navigate to={'/'} />;
      };
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div>
            {/* <AccountNav /> */}
            <form onSubmit={savePlace}>
                {/* {preInput('Title', 'Title for your place . should be short and catchy as in advertisment')}
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' /> */}
                <div className="border-0 px-3 py-3 rounded text-sm shadow w-full justify-center
              bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
                 {/* {preInput('Location', 'Add location of No-parking')} */}
                 <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 mx-auto text-xl sm:text-2xl lg:text-3xl">Location</div>
<div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 sm:mx-20 text-lg sm:text-xl lg:text-xl">Add location of No-parking</div>

               {/* <div className="border-0 px-3 py-1 rounded  w-full mx-36 text-2xl">Location</div>
               
                <div className="border-0 px-3 py-1 rounded  w-full mx-20 text-xl">Add location of No-parking</div> */}
                
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder='Address' />
                </div>
                <div className="border-0 mt-4 px-3 py-3 rounded text-sm shadow w-full
              bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
                {/* <div className="border-0 px-3 py-1 rounded  w-full mx-36 text-2xl">Photos</div> */}
                {/* <div className="border-0 px-5 py-1 rounded  w-full mx-1 text-xl">Add Clear images with Vehicle Number for quick action</div> */}
                <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 mx-auto text-xl sm:text-2xl lg:text-3xl">Photos</div>
<div className="border-0 sm:px-3 py-1 rounded w-full sm:w-full lg:w-5/6 sm:mx-10 text-lg sm:text-xl lg:text-xl">Add Clear images with Vehicle Number for quick action</div>

                {/* {preInput('Photos', 'Add Clear images with Vehicle Number for quick action')} */}
                </div>
                <div className="border-0 px-3 rounded text-sm shadow w-full
              bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
                <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
                </div>
                <div className="border-0 mt-4 px-3 py-3 rounded text-sm shadow w-full
              bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
                {/* <div className="border-0 px-3 py-1 rounded  w-full mx-36 text-2xl">Description</div> */}
                {/* <div className="border-0 px-5 py-1 rounded  w-full mx-24 text-xl">Describe the severity</div> */}
                <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 mx-auto text-xl sm:text-2xl lg:text-3xl">Description</div>
<div className="border-0 sm:px-3 py-1 rounded w-full sm:w-full lg:w-5/6 sm:mx-28 text-lg sm:text-xl lg:text-xl">Describe the severity</div>
                {/* {preInput('Description', 'Describe the severity')} */}
                <textarea className='' value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                {/* {preInput('Perks', 'Select perks')} */}

                {/* <Perks selected={perks} onChange={setPerks} />
                {preInput('Extra Info', 'House rules and more')}
                <textarea value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />
                {preInput('Check in , Check out times and max guests', 'Add check-in and check-out times (24-Hour Format)')} */}

                {/* <div className='grid grid-cols-2 md:grid-cols-4 mt-4 gap-2'>
                    <div>
                        <h3 className='mt-2 -mb-1 '>Check In Time</h3>
                        <input type="number" placeholder='10:10' value={checkIn}
                            onChange={e => setCheckIn(e.target.value)} />
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1 '>Check out Time</h3>
                        <input type="number" placeholder='20:20' value={checkOut}
                            onChange={e => setCheckOut(e.target.value)} />
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1 '>Max guests</h3>
                        <input type="number" placeholder='Guests' value={maxGuests}
                            onChange={e => setMaxGuests(e.target.value)} />
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1 '>Price Per night</h3>
                        <input type="number" placeholder='Guests' value={price}
                            onChange={e => setPrice(e.target.value)} />
                    </div>
                </div> */}
                <div className="text-center mt-6">
                    <button className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">Confirm Report</button>
                </div>
            </form>
                   
                    {/* <form id="feedbackForm" action="" method="">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="border-0 px-3 py-3 rounded text-sm shadow w-full
              bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                          placeholder=" "
                          style={{ transition: "all 0.15s ease 0s" }}
                          required=""
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          maxLength={300}
                          name="feedback"
                          id="feedback"
                          rows={4}
                          cols={80}
                          className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                          placeholder=""
                          required=""
                          defaultValue={""}
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          id="feedbackBtn"
                          className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                          style={{ transition: "all 0.15s ease 0s" }}
                        >
                          Submit
                        </button>
                      </div>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

            
        </div>
    )
}

export default ReportForm
