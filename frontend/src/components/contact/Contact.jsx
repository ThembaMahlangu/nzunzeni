import React from "react";
import img from "../images/cleaning.png";
import Back from "../common/Back";
import "../ContactFormStyles.css";

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className="form-container">
          <h1>Our Address and Contact Info</h1>
          <h3>Tel: 013 241 7599</h3>
          <h3>Email: info@nzunzeni.co.za, admin@nzunzeni.co.za</h3>
          <h3>Fax: 086 525 1547</h3>
          <h3>WhatsApp: 071 135 6278</h3>
          <h3>Address: Portion 148, Middelburg Farmland, Dr Mandela Drive, Mhluzi, 1053</h3>
          <form>
            <label>Full Name</label>
            <input name="name" placeholder="Type you Full Name"/>
            <label>Contact Number</label>
            <input name="number" placeholder="Enter your prefered phone number"/>
            <label>Email</label>
            <input name="email" placeholder="Please enter your email"/>
            <label>Message</label>
            <textarea name="message" placeholder="Type out the neccesary infomation that you writing us about" rows={4}></textarea>
            <button type="submit">Enquire</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact;