// src/components/SignUp.js

import { useState } from 'react';
import { UserServices } from '../../api/userApi';
import './signup.styles.css';

function SignUp() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      await UserServices.registerUser(userData).then(() => {
          setUserData({});
      });
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
