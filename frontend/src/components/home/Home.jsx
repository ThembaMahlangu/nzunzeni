import React from "react"
import Awards from "./awards/Awards"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"

const Home = () => {
  return (
    <>
      <Hero />
      <Awards />
      <Location />
      <Price />
    </>
  )
}

export default Home
