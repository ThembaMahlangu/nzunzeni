import React from "react";
import Heading from "../../common/Heading";
import "./style.css";
import "../../PropertyStyles.css";
import Service1 from "../../images/Chosen1.jpg";
import Service2 from "../../images/Chosen2.jpg";
import Service3 from "../../images/Chosen3.jpg";
import Service4 from "../../images/Chosen4.jpg";
import Service5 from "../../images/Chosen5.jpg";
import Service6 from "../../images/Chosen6.jpg";
import Service7 from "../../images/Chosen7.jpg";
import Service8 from "../../images/Chosen8.jpg";

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Some Of Our Past Projects' subtitle='These are the images of the projects we worked on in order to provide the kind of environments they are today.' />

          <div className="propertycard">
        <div className="p-card">
          <div className="p-image">
            <img src={Service1} alt="image"/>
          </div>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Service2} alt="image"/>
          </div>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Service3} alt="image"/>
          </div>
        </div>

      </div>

      <div className="propertycard">

        <div className="p-card">
          <div className="p-image">
            <img src={Service4} alt="image"/>
          </div>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Service7} alt="image"/>
          </div>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Service5} alt="image"/>
          </div>
        </div>

      </div>
        </div>
      </section>
    </>
  )
}

export default Location
