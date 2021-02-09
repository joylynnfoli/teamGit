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
      <p>Latitude: {location?.coords.latitude} - 
      Longitude: {location?.coords.longitude}</p>
    </div>
  )
}

export default Location;