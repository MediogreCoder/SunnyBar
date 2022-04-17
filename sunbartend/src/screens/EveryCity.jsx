import React from "react";
import { useState, useEffect} from "react";
import { getAll } from "../services/cities";
import Cities from "../Components/Cities";
import { Link } from "react-router-dom";


export default function EveryCity() {
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
      const fetchCities = async () => {
        const AllCities = await getAll()
        console.log(AllCities)
        setCities(AllCities)
        
      }
    
      fetchCities()
  }, [])

  

  let capFirstLetter = (string) => {
    let q = string.charAt(0).toUpperCase() + string.slice(1);
    setQuery(q);
  };
   
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => capFirstLetter(e.target.value)} />
        <Link to="/profile">
        <button type="submit">Back to Profile</button>
        </Link>

      </div>
      {cities.map((cityData) => 
        cityData.City.includes(query) &&
        <Cities key={cityData._id} city={cityData}/>
      )}
     
    </div>
  )
}