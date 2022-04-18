import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { registerUser } from '../services/cities'
import { getAllUsers } from '../services/cities'

export default function HomeRegister() {
  const [account, setAccount] = useState({
    name: "",
    password: "",
    city: "",
  })

  const [allUser, setAllUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const AllUsers = await getAllUsers()
      console.log(AllUsers)
      setAllUsers(AllUsers)
    }
  
    fetchUsers()
}, [])

  

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
    const userMatch = allUser.find(user => {
      return user.name === account.name
    })
    if (!userMatch) {
      await registerUser(account)
      navigate("/login", { replace: true })
      console.log("registered")
    } else {
      alert("This user already exist")
    }
  }

  return (

    <div class="regContainer">
      <div>
        <h1>Sign up Now!</h1>
      </div>
      <div class="regForm">
        
        <form onSubmit={handleSubmit}>
        <div>
      <input
        placeholder="Username"
        name="name"
        value={account.name}
        onChange={handleChange}
            />
            </div>
      <input
        placeholder="Password"
        name="password"
        value={account.password}
        onChange={handleChange}
          />
          <div>
      <input
        placeholder="city"
        name="city"
        value={account.city}
        onChange={handleChange}
            />
        </div>
        <div>
            <button type="submit">Submit</button>
            </div>
      </form>
      </div>
      </div>
  )
}