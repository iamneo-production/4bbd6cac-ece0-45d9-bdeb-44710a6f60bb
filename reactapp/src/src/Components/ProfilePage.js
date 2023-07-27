// ProfilePage.js

import React from 'react';
import './ProfilePage.css'; // Import the CSS file for styling

const ProfilePage = () => {
  // Sample data for the advisor
  const advisorDetails = {
    firstName: 'Kaviya',
    lastName: 'G',
    email: 'Kaviya@example.com',
    education: 'Psycology',
    stream: 'Mental Health',
    perHourFees: '$50',
    Experience:'3 years',
    
    // You can add more details if needed
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1690263783/th_sm7vuy.jpg" 
          alt="Advisor Icon"
          className="advisor-image"
        />
      </div>
      <div className="profile-details">
        <h1>
          {advisorDetails.firstName} {advisorDetails.lastName}
        </h1>
        <p>Email: {advisorDetails.email}</p>
        <p>Education: {advisorDetails.education}</p>
        <p>Stream: {advisorDetails.stream}</p>
        <p>Per Hour Fees: {advisorDetails.perHourFees}</p>
        <p>Experience: {advisorDetails.experience}</p>
      </div>
      <button className="contact-button">Contact Advisor</button>
    </div>
  );
};

export default ProfilePage;
