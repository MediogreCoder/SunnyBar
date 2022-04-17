import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { registerUser } from '../services/cities'
import { getAll } from '../services/cities'

export default function HomeRegister() {
  const [account, setAccount] = useState({
    name: "",
    password: "",
    city: "",
  })

  const [allCity, setAllCity] = useState([])

  useEffect(() => {
    const fetchCities = async () => {
      const AllCities = await getAll()
      console.log(AllCities)
      setAllCity(AllCities)
    }
  
    fetchCities()
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
    await registerUser(account)
    navigate("/login", { replace: true })
    console.log("registered")
  }

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