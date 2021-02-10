import { useEffect, useState } from "react";
import Display from './RestaurantDisplay'



const Restaurants = (props) => {
    const lat = props.latitude;
    const lon = props.longitude;
    const url = `https://developers.zomato.com/api/v2.1/search?count=10&geocode?lat=${lat}&lon=${lon}count=10`;
    
    const [restaurant, setRestaurant] = useState();
    console.log(restaurant);
    console.log(lat, lon);
    const fetchData = async () => {
        const res = await fetch(url, {
            headers: {
                Accept: "application/json",
                "User-Key": "9f0d999052ebe553fbe584eda5b8aaf6"
            }
        })
        const data = await res.json()
        setRestaurant(data.restaurants)
      
    }
    useEffect(() => {
        fetchData()
    },[props.lat, props.lon])
    
            return (
                <div>
                    <h1>Restaurants Nearby</h1>
                    {restaurant?.map(rest => <Display
                    name={rest.restaurant.name}
                    id={rest.restaurant.id}
                    />)
                        
                    } 
                </div>
                        
           
          );
        }
    
      
  export default Restaurants;
