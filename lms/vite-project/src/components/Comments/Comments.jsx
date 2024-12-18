import React, { useState } from "react";
import './Comments.css';
import { FiTrash } from "react-icons/fi";

const CommentsSection = () => {
  
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);


  const handlePostComment = () => {
    if (comment.trim() !== "") {
   
      const now = new Date();
      const timestamp = now.toLocaleString(); 


      const newComment = {
        text: comment,
        timestamp: timestamp,
      };

      setComments((previousComments) => [...previousComments, newComment]);
      setComment("");
    } else {
      alert("Please enter a comment before posting.");
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="comments">
      <h2>Comments</h2>
      <div className="comment-list">
        {comments.map((cmt, index) => (
          <div key={index} className="comment">
            <div className="comment-top">
            <p>{cmt.text}</p>
            <div
              className="deleteButton"
              onClick={() => handleDeleteComment(index)}
            >
              <FiTrash size={20} />
            </div>
            </div>
            <small className="timestamp">Posted on: {cmt.timestamp}</small>
          </div>
        ))}
      </div>
     <hr />
      <textarea
        className="textarea"
        placeholder="Write your comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="postButton">
        <button className="btn1" onClick={handlePostComment}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentsSection;
