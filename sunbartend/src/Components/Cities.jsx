
import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import SingleCity from "../screens/Single"
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Cities(props) {
  let cities = props.city
  let OneCity = props.OneCity
  let SetSingleCity = props.SetSingleCity

  // let navigate = useNavigate()

  const bringUpSingle = async () => {
    console.log(cities.City)
    SetSingleCity(cities.City)
    console.log(OneCity)
  }

  return (
    <div class="cityInfoDiv">
      <div class="cityName">
        <Link to="/Single" style={{ textDecoration: 'none'}} >
        <h2 class="allCityName" onClick={bringUpSingle} >{cities.City}</h2>
        </Link>
      </div>
      <p> ~☀️~ </p>
      <div class="cityYear">
        <h2>{cities.Year}</h2>
        </div>
    </div>
  )
}