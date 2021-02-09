import { useEffect, useState } from "react";


const Restaurants = () => {
    const url = `https://developers.zomato.com/api/v2.1/search?count=10&lat=41.0748313&lon=-85.3032709&radius=1000`;
    
    const [restaurant, setRestaurant] = useState();
    console.log(restaurant);
    const fetchData = async () => {
        const res = await fetch(url, {
            headers: {
                Accept: "application/json",
                "User-Key": "9f0d999052ebe553fbe584eda5b8aaf6"
            }
        })
        const data = await res.json()
        console.log(data)
        setRestaurant(data.restaurants)
      
    }
    useEffect(() => {
        fetchData()
    }, [])
    
            return (
                <div className="restaurants">
                    <h1>Restaurants Nearby</h1>
                    {restaurant?.map(entry => {
                        return (
                            <div >
                                <p>{entry.restaurant.name}</p>
                            </div>
                        )
                    } )}
                </div>
                        
           
          );
        }
    
      
  export default Restaurants;
