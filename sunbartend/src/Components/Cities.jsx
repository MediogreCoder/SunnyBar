
import React from "react"

export default function Cities({ city }) {
  return (
    <div class="cityInfoDiv">
      <div class="cityName">
        <h2>{city.City}</h2>
      </div>
      <div class="cityYear">
        <h2>{city.Year}</h2>
        </div>
    </div>
  )
}