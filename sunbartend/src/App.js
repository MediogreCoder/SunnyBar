import "./App.css";
import React from "react";
import {useState} from "react"
import Nav from "./Components/Nav";
import HomeRegister from "./screens/Register";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import EveryCity from "./screens/EveryCity"
import { Routes, Route } from "react-router-dom";
import { getUserCity } from "./services/cities";


function App() {
  const [userCity, setUserCity] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logUserCity = () => {
    console.log("clicked")

    const fetchUserCities = async () => {
      const uCity = await getUserCity(username) 
      setUserCity(uCity)
      console.log(uCity)
      console.log(username)
    }
    fetchUserCities();
   
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
    // setUsername(username);
    // setUsername('');
    // setPassword('');
  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomeRegister />} />
        <Route path="/login" element={<Login
          setUsername={setUsername}
          setPassword={setPassword}
          setUserCity={setUserCity}
          logUserCity={logUserCity}
          handleSubmit={handleSubmit}
          
          username={username}
          password={password}
          userCity={userCity}
        />} />
        <Route path="/Profile" element={<Profile
          userCity={userCity}
          logUserCity={logUserCity} />}
        />
        <Route path="/All" element={<EveryCity />} />
      </Routes>
    </div>
  );
}

export default App;
