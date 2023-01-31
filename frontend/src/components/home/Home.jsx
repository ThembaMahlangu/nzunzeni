import React from "react"
import Awards from "./awards/Awards"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import "../PropertyStyles.css";
import { Link } from "react-router-dom";
import Service1 from "../images/civilworks.jpg";
import Service2 from "../images/electrician.jpg";
import Service3 from "../images/transport.jpg";
import Service4 from "../images/nzunzeni.jpg";
import Service5 from "../images/cleaning.png";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="property">
      <h1>Featured Services</h1>
      <p>These highlited services get shuffled on a weekly basis</p>
      <div className="propertycard">
        <div className="p-card">
          <div className="p-image">
            <img src={Service1} alt="imag"/>
          </div>
          <h4>Civil Works</h4>
          <h3>Available 24/7</h3>
          <p>We offer Construction of Distribution Substation, Miniature Substation Plartform, Concret/Brick Manhole and Construction of High Most Plinths.</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/services">All Services</Link></button>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Service2} alt="imagess"/>
          </div>
          <h4>Electrical Works</h4>
          <h3>Available 24/7</h3>
          <p>We Offer Cable Fault Location, Cable Tracing & Identification, Cable Pressure Testing AC/DC, Cable Jointing and Terminations.</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/services">All Services</Link></button>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Service3} alt="images"/>
          </div>
          <h4>Transportation</h4>
          <h3>Available 24/7</h3>
          <p>We Offer Transportation To Small and Big Companies that want to transport their employees safely on a monghtly or yearly basis contract.</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/services">All Services</Link></button>
        </div>

      </div>
    </div>
      <Awards />
      <Location />
    </>
  )
}

export default Home
