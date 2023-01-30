import React from 'react';
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import Service1 from "../images/civilworks.jpg";
import Service2 from "../images/electrician.jpg";
import Service3 from "../images/trans.jpg";
import Service4 from "../images/nzunzeni.jpg";
import Service5 from "../images/cleaning.png";
import LoginForm from '../ContactForm';

function AdminLogin() {
  return (
    <>
     <section className='pricing mb'>
        <Back name='Welcome to your admin portal' title='Please login below' cover={Service4} />
        <div className='price container'>
        <LoginForm/>
        </div>
     </section>
    </>
  )
}

export default AdminLogin;