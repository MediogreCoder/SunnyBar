import React from "react";
import { useState, useEffect} from "react";
import { getProfileCity, getProfileSunlight } from "../services/cities";
import { Link } from 'react-router-dom';



export default function LandingPage(props) {
  const [cities, setCities] = useState([]);
  const [sunlight, setSunlight] = useState("");
  const profileCity = props.userCity
  


  useEffect(() => {
    const fetchCities = async () => {
      console.log( profileCity, sunlight )
      const uCity = await getProfileCity( profileCity )
      const sunCity = await getProfileSunlight( profileCity )
      setCities(uCity)
      setSunlight(sunCity)
  
      }
      fetchCities()
  }, [profileCity])
   
  return (
    <div>
    <div>
     <h1>Cities</h1> 
      {cities}
      </div>
      <div>
     <h1>Sunlight</h1> 
      {sunlight}
      </div>
      <Link to="/All">
      <button>
See how your city compares!
        </button>
        </Link>
    </div>

  )
}