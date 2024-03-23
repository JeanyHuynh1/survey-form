import { useEffect, useState } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SurveyForm from './components/SurveyForm';
import './App.styles.css'

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  // Introduce state to keep track of user's authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check the authentication status from localStorage
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    setIsAuthenticated(!!token);
  }, []);

  // Function to handle sign-in action
  const handleSignIn = (token) => {
    localStorage.setItem('userToken', token);
    setIsAuthenticated(true);
  };

  // Function to handle sign-out action
  const handleSignOut = () => {
    localStorage.removeItem('userToken');
    setIsAuthenticated(false);
  };


  return (
    <div className='root'>
      {isAuthenticated ? (
        <SurveyForm onSignOut={handleSignOut} />
      ) : showSignUp ? (
        <div>
          <SignUp />
          <button onClick={() => setShowSignUp(false)}>Already have an account? Sign In</button>
        </div>
      ) : (
        <div>
          <SignIn onSignIn={handleSignIn} />
          <button onClick={() => setShowSignUp(true)}>Need an account? Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default App;
