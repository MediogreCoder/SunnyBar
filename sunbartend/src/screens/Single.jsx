import React from "react";
import { useState, useEffect} from "react";
import { getProfileCity, getProfileSunlight } from "../services/cities";




export default function LandingPage(props) { 
  const [cities, setCities] = useState([]);
  const [sunlight, setSunlight] = useState("");
  const One = props.onecity

  useEffect(() => {
    const fetchCities = async () => {
      const uCity = await getProfileCity(One)
      const sunCity = await getProfileSunlight(One)
      console.log(One)
      setCities(uCity)
      setSunlight(sunCity)
      }
      fetchCities()
  }, [])
  return (
  <div>
      

     <h1 className="cityTitle">{cities}</h1> 

      <div>

        <p class="text">Your Sunnyscore is: <span class="scoreDisplay">{sunlight}</span></p>
  
    <div class="slidercontainer">
      <input type="range" min="300" max="5000" value={sunlight} id="slider"></input>
    </div>
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
        <div class="sun">
  <div class="rays">
    <div class="ray1"></div>
    <riv class="ray2"></riv>
    <div class="ray3"></div>
    <div class="ray4"></div>
  </div>
<div class="head">
  <div class="face face__happy" id="happy">
    <div class="eye-left"></div>
    <div class="blushRight"></div>
    <div class="eye-right"></div>
    <div class="blushLeft"></div>
    <div class="mouth"></div>
  </div>
        </div>
        </div>
   </div>
        
      </div>
    
    
  )
}