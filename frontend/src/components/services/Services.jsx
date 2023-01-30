import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
        </div>
      </section>
    </>
  )
}

export default Services
