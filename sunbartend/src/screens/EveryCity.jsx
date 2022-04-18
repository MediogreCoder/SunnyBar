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
      <input type="text" placeholder="Search for your City!" onChange={(e) => capFirstLetter(e.target.value)} />
      <Link to="/profile">
      </Link>

    </div>
    <div>
      <h1>
        Major Cities' Annual Sun Exposure
      </h1>
    </div>
    <div class="citiesContainer">
      {cities.map((cityData) =>
        cityData.City.includes(query) &&
        <Cities key={cityData._id} city={cityData} />
      )}
    </div>
   
    



    <div class='rightbox'>
      <div class='rightwave -one'></div>
      <div class='rightwave -two'></div>
      <div class='rightwave -three'></div>
      <div class='leftwave -one'></div>
      <div class='leftwave -two'></div>
      <div class='leftwave -three'></div>
      <div class='centerRightwave -one'></div>
      <div class='centerRightwave -two'></div>
      <div class='centerRightwave -three'></div>
      <div class='centerLeftwave -one'></div>
      <div class='centerLeftwave -two'></div>
      <div class='centerLeftwave -three'></div>
      <div class='centerwave -one'></div>
      <div class='centerwave -two'></div>
      <div class='centerwave -three'></div>
    </div>
    
  </div>
)
}