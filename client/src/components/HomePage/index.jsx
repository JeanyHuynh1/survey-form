/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import logo from '../../assets/logo.webp';
import './homepage.styles.css'

function HomePage({isAuthenticated}) {
  const description = useMemo(
    () => {
      if (isAuthenticated) {
        return `Go to Surveys tab`
      } else {
        return `Sign in to see your surveys`
      }
    },
    []
  );
    return (
      <div className="home-container">
        <img src={logo} alt="Insightful Explorers Logo" className="logo"/>
        <h2>Insightful Explorers</h2>
        <h3 className="description">{description}</h3>
      </div>
    );
}
  
export default HomePage;