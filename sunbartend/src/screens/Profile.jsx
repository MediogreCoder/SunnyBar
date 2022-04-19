import React from "react";
import { useState, useEffect} from "react";
import { getProfileCity, getProfileSunlight, deleteUser } from "../services/cities";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import LoggedUser from "./loggedUsers";



export default function LandingPage(props) { 
  const [cities, setCities] = useState([]);
  const [sunlight, setSunlight] = useState("");
  const profileCity = props.userCity
  const UserUniqueId = props.userid
  const user = props.holdname


  useEffect(() => {
    const fetchCities = async () => {
      console.log( profileCity, sunlight, UserUniqueId )
      const uCity = await getProfileCity( profileCity )
      const sunCity = await getProfileSunlight(profileCity)
      setCities(uCity)
      setSunlight(sunCity)
  
      }
      fetchCities()
  }, [profileCity])
  
  let navigate = useNavigate()

  function deleteAccount() {
    deleteUser(UserUniqueId)
    navigate("/", { replace: true })
  }

  function logOut() {
    setCities("")
    setSunlight("")
    navigate("/login", { replace: true })
}
   
  return (
  <div>
      
      <div class="loggedUser">
      <button onClick={deleteAccount} >Delete Account</button>
        <button onClick={logOut} >Logout</button>
        <LoggedUser user={user} />

        </div>

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