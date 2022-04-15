import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { registerUser } from '../services/cities'

export default function HomeRegister() {
  // const [username, setUsername] = useState(" ");
  // const [usercity, setUserCity] = useState(" ");
  // const [password, setPassword] = useState(" ");
  const [account, setAccount] = useState({
    name: "",
    password: "",
    city: "",
  })

  let navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setAccount({
      ...account,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await registerUser(account)
    navigate("/login", { replace: true })
    console.log("registered")
  }

  return (
    <div>
      <h1>Sign up Now!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name="username" onChange={handleChange} />
        <input type="text" placeholder='Password'name="pw"  onChange={handleChange}  />
        <input type="text" placeholder='City' name="City" onChange={handleChange} />
        <button type="submit">Register</button>
        </form>
      
    </div>
  )
}