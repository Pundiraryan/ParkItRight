import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import AccountNav from './AccountNav'
import Perks from './Perks'
import PhotoUploaderd from './PhotoUploaderd'

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
            <>
           
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      html, body {\n      min-height: 100%;\n      }\n      body, div, form, input, select, textarea, label { \n      padding: 0;\n      margin: 0;\n      outline: none;\n      font-family: Roboto, Arial, sans-serif;\n      font-size: 14px;\n      color: #666;\n      line-height: 22px;\n      }\n      h1 {\n      position: absolute;\n      margin:0;\n      font-size: 60px;\n      color: #fff;\n      z-index: 2;\n      line-height: 83px;\n      top:30px;\n      }\n      legend {\n      padding: 10px;      \n      font-family: Roboto, Arial, sans-serif;\n      font-size: 18px;\n      color: #fff;\n      background-color: #1c87c9;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .testbox {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: inherit;\n      padding: 20px;\n      }\n      form {\n      width: 100%;\n      padding: 20px;\n      border-radius: 6px;\n      background: #fff;\n      box-shadow: 0 0 8px #006622; \n      }\n      .banner {\n      position: relative;\n      height: 250px;\n      background-image: url("/uploads/media/default/0001/02/cc6bc584f236c7234947015b89151ab6d04c4cbf.jpeg");  \n      background-size: cover;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      }\n      .banner::after {\n      content: "";\n      background-color: rgba(0, 0, 0, 0.4); \n      position: absolute;\n      width: 100%;\n      height: 100%;\n      }\n      input, select, textarea {\n      margin-bottom: 10px;\n      border: 1px solid #ccc;\n      border-radius: 3px;\n      }\n      input {\n      width: calc(100% - 10px);\n      padding: 5px;\n      }\n      input[type="date"] {\n      padding: 4px 5px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {\n      color:  #006622;\n      }\n      .checkbox input[type=checkbox] {\n      display:inline-block;\n      height:15px;\n      width:15px;\n      margin-right:5px;\n      vertical-align:text-top;\n      }\n      .item input:hover, .item select:hover, .item textarea:hover {\n      border: 1px solid transparent;\n      box-shadow: 0 0 3px 0  #006622;\n      color: #006622;\n      }\n      .item {\n      position: relative;\n      margin: 10px 0;\n      }\n      .item span {\n      color: red;\n      }\n      .week {\n      display:flex;\n      justfiy-content:space-between;\n      }\n      .colums {\n      display:flex;\n      justify-content:space-between;\n      flex-direction:row;\n      flex-wrap:wrap;\n      }\n      .colums div {\n      width:48%;\n      }\n      input[type=radio], input[type=checkbox]  {\n      display: none;\n      }\n      label.radio {\n      position: relative;\n      display: inline-block;\n      margin: 5px 20px 15px 0;\n      cursor: pointer;\n      }\n      .question span {\n      margin-left: 30px;\n      }\n      .question-answer label {\n      display: block;\n      }\n      label.radio:before {\n      content: "";\n      position: absolute;\n      left: 0;\n      width: 17px;\n      height: 17px;\n      border-radius: 50%;\n      border: 2px solid #ccc;\n      }\n      input[type=radio]:checked + label:before, label.radio:hover:before {\n      border: 2px solid  #006622;\n      }\n      label.radio:after {\n      content: "";\n      position: absolute;\n      top: 6px;\n      left: 5px;\n      width: 8px;\n      height: 4px;\n      border: 3px solid  #006622;\n      border-top: none;\n      border-right: none;\n      transform: rotate(-45deg);\n      opacity: 0;\n      }\n      input[type=radio]:checked + label:after {\n      opacity: 1;\n      }\n      .flax {\n      display:flex;\n      justify-content:space-around;\n      }\n      .btn-block {\n      margin-top: 10px;\n      text-align: center;\n      }\n      button {\n      width: 150px;\n      padding: 10px;\n      border: none;\n      border-radius: 5px; \n      background:  #1c87c9;\n      font-size: 16px;\n      color: #fff;\n      cursor: pointer;\n      }\n      button:hover {\n      background:  #0692e8;\n      }\n      @media (min-width: 568px) {\n      .name-item, .city-item {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      }\n      .name-item input, .name-item div {\n      width: calc(50% - 20px);\n      }\n      .name-item div input {\n      width:97%;}\n      .name-item div label {\n      display:block;\n      padding-bottom:5px;\n      }\n      }\n    '
    }}
  />
  
  <div className="testbox shadow-sm">
  
    <form>
        <div className='mt-20'><AccountNav /></div>
        <div className="colums">
          <div className="item">
            <label htmlFor="fname">
            Name of place<span>*</span>
            </label>
            <input id="fname" type="text" name="fname" />
          </div>
          <div className="item">
            <label htmlFor="lname">
              {" "}
              Address of your parking spot<span>*</span>
            </label>
            <input id="lname" type="text" name="lname" />
          </div>
          <div className="item grid">
            <label htmlFor="address">
            Attract towards your spot with pictures<span>*</span>
            <PhotoUploaderd addedPhotos={addedPhotos} onChange={setAddedPhotos} />
            </label>
          </div>
          <div className="item">
            <label htmlFor="description">Describe your place to attract people</label>
            <input id="description" type="text" name="description" />
          </div>
          {/* <div className="item">
            <label htmlFor="saddress">Select perks</label>
            <Perks selected={perks} onChange={setPerks} />
          </div> */}
          <div className="item">
            <label htmlFor="city">Extra Information</label>
            <textarea value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />
          </div>
          <div >
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
            </div>
        </div>     
      <div >
                    <button className='primary my-4'>Save</button>
                </div>
    </form>
  </div>
</>

           
            <form onSubmit={savePlace}>
                {preInput('Title', 'Name of place')}
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
                {preInput('Address', 'Address of your parking spot')}
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder='Address' />
                
                {/* //photo for front// */}
                {preInput('Photos', 'Attract towards your spot')}
                <PhotoUploaderd addedPhotos={addedPhotos} onChange={setAddedPhotos} />


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
