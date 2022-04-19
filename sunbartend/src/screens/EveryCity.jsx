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
  const AllCities = props.allCity
  const OneCity = props.onecity
  const SetSingleCity = props.setOneCity

  useEffect(() => {
      const fetchCities = async () => {
        setCities(AllCities)
        // console.log(AllCities)
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
      <div class="citiesContainerContainer">
    <div class="citiesContainer">
      {cities.map((cityData) =>
        ((cityData.City.includes(query)) || (cityData.Year.toString().includes(query))) &&
        <Cities key={cityData._id} city={cityData} OneCity={OneCity} SetSingleCity={SetSingleCity} />
      )}
    </div>
    </div>
    

    <div class='rightbox' style={{ position: 'static'}}>
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