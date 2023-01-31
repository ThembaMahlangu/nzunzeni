import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/civilworks.jpg"
import "./about.css";
import Service1 from "../images/civilworks.jpg";
import Service2 from "../images/electrician.jpg";
import Service3 from "../images/transport.jpg";
import Service4 from "../images/nzunzeni.jpg";
import Service5 from "../images/cleaning.png";

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Mission' subtitle='Check out our company story and work process' />

            <p>We rely on the demand for engineered construction services with a focus on Civil Projects. With this in mind we align as one man, our workforce and collective skills to provide our clients with reliable and quality construction. This day-to-day enterprise is attained and underpinned by competent personnel and quality management.</p>
            <p>By Strategically positioning quality management as the heart of our operations we reinforce sustainability and deliver quality outcome to all stakeholders.Furthermore, Nzunzeni Trading strives to create work and to uplift individuals in the community by growth oppotunities and hands on leadership.</p>
          </div>
          <div className='right row'>
            <img src={img} alt='' />
          </div>
        </div>

        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Vision' subtitle='What the company strives to achieve' />

            <p>Our Decades of experience, innovation and exceptional people differentiate our approach to delivering intergrated solutions in a diverse and changing market. Since its establishment, integral to the company's business strategy have always been its commitment to "Structured Innovation".</p>
            <p>The word "Structured" expresses the company ability to deliver products and services according to tested methods. "Innovation" reflects the important attribute or meeting challenges with effective engineered solutions.</p>
          </div>
          <div className='right row'>
            <img src={Service3} alt='' />
          </div>
          </div>

          <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Values' subtitle='We stand by these values which makes us the partner you can trust' />

            <p>It is important to emphasize the existence of our integrated quality management system that underpins every aspect of operation and also empower employees to Jive its corporate values. Our strategy to increased productivity and minimise cost can be summarised as Good planning, properly organized work, continuous supervision, Efficient schedulling, Minimising rework and prevention of accidents</p>
            <p>Nzunzeni Trading strives to live by its core values of people, excellence, transfomation, customer focus, innovation, integrity and perfomance.</p>
          </div>
          <div className='right row'>
            <img src={Service4} alt='' />
          </div>
          </div>

      </section>
    </>
  )
}

export default About
