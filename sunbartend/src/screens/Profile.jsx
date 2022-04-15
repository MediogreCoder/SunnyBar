import React from "react";
import { useState, useEffect} from "react";
import { getProfileCity, getProfileSunlight } from "../services/cities";



export default function LandingPage(props) {
  const [cities, setCities] = useState([]);
  const [sunlight, setSunlight] = useState([]);


  useEffect(() => {
      const fetchCities = async () => {
        const uCity = await getProfileCity("Kabul")
        const sunCity = await getProfileSunlight("Kabul")
        setCities(uCity)
        setSunlight(sunCity)
      }
    
      fetchCities()
  }, [])
   
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
    </div>

  )
}