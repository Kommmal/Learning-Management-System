import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import MyCoursesCard from "../MyCourses/MyCoursesCard";
import './AllCourses.css'
const AllCourses = () => {
  return (
    <div className="allcourses">
      <h1>All Courses</h1>
      <div className="allcourses-container">
        <div className="allcourses-right">
          <div className="allcourses-right-top">
            <div className="technical-support">
              <p>Technical Support</p>
              <FaChevronRight size={10} />
            </div>
            <hr />
            <div className="technical-support">
              <p>TechnFin</p>
              <FaChevronRight size={10} />
            </div>
            <hr />
            <div className="technical-support">
              <p>SaaS</p>
              <FaChevronDown size={10} />
            </div>
            <hr />
          </div>
          <div className="allcourses-right-bottom">
          <MyCoursesCard
            thumbnailUrl="/images/BS-Accounting-and-Finance-Scope.jpg"
            courseName="BS Accounting and Finance Scope"
            description="Learn the foundational principles of business management, including strategy, finance, marketing, and operations. Gain real-world insights and practical skills to lead in todays competitive business environment."
            course="Saas"
            week="1 week"
          />
          <MyCoursesCard
            thumbnailUrl="/images/bs software engineering.png"
            courseName="Bs Software Engineering"
            description="Master the fundamentals of software development, from coding languages to problem-solving techniques. This course covers everything you need to start a career in programming, including real-world projects and industry practices."
            course="Saas"
            week="1 week"
          />
          </div>
          <div className="technical-support">
            <p>Legal</p>
            <FaChevronRight size={10} />
          </div>
          <hr />
        </div>
        <div className="allcourses-left">
        <div className="allcourses-left-top">
            <div className="search">
              <input type="seacrh" name="" id="" placeholder="Search..." />
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
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
