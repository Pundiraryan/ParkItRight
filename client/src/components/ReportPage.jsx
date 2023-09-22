import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import AccountNav from './AccountNav'
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

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div>
            <>
  {/* component */}
  <section>
   
    <div className="bg-primary mt-4 text-white py-10">
    {/* <img src={bgP} alt="" className='w-[400px]' /> */}
      <div className="container mx-auto flex flex-col md:flex-row my-3 md:my-10">
        <div className="flex flex-col w-full lg:w-1/3 p-8 ml-8">
          <p className="ml-6 text-red-400 text-5xl uppercase tracking-loose mt-24">
            REPORT
          </p>
          <p className="text-3xl md:text-3xl my-8 leading-relaxed md:leading-snug">
            In case of negligent parking!
          </p>
          <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
          Please help us keep our streets safe and report any cars parked in non-parking zones
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-5/6 justify-center">
        
          <div className="container w-full px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-4/5 px-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <div className="flex-auto p-5 lg:p-10 mx-2">
                  <form onSubmit={savePlace}>
                {/* {preInput('Title', 'Title for your place . should be short and catchy as in advertisment')}
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' /> */}
                <div className="border-0 px-3 py-3 rounded text-sm shadow w-full justify-center
              bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
                 {/* {preInput('Location', 'Add location of No-parking')} */}
                 <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 mx-48 text-xl sm:text-2xl lg:text-3xl">Location</div>
<div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 sm:mx-36 text-lg sm:text-lg lg:text-lg">Add location of No-parking</div>

               {/* <div className="border-0 px-3 py-1 rounded  w-full mx-36 text-2xl">Location</div>
               
                <div className="border-0 px-3 py-1 rounded  w-full mx-20 text-xl">Add location of No-parking</div> */}
                
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder='Address' />
                </div>
                <div className="border-0 mt-4 px-3 py-3 rounded text-sm shadow w-full
              bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
                {/* <div className="border-0 px-3 py-1 rounded  w-full mx-36 text-2xl">Photos</div> */}
                {/* <div className="border-0 px-5 py-1 rounded  w-full mx-1 text-xl">Add Clear images with Vehicle Number for quick action</div> */}
                <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 mx-48 text-xl sm:text-2xl lg:text-3xl">Photos</div>
<div className="border-0 sm:px-1 py-1 rounded w-full sm:w-full lg:w-5/6 sm:mx-24 text-lg sm:text-lg lg:text-lg">Add Clear images with Vehicle Number</div>

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
                <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 mx-44 text-xl sm:text-2xl lg:text-3xl">Description</div>
<div className="border-0 sm:px-5 py-1 rounded w-full sm:w-full lg:w-5/6 sm:mx-40 text-lg sm:text-lg lg:text-lg">Describe the severity</div>
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
                    {/* <button className="text-black" type="submit">Confirm Report</button> */}
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