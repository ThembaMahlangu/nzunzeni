import "./ContactFormStyles.css";
import React, { useRef, useState } from 'react';

function LoginForm() {

  const [password, setPassword] = useState('');
  return (
    <div className="form-container">
      <h1>Enter Your Credentials!</h1>
      <form>
        <label>Email</label>
        <input name="email" placeholder="Input your Email"/>
        <label>Password</label>
        <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Input Your Password"/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;