import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import AccountNav from './AccountNav'
import Perks from './Perks'
import PhotoUploader from './PhotoUploader'

const PlacesForm = () => {
    const { id } = useParams()
    const [price , setPrice] = useState(100)
    const [title, setTitle] = useState("")
    const [address, setAddress] = useState("")
    const [addedPhotos, setAddedPhotos] = useState([])
    const [description, setDescription] = useState("")
    const [perks, setPerks] = useState([])
    const [extraInfo, setExtraInfo] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [maxGuests, setMaxGuests] = useState(1)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        if (!id) {
            return;
        }

        axios.get('/places/' + id)
        .then(response => {
            const { data } = response
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos)
            setDescription(data.description)
            setExtraInfo(data.extraInfo)
            setCheckIn(data.checkIn)
            setCheckOut(data.checkOut)
            setPerks(data.perks)
            setMaxGuests(data.maxGuests)
            setPrice(data.price)
        })

    }, [id])

    function preInput(header, description) {
        return (
            <div>
                <h2 className='text-2xl mt-4'>{header}</h2>
                <p className='text-sm text-gray-500'>{description}</p>
            </div>

        )
    }

    async function screen(e){

        const dataToSend = {
            cost: price,
            cctv: 0,
            security: 1,
            carwash: 0,
            area: 2

          };
      
          // Make a POST request to the backend API
          axios.post('http://127.0.0.1:8080/api/process-request', dataToSend)
            .then((response) => {
              // Handle the response from the backend if needed
              if(response.data.message==="Accepted"){
                savePlace()
              }
              else{
                console.log("rejected")
              }
            })
            .catch((error) => {
              // Handle any errors if the request fails
              console.error('Error:', error);
            });


    }
    async function savePlace(e) {
        e.preventDefault();
        const placeData = {id, title, address, description, perks, addedPhotos, extraInfo, checkIn, checkOut, maxGuests ,price}
        if(id){
            //AddPlace
            await axios.put("/places",{ id , ...placeData})
            setRedirect(true)


        }else{
            //newPlace
            await axios.post("/places", placeData)
            setRedirect(true)

        }

    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }
    return (
        <div>
            <AccountNav />
            <form onSubmit={screen}>
                {preInput('Title', 'Name of place')}
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
                {preInput('Address', 'Address of your parking spot')}
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder='Address' />
                
                {/* //photo for front// */}
                {preInput('Photos', 'Attract towards your spot')}
                <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />


                {preInput('Description', 'Describe your place to attract people')}
                <textarea className='' value={description} onChange={e => setDescription(e.target.value)} />
                {preInput('Perks', 'Select perks')}

                <Perks selected={perks} onChange={setPerks} />
                {preInput('Extra Info', 'House rules and more')}
                <textarea value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />
                {preInput('Check in , Check out times and max guests', 'Add check-in and check-out times (24-Hour Format)')}

                <div className='grid grid-cols-2 md:grid-cols-4 mt-4 gap-2'>
                    <div>
                        <h3 className='mt-2 -mb-1 '>Slot Open</h3>
                        <input type="number" placeholder='10:10' value={checkIn}
                            onChange={e => setCheckIn(e.target.value)} />
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1 '>Slot closed</h3>
                        <input type="number" placeholder='20:20' value={checkOut}
                            onChange={e => setCheckOut(e.target.value)} />
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1 '>Max Vehicles</h3>
                        <input type="number" placeholder='Guests' value={maxGuests}
                            onChange={e => setMaxGuests(e.target.value)} />
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1 '>Price Per Day</h3>
                        <input type="number" placeholder='Guests' value={price}
                            onChange={e => setPrice(e.target.value)} />
                    </div>
                </div>
                <div >
                    <button className='primary my-4'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default PlacesForm
