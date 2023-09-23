import React from 'react'


export const PlaceCard = ({place,index}) => {
    
    // const [factors, setFactors] = useState({
    //   factor1: 0,
    //   factor2: 0,
    //   factor3: 0,
    //   factor4: 0,
    // });

   

    const [price, setPrice] = useState(0);
    const [city, setCity] = useState('');
  
    const calculatePrice = () => {
      // Create a JSON object with "price" and "city" variables
      const dataToSend = {
        price: place.price,
        city: place.title,
      };
  
      // Make a POST request to the backend API
      axios.post('http://127.0.0.1:8080/api/prd', dataToSend)
        .then((response) => {
          // Handle the response from the backend if needed
          setResult(response.data.price);
        })
        .catch((error) => {
          // Handle any errors if the request fails
          console.error('Error:', error);
        });
    };
  
    const [result, setResult] = useState(0);
  
    // const calculatePrice = () => {
    //   // Send a POST request to your Flask API
    //   axios.post('/calculate-price', factors)
    //     .then((response) => {
    //       setResult(response.data.price); // Assuming the API returns a "price" field in the response
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // };
  return (
    <>
    <button onClick={calculatePrice}>Calculate Price</button>
    <Link to={"/places/" + place._id} key={index}>
        <div className='bg-gray-200 mb-4 rounded-2xl flex '>
          {place.photos?.[0] && (
            <img className="rounded-2xl object-cover aspect-square" src={place.photos[0]} alt="" />
          )}
        </div>
        <h2 className="font-bold">{place.address}</h2>
        <h3 className='text-sm truncate text-gray-500'>{place.title}</h3>
        <div className='mt-1'>
          <span className='font-bold'>₹${result}</span> per day
        </div>

    </Link></>
  )
}
