import React from 'react';
import './BlogItem.css'; // Import the CSS file

const BlogItem = ({ title, content }) => {
  return (
    <div className="blog-item">
      <h3>{title}</h3>
      <p>{content}</p>
      <button>Read More</button>
    </div>
  );
};

export default BlogItem;
