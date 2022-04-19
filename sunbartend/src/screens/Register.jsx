import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { registerUser } from '../services/cities'
import { getAllUsers } from '../services/cities'
import LoggedUser from './loggedUsers';

export default function HomeRegister(props) {
  const user = props.holdname

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
      console.log(user.name)
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
        type="password"
        placeholder="Password"
        name="password"
        value={account.password}
        onChange={handleChange}
          />
          <div>
      <input
        placeholder="City"
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

  <div class='rightbox'>
    <div class='rightwave -one'></div>
    <div class='rightwave -two'></div>
    <div class='rightwave -three'></div>
    <div class='leftwave -one'></div>
    <div class='leftwave -two'></div>
    <div class='leftwave -three'></div>  
    <div class='centerRightwave -one'></div>
    <div class='centerRightwave -two'></div>
    <div class='centerRightwave -three'></div>
    <div class='centerLeftwave -one'></div>
    <div class='centerLeftwave -two'></div>
    <div class='centerLeftwave -three'></div>
    <div class='centerwave -one'></div>
    <div class='centerwave -two'></div>
    <div class='centerwave -three'></div>
      </div>
      {/* <div class="sun">
  <div class="rays">
    <div class="ray1"></div>
    <riv class="ray2"></riv>
    <div class="ray3"></div>
    <div class="ray4"></div>
  </div>
<div class="head">
  <div class="face face__happy" id="happy">
    <div class="eye-left"></div>
    <div class="blushRight"></div>
    <div class="eye-right"></div>
    <div class="blushLeft"></div>
    <div class="mouth"></div>
  </div>
        </div>
        </div> */}
      </div>
  )
}