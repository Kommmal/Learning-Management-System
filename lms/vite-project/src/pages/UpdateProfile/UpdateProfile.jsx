import React, { useState } from "react";
import './UpdateProfile.css'
const UserProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    phoneNumber: "+1234567890",
    position: "Software Developer I",
    
  });
 
  const [theme, setTheme] = useState("System default");

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const removeProfilePicture = () => {
    setProfilePicture(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleSave = () => {
    console.log("Changes saved:", formData, theme, profilePicture);
  };

  return (
    <div className="user-profile">
      <div className="user">
        <div className="img_div">
          <a href="/profile">
            <img src="/images/Image User 1.png" alt="" />
          </a>
        </div>
        <div className="'user_headings">
          <h2>Natalie Borgan</h2>
          <h4>HR Manager</h4>
        </div>
      </div>
      <hr />
      <div className="userprofile-container">
      <div className="profile-header">
        <h2>Update Profile</h2>
      </div>

      <div className="profile-section">
        {/* Profile Picture */}
        <div className="profile-picture">
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" />
          ) : (
            <div className="profile-placeholder"></div>
          )}
          <div>
            <label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePictureChange}
                style={{ display: "none" }}
              />
              <button>Update Profile Picture</button>
            </label>
            <button onClick={removeProfilePicture}>Remove Profile Picture</button>
          </div>
        </div>

        {/* Profile Fields */}
        <div className="profile-fields">
          <div className="profiles">
          <div className="profile1">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="profile1">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          </div>
          <div className="profiles">
            <div className="profile1">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
            />
          </div>
          <div className="profile1" >
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          </div>
          <div>
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              readOnly
            />
          </div>
        </div>

        {/* Theme Selector */}
        <div className="theme-selector">
          <label>Appearance</label>
          <select value={theme} onChange={handleThemeChange}>
            <option value="System default">System default</option>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="profile-actions">
          <button onClick={() => console.log("Cancelled")}>Cancel</button>
          <button onClick={handleSave} style={{ backgroundColor: "#00aaff", color: "#fff" }}>
            Save Changes
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserProfile;
