import { useState } from 'react';
import UserServices from '../../api/userApi';
import './signin.styles.css'

// eslint-disable-next-line react/prop-types
function SignIn({onSignIn}) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await UserServices.loginUser(loginData).then(onSignIn);
    localStorage.setItem('userToken', response.data.accessToken);
  };

  return (
    <form onSubmit={handleSubmit} className='signin-form'>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;
