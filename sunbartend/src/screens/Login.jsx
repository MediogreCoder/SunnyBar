import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Login(props) {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  let currentCity = ""

  let takeName = (string) => {
    let q = string.charAt(0).toUpperCase() + string.slice(1);
    setUsername(q);
    currentCity = q;
    console.log(currentCity)
    
  };

  let takePassword = (string) => {
    let q = string.charAt(0).toUpperCase() + string.slice(1);
    setPassword(q);
    
  };

  

  return (
    <div>
      <h1>Login</h1>
      <p>Name</p><input type="text" value={username} onChange={(e) => takeName(e.target.value)} />
      <p>Password</p><input type="text" value={password} onChange={(e) => takePassword(e.target.value)} />
      
      <Link to="/profile">
        <button type="button" onClick={() =>
        {
          props.logUserCity(currentCity)
          console.log(currentCity)
    }}>
          Login
     </button>
 </Link>
     
    </div>
  )
}