import React from "react";
import { useState, useEffect} from "react";
import { getAll } from "../services/cities";
import Cities from "../Components/Cities";
import { Link } from "react-router-dom";
import LoggedUser from "./loggedUsers";


export default function EveryCity(props) {
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState("");
  const user = props.holdname

  useEffect(() => {
      const fetchCities = async () => {
        const AllCities = await getAll()
        console.log(AllCities)
        setCities(AllCities)
        console.log(user)
        
      }
    
      fetchCities()
  }, [])

  

  let capFirstLetter = (string) => {
    let q = string.charAt(0).toUpperCase() + string.slice(1);
    setQuery(q);
  };
   
  return (
    <div class="allCityContainer">
      <div>
        <input type="text" onChange={(e) => capFirstLetter(e.target.value)} />
        <Link to="/profile">
        <button type="submit">Back to Profile</button>
        </Link>

      </div>
      <div>
      <h2>Logge in as: </h2>
       <LoggedUser user={user}  />
      </div>
     
      <div>
        <h1>
          All Major Cities
        </h1>
      </div>
      <div>
      {cities.map((cityData) => 
        cityData.City.includes(query) &&
        <Cities key={cityData._id} city={cityData}/>
        )}
        </div>
    </div>
  )
}