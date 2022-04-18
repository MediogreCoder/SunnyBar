import React, { useEffect } from "react";
import { useState } from "react";


export default function LoggedUser(props) {
  const luser = props.user
  const [currentuser, setCurrentUser] = useState("")

  useEffect(() => {
    const setUsername = async () => {
      console.log(luser)
      console.log(props.username)
      setCurrentUser(luser)
     
    }
  
    setUsername()
}, [])

  return (
    <div>
    <h1>Logged in as</h1>
      <h1>{currentuser}</h1>
      </div>
  )
}