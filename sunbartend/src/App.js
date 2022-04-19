import "./App.css";
import React, { useEffect } from "react";
import {useState} from "react"
import Nav from "./Components/Nav";
import HomeRegister from "./screens/Register";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import EveryCity from "./screens/EveryCity"
import SingleCity from "./screens/Single"
import { Routes, Route } from "react-router-dom";
import { getUserCity, getUserName, getUserPassword, getUserID, getAll } from "./services/cities";
import { useNavigate } from 'react-router';


function App() {
//Global States-----------------------------------
//user Information 
  const [userCity, setUserCity] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userid, setUserId] = useState("");
  const [holdname, setHoldName] = useState("");
//holds city info 
  const [allCity, setAllCity] = useState([]);
  const [onecity, setOneCity] = useState('');

//fetch all cities
  

useEffect(() => {
  const fetchAll = async () => {
    const AllCities = await getAll()
    console.log(AllCities)
    setAllCity(AllCities)
  }

  fetchAll()
}, [])
  

//-------------------------------------------------

//Navigation Variable  
let navigate = useNavigate()

//------------------------------------------------

//Called when logging in to pull users cities and set city information
const logUserCity = () => {
    console.log("clicked")

    const fetchUserCities = async () => {
      const uCity = await getUserCity(username);
      const uUser = await getUserName(username);
      const uId = await getUserID(username);
      const uPass = await getUserPassword(username)
      if ((uUser === username) && (uPass === password)) {
        setUserCity(uCity)
        setUserId(uId)
       
        navigate("/Profile", { replace: true })
      }
        else {
          alert("Incorrect Login")
        }
    }
    fetchUserCities()  
    setHoldName(username)
}

//Empties login form
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
    setUsername("")
    setPassword("")
  }


  return (
    <div className="App">
  <img src="Sunnyscore-logos_white.png" class="logo"/>
      <div class='box'>
      <div class="mainContent">
      <Nav />
      <Routes>
        <Route path="/" element={<HomeRegister
        holdname={holdname}     />} />
        <Route path="/login" element={<Login
          setUsername={setUsername}
          setPassword={setPassword}
          setUserCity={setUserCity}
          logUserCity={logUserCity}
          handleSubmit={handleSubmit}
          userid={userid}
          username={username}
          password={password}
              userCity={userCity}
              holdname={holdname} 
        />} />
        <Route path="/Profile" element={<Profile
              userCity={userCity}
              holdname={holdname} 
              userid={userid} />}
              
        />
            <Route path="/All" element={<EveryCity
              holdname={holdname} 
              setOneCity={setOneCity}
              allCity={allCity}
            />} />
              <Route path="/Single" element={<SingleCity
              onecity={onecity}
        />}   
          />
        </Routes>
        </div>
  </div>
    </div>
  );
}

export default App;