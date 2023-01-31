import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions?</h1>
              <p>We are available 24/7 to provide the service you need.</p>
            </div>
            <button className='btn5'><Link style={{textDecoration: 'none', color: "inherit"}} to="/contact">Contact Us Today</Link></button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='' alt='' />
              <h2>Find the service you need to suit your needs</h2>
              <p>Get special updates we periodically run which can help you save the next time you use our services</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Nzunzeni Trading. Designed By EduLinkage.</span>
      </div>
    </>
  )
}

export default Footer
