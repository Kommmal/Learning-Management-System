import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { coursesData } from "../../courseData";
import MyCoursesCard from "./MyCoursesCard";
import "./MyCourses.css";

const MyCourses = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // for search functionality

  useEffect(() => {
    const savedAnnouncements =
      JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(savedAnnouncements);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedAnnouncements = announcements.filter(
      (_, index) => index !== indexToDelete
    );
    localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements));
    setAnnouncements(updatedAnnouncements);
  };

  // Filter announcements based on search term
  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      announcement.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-course">
      <div className="heading">
        <h1>My Courses</h1>
      </div>
      <hr />
      <div className="mycourse-container">
        <div className="mycourse-right">
          {/* Dynamically map through coursesData */}
          {coursesData.map((course) => (
            <Link to={`/course/${course.id}`} key={course.id} className="link">
              <MyCoursesCard
                thumbnailUrl={course.thumbnail}
                courseName={course.name}
                description={course.description}
                course="Saas"
                week={`${course.chapters.length} weeks`}
              />
            </Link>
          ))}
        </div>

        {/* Announcements Section */}
        <div className="mycourse-left">
          <div className="mycourse-left-top">
            {/* Search input */}
            <div className="search">
              <input
                type="search"
                placeholder="Search announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch size={20} className="icon" />
            </div>
            <hr />
            <div className="filter">
              <p>Filter</p>
              <p>All</p>
              <p>In progress</p>
              <p>Done</p>
            </div>
            <hr />
            <div className="sort">
              <p>Sort By:</p>
              <p>Course title</p>
              <p>Last accessed</p>
            </div>
            <hr />
          </div>

          <div className="my-course-announcement">
            <h3>Announcements</h3>
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((item, index) => (
                <div key={index} className="announcement-item">
                  <strong>{item.subject}</strong>
                  <p>{item.content}</p>
                  <small>{item.date}</small>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p>No announcements available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
