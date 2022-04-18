import "./App.css";
import React from "react";
import {useState} from "react"
import Nav from "./Components/Nav";
import HomeRegister from "./screens/Register";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import EveryCity from "./screens/EveryCity"
import { Routes, Route } from "react-router-dom";
import { getUserCity, getUserName, getUserPassword, getUserID } from "./services/cities";
import { useNavigate } from 'react-router';


function App() {
  const [userCity, setUserCity] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userid, setUserId] = useState("");
  const [holdname, setHoldName] = useState("");

  let navigate = useNavigate()

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
    // console.log(uId, userid)
    // console.log(uCity)
    // console.log(uPass)
    // console.log(uUser)
    // console.log(username)
    }
    fetchUserCities()  
    setHoldName(username)
}

  
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
            />} />
        </Routes>
        </div>
  </div>
    </div>
  );
}

export default App;