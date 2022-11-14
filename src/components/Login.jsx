// import React from 'react'
import '../CSS/login.css';
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  }

  return (
      <div className="auth-form-container">
          <h2>Login</h2>
          
          <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="licence">Full name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="name" id="name" />

              <label htmlFor="email">email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
              <label htmlFor="password">password</label>
              <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" />
                <NavLink to='/'>
                    <button type="submit">Login</button>
                </NavLink>
          </form>
            <NavLink to='/components/Register'>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </NavLink>
          
      </div>
  )
}
export default Login;