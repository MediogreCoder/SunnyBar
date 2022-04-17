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
}

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
    setUsername("")
    setPassword("")
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
          userid={userid}
          username={username}
          password={password}
          userCity={userCity}
        />} />
        <Route path="/Profile" element={<Profile
          userCity={userCity}
          userid={userid}/>}
        />
        <Route path="/All" element={<EveryCity />} />
      </Routes>
    </div>
  );
}

export default App;
