import "./App.css";
import React from "react";
import {useState} from "react"
import Nav from "./Components/Nav";
import HomeRegister from "./screens/Register";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import { Routes, Route } from "react-router-dom";


function App() {
  const [userCity, setUserCity] = useState("")
  const logUserCity = (e) => {
    console.log("clicked")
    console.log(userCity)
    setUserCity(e)
 }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomeRegister />} />
        <Route path="/login" element={<Login logUserCity={logUserCity} />} />
        <Route path="/Profile" element={<Profile userCity={userCity} />} />
      </Routes>
    </div>
  );
}

export default App;
