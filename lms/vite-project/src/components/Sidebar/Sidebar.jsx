import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Added useNavigate for redirection
import './Sidebar.css';
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);  // Access logout function from context
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle dropdown visibility
  const navigate = useNavigate(); // useNavigate hook to redirect the user

  const toggleSidebar = () => {
    setIsHamburgerClicked((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle dropdown menu
  };

  const handleLogout = () => {
    logout();  // Call logout function from context
    navigate("/");  // Redirect to the login page
  };

  const sidebarClass = isHamburgerClicked ? 'sideBar sideBar_ham_width' : 'sideBar';
  const logoDivClass = isHamburgerClicked ? 'logo no_border' : 'logo';
  const logoHeadingClass = isHamburgerClicked ? 'logo_heading white_heading' : 'logo_heading black_heading';
  const imgDivClass = isHamburgerClicked ? 'img_div' : 'img_div display_none';
  const userHeadingsClass = isHamburgerClicked ? 'user_headings' : 'user_headings display_none';
  const optionsPadding = isHamburgerClicked ? '4rem 1.5rem 18.2rem 1.5rem' : '4rem 1rem 18.2rem 1rem';

  const optionHeadingStyle = {
    fontSize: isHamburgerClicked ? '1.1rem' : '0.7rem',
    marginLeft: isHamburgerClicked ? '1.5rem' : '0rem',
    display: isHamburgerClicked ? '' : 'none',
    transition: isHamburgerClicked ? '0.5s all ease-out' : '',
  };

  const imageStyling = {
    marginLeft: isHamburgerClicked ? '0' : '1.5rem',
  };

  const logoHeadingClassStyle = {
    display: isHamburgerClicked ? '' : 'none',
  };

  const logoDisplay = {
    display: isHamburgerClicked ? '' : 'none',
    marginLeft: isHamburgerClicked ? '0.5rem' : 'auto',
  };

  const humburger = {
    marginLeft: isHamburgerClicked ? '-1.5rem' : 'auto',
  };

  return (
    <div className={sidebarClass}>
      <div className={logoDivClass}>
        <div className="hamburger_menu">
          <span className="hamburger" onClick={toggleSidebar} style={humburger}>
            &#9776;
          </span>
        </div>
        <img src="/images/logo (1).png" alt="" className="logo_img " style={logoDisplay} />
        <div className={logoHeadingClass} style={logoHeadingClassStyle}>
          <h3 className="main_heading">IE Network Solutions</h3>
          <h4 className="sub_heading">Learning Management System</h4>
        </div>
      </div>
      <div className="options" style={{ padding: optionsPadding }}>
        <div className="option block flex">
          <Link to="/mycourses"><img src="/images/MyCourses.png" alt="" className={imageStyling} /></Link>
          <Link to="/mycourses" className="opt_heading" style={optionHeadingStyle}>
            My Courses
          </Link>
        </div>
        <div className="option block">
          <Link to="/allcourses"><img src="/images/AllCourses.png" alt="" className={imageStyling} /></Link>
          <Link to="/allcourses" className="opt_heading" style={optionHeadingStyle}>
            All courses
          </Link>
        </div>
        <div className="option block">
          <Link to="/dashboard"><img src="/images/Dashboard.png" alt="" className={imageStyling} /></Link>
          <Link to="/dashboard" className="opt_heading" style={optionHeadingStyle}>
            Dashboard
          </Link>
        </div>
      </div>
      <div className="user">
        <div className={imgDivClass}>
          <a href="/profile">
          <img src="/images/Image User 1.png" alt="" />
          </a>
        </div>
        <div className={userHeadingsClass}>
          <h3>Natalie Borgan</h3>
          <h4>HR Manager</h4>
        </div>
        <div className="icon" onClick={toggleDropdown}>
          <img src="/images/setting.png" alt="" />
        </div>
        {isDropdownOpen && (  
          <div className="dropdown-menu active">
            <Link to="/userprofile" className="dropdown-item">
              Update Profile
            </Link>
            <Link to="/announcement" className="dropdown-item">
              Announcement
            </Link>
            <Link
              to="/" // Redirect to Login page
              className="dropdown-item"
              onClick={handleLogout} // Call logout function and navigate
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
