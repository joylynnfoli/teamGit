import { useEffect, useState } from 'react';


const Location = () => {
  const [location, setLocation] = useState()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position)
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    })
  }, [])

  return (

      <div>
        <h4>Using geolocation JavaScript API in React</h4>
        {/* <Zomato loc={location>}/> */}
        {location?.coords.latitude}
        {location?.coords.longitude} 
      </div>

    <div>
      <h4>Using geolocation JavaScript API in React</h4>
      {location?.coords.latitude}
      {location?.coords.longitude}
    </div>
  )
}

export default Location;