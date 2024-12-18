import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './MyCourses.css'

// Destructure props directly in the function parameter
const MyCoursesCard = ({ thumbnailUrl, courseName, description, course, week }) => {
  return (
    <div className="course-video">
      <div className="course-video-left">
        <img src={thumbnailUrl} alt="" />
      </div>
      <div className="course-video-right">
        <h3>{courseName}</h3>
        <div className="course-right-p">
          <p>{course}</p>
          <p>{week}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MyCoursesCard
