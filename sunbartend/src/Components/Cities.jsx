
import React from "react"

export default function Cities({ city }) {
  return (
    <div>
      <h2>{city.City}</h2>
      <h2>{city.Year}</h2>
    </div>
  )
}