import React, { useState } from "react";
import "./Announcement.css";

const Announcement = () => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handlePostAnnouncement = () => {
    if (subject.trim() !== "" && content.trim() !== "") {
      const newAnnouncement = { subject, content, date: new Date().toLocaleString() };

      // Retrieve existing announcements or initialize an empty array
      const existingAnnouncements = JSON.parse(localStorage.getItem("announcements")) || [];

      // Add the new announcement and save back to localStorage
      const updatedAnnouncements = [newAnnouncement, ...existingAnnouncements];
      localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements));

      // Clear input fields
      setSubject("");
      setContent("");
      alert("Announcement posted successfully!");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="announcement-container">
      <h1>Post Announcement</h1>
      <hr />
      <div className="announcement-inputs">
        <label>Subject</label>
        <input
          type="text"
          placeholder="Server downtime"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="input1"
          required 
        />

        <label>Content</label>
        <textarea
          placeholder="This is to announce that..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="input2"
          required
        ></textarea>
      </div>
      <div className="post-btn">
      <button  onClick={handlePostAnnouncement}>
        Post
      </button>
      </div>
    </div>
  );
};

export default Announcement;
