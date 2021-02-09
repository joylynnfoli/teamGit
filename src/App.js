import React, { useState, useEffect} from 'react';
import './App.css'; 

import Navbar from './components/Navbar'
import Location from './components/Location'
import Restaurants from './components/Restaurants'
import Satellite from './components/Satellite'
import Weather from './components/Weather'
import Footer from './components/Footer'


function App() {
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  },[])

  return (
    <div className="App"> 
      <Navbar />
      <Location />
      <Restaurants lon={longitude} lat={latitude} />
      <Satellite lon={longitude} lat={latitude} />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;