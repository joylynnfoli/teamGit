import { useEffect, useState } from "react";


const Restaurants = () => {
    const url = `https://developers.zomato.com/api/v2.1/locations?query=indianapolis&count=10`;
    
    const [restaurant, setRestaurant] = useState();
 
    const fetchData = async () => {
        const res = await fetch(url, {
            headers: {
                Accept: "application/json",
                "User-Key": "9f0d999052ebe553fbe584eda5b8aaf6"
            }
        })
        const data = await res.json()
        console.log(data)
        setRestaurant(data.location_suggestions)
      
    }
    useEffect(() => {
        fetchData()
    },[])
    
            return (
                <div>
                    <h1>Restaurant</h1>
                    {restaurant.map(entry => {
                        return (
                            <div>
                                {entry.title}
                            </div>
                        )
                    } )}
                </div>
                        
           
          );
        }
    
      
  export default Restaurants
