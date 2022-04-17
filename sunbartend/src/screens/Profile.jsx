import React from "react";
import { useState, useEffect} from "react";
import { getProfileCity, getProfileSunlight, deleteUser } from "../services/cities";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';




export default function LandingPage(props) {
  const [cities, setCities] = useState([]);
  const [sunlight, setSunlight] = useState("");
  const profileCity = props.userCity
  const UserUniqueId = props.userid
  


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
        <button onClick={logOut}>
          Logout
        </button>
      </div>
      <div>
        <button onClick={deleteAccount}>
          Delete Account
        </button>
      </div>
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