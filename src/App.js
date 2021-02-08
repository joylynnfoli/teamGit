import React, { useState, useEffect} from 'react';
// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename

// A component import
import Navbar from './components/Navbar'
import Location from './components/Location'
import Restaurants from './components/Restaurants'
import Satellite from './components/Satellite'
import Weather from './components/Weather'
import Footer from './components/Footer'



// Defining our <App /> component the function name matches the file name
function App() {
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      //   console.log("Latitude is :", position.coords.latitude);
      //   console.log("Longitude is :", position.coords.longitude);
    })
  },[])

  // All functional components need to return jsx with one parent element
  return (
    <div className="App"> {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      <Navbar />
      <Location />
      <Restaurants />
      <Satellite lon={longitude} lat={latitude} />
      <Weather />
      <Footer />
    </div>
  );
}

// Makes our Component available for import
export default App;