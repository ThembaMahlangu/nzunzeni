import "./PropertyStyles.css";
import { Link } from "react-router-dom";
import PropertySingleData from "./PropertySingleData";
import Service1 from "../components/images/civilworks.jpg";
import Service2 from "../components/images/electrician.jpg";
import Service3 from "../components/images/transport.jpg";
import Service4 from "../components/images/nzunzeni.jpg";
import Service5 from "../components/images/cleaning.png";
import Service6 from "../components/images/plumbing.jpg";

function PropertySingle() {
  return (
    <div className="property">
      <h1>All Services Provided by Nzunzeni Trading</h1>
      <p>Once you found what you need just click "Contact Us" and request for your service</p>
      <div className="propertycard">
        <div className="p-card">
          <div className="p-image">
            <img src={Service1} alt="image"/>
          </div>
          <h4>Civil Works</h4>
          <h3>Available 24/7</h3>
          <p>We offer Construction of Distribution Substation, Miniature Substation Plartform, Concret/Brick Manhole and Construction of High Most Plinths.</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/contact">Contact Us</Link></button>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Service2} alt="image"/>
          </div>
          <h4>Electrical Works</h4>
          <h3>Available 24/7</h3>
          <p>We Offer Cable Fault Location, Cable Tracing & Identification, Cable Pressure Testing AC/DC, Cable Jointing and Terminations.</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/contact">Contact Us</Link></button>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Service3} alt="image"/>
          </div>
          <h4>Transportation</h4>
          <h3>Available 24/7</h3>
          <p>We Offer Transportation To Small and Big Companies that want to transport their employees safely on a monghtly or yearly basis contract.</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/contact">Contact Us</Link></button>
        </div>

      </div>

      <div className="propertycard">

        <div className="p-card">
          <div className="p-image">
            <img src={Service4} alt="image"/>
          </div>
          <h4>Building Construction</h4>
          <h3>Available 24/7</h3>
          <p>We Offer House Building(From Foundation to Roofing), Demolition of Building and Erection of Structure.</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/contact">Contact Us</Link></button>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Service6} alt="image"/>
          </div>
          <h4>Plumbing</h4>
          <h3>Available 24/7</h3>
          <p>We offer Plumbing services to small and big scae companies on a specified contract and we also offer plumbing to small households that also require our service.</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/contact">Contact Us</Link></button>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Service5} alt="image"/>
          </div>
          <h4>Cleaning Services</h4>
          <h3>Available 24/7</h3>
          <p>We Offer Waste Removal and Cleaning from Small Scale to Commecial Cleaning which is suitable for small and large offices.</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/contact">Contact Us</Link></button>
        </div>

      </div>
    </div>
  );
}

export default PropertySingle;
