import { useEffect, useState } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.styles.css'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Profile from './components/Profile';

function App() {
  const [screen, setScreen] = useState('HOME');
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

  useEffect(
    () => {
      if (isAuthenticated) {
        setScreen('HOME');
      } else {
        setScreen('SIGN_IN');
      }
    },
    [isAuthenticated]
  );

  return (
    <div className='root'>
      <Navbar
          screen={screen}
          onSignOut={handleSignOut}
          isAuthenticated={isAuthenticated}
          handleSetScreen={handleSetScreen}
      />
      {isAuthenticated ? (
          screen === 'HOME'
            ? <HomePage isAuthenticated={isAuthenticated} />
            : screen === 'PROFILE'
              ? <Profile />
              : null
      ) : (
        screen === 'SIGN_UP'
          ? (
            <div className='wrapper'>
              <SignUp />
            </div>
            )
            : screen === 'SIGN_IN'
              ? (
                <div className='wrapper'>
                  <SignIn onSignIn={handleSignIn} />
                </div>
              )
              : null
      )
      }
    </div>
  );

  function handleSetScreen(value) {
    setScreen(value);
  }
}

export default App;
