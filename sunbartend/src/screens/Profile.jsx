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
      
      <div>
          <LoggedUser user={user} />
        </div>

    <div>
     <h1>City</h1> 
     <div className="info">{cities}</div> 
      </div>
      <div>
        <h1>Sunlight</h1> 
        <div className="info">{sunlight}</div> 
      </div>

      <div>

        <p class="text">Your Sunnyscore is: <span class="scoreDisplay">{sunlight}</span></p>
  
    <div class="slidercontainer">
      <input type="range" min="300" max="5000" value={sunlight} id="slider"></input>
    </div>
  </div>
  

      <Link to="/All">
      <button>
See how your city compares!
        </button>
      </Link>
      <div>

        <button onClick={logOut}>
          Logout
        </button>
      </div>
      <div>
        <button onClick={deleteAccount}>
          Delete Account
        </button>
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