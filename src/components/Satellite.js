
import { useEffect, useState } from "react"

const Satellite = (props) => {
    // return must have one parent element
    const [locimage, setLocImage] = useState({});
    const lat=props.lat;
    const lon=props.lon;
    const key="LmTMbJEt8zJQOqAl6HD4NWdLBQ9mIOWvHc44GtLN"
    const BaseUrl = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2018-01-01&&dim=0.15&api_key=${key}`;

   useEffect(() => {

       fetch(BaseUrl)
           .then(res => res.json())
           .then(res => {console.log(res.url); setLocImage(res)})
           .catch(err => console.log(err))
   }, [lat, lon])

    
    return (
        <div className="card">
            Satellite Image
        <p>locimage.url:<br />{locimage.url}</p>
        <img className="locationImage"
            src={locimage?.url} 
            alt="img"/>
        </div>
    )
}

// Makes it available for import
export default Satellite;