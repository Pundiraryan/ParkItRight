import React from 'react'


export const PlaceCard = ({place,index}) => {
    
    // const [factors, setFactors] = useState({
    //   factor1: 0,
    //   factor2: 0,
    //   factor3: 0,
    //   factor4: 0,
    // });

   

    factors=[2,3,4,5]
  
    const [result, setResult] = useState(0);
  
    const calculatePrice = () => {
      // Send a POST request to your Flask API
      axios.post('/calculate-price', factors)
        .then((response) => {
          setResult(response.data.price); // Assuming the API returns a "price" field in the response
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
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
