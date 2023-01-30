import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import PropertySingle from "../PropertySingle"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <PropertySingle/>
      </section>
    </>
  )
}

export default Services
