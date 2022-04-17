import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { registerUser } from '../services/cities'

export default function HomeRegister() {
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

  //   return (
  //     <div>
  //       <h1>Sign up Now!</h1>
  //       <form onSubmit={handleSubmit}>
  //         <input  placeholder='Name' value={account.name} name="username" onChange={handleChange} />
  //         <input  placeholder='Password'name="pw" value={account.password}  onChange={handleChange}  />
  //         <input placeholder='City' name="City" value={account.city} onChange={handleChange} />
     
  //           <button type="submit">Register</button>
  //         </form>
      
  //     </div>
  //   )
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        name="name"
        value={account.name}
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        name="password"
        value={account.password}
        onChange={handleChange}
      />
      <input
        placeholder="city"
        name="city"
        value={account.city}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}