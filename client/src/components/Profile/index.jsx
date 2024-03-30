/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './profile.styles.css'; // Importing the CSS file for styles
import { UserServices } from '../../api/userApi';

function Profile() {
    const [userDetals, setUserDetails] = useState({});

    useEffect(
        () => {
            fetchUserDetails();
        },
        []
    );
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p><b>Username:</b> {userDetals.username}</p>
      <p><b>Email:</b> {userDetals.email}</p>
    </div>
  );
    
    async function fetchUserDetails() {
        const response = await UserServices.getUserDetails();

        setUserDetails(response.data);
    }
}

export default Profile;
