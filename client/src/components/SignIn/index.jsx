import { useState } from 'react';
import { UserServices } from '../../api/userApi';
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
    try {
        const response = await UserServices.loginUser(loginData);
        console.log("API Response:", response); // Confirm the response structure

        if (response.accessToken) {
            // Proceed with user sign-in flow
            onSignIn(response.accessToken);
        } else {
            console.error("Token not found in response");
            // Handle the absence of a token, possibly a sign-in error
        }
    } catch (error) {
        console.error("Login request failed", error);
        // Handle API call failure
    }
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
