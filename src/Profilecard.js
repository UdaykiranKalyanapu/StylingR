import React from 'react';
import profileImage from './images/react.jpg'; // Import the image file
import styles from './ProfileCard.module.css'; // Import CSS module for styling

const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      {/* Display the image */}
      <img src={profileImage} alt="Profile" className={styles.profileImage} />

      {/* Display other profile information */}
      <h2 className={styles.profileName}>Uday K</h2>
      <p className={styles.profileBio}>Intern</p>
    </div>
  );
};

export default ProfileCard;
