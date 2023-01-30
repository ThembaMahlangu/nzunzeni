import "./ContactFormStyles.css";
import React, { useRef } from 'react';

function LoginForm() {
  return (
    <div className="form-container">
      <h1>Enter Your Credentials!</h1>
      <form>
        <label>Email</label>
        <input name="email" placeholder="Input your Email"/>
        <label>Password</label>
        <input name="message" placeholder="Input Your Password"/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;