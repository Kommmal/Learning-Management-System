import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { coursesData } from "../../courseData";
import "./CourseDetail.css";

const CourseDetail = () => {
  const { courseId } = useParams(); // Extract course ID from URL
  const course = coursesData.find((c) => c.id === courseId);

  const [chapters, setChapters] = useState(course.chapters);

  // Toggle chapter status
  const toggleStatus = (chapterId) => {
    const updatedChapters = chapters.map((chapter) =>
      chapter.id === chapterId
        ? {
            ...chapter,
            status: chapter.status === "Done" ? "Mark as done" : "Done",
          }
        : chapter
    );
    setChapters(updatedChapters);
  };

  return (
    <div className="course-detail">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      {chapters.map((chapter) => (
        <div key={chapter.id} className="chapter-card">
          <div className="chapter-content">
            <h3>{chapter.title}</h3>
            <div className="days-list">
              {chapter.days.map((day) => (
                <Link to="/video" className="link">
                <div key={day.day} className="day-item">
                  <p>Day {day.day}: {day.topic}</p>
                </div>
                </Link>
              ))}
            </div>
          </div>
          <button
            className={`status-btn ${
              chapter.status === "Done" ? "done" : "mark-as-done"
            }`}
            onClick={() => toggleStatus(chapter.id)}
          >
            {chapter.status}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseDetail;
