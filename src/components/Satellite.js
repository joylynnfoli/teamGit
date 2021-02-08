
import { useCallback, useEffect, useState } from "react"

const Satellite = (props) => {
    // return must have one parent element
    const [locimage, setLocImage] = useState();

    const initData = useCallback(() => {
        const latInt = Math.trunc(props.lat);
        const lonInt = Math.trunc(props.lon);
       
        const key="LmTMbJEt8zJQOqAl6HD4NWdLBQ9mIOWvHc44GtLN"
        const builtUrl = `https://api.nasa.gov/planetary/earth/assets?lon=${lonInt}&lat=${latInt}&date=2018-01-01&&dim=0.15&api_key=${key}`;
        fetch(builtUrl)
           .then(res => res.json())
           .then(res => {
               console.log(res.url);
               setLocImage(res.url);
            })
           .catch(err => console.log(err))
    }, [props.lon, props.lat])
   

   useEffect(() => {
        if (props.lat && props.lon){
            initData()
        }
   },[props.lat, props.lon, initData])

    
    return (
        <div className="card">
            Satellite Image
            <div>
            {
                locimage && <img className="locationImage"
                src={locimage} 
                alt="img"/>
            }
            </div>
        </div>
    )
}

// Makes it available for import
export default Satellite;