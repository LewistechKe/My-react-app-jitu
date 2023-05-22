import React from 'react';
import BlogHighlight from './BlogHighlight';
import BlogList from './BlogList';
import './Body.css'; // Import the CSS file

const Body = () => {
  return (
    <div className="body">
      <div className="left-section">
        <div className="blog-highlight">
          <BlogHighlight />
        </div>
        <div className="blog-highlight">
          <BlogHighlight />
        </div>
      </div>
      
      <div className="right-section">
        <BlogList />
      </div>
    </div>
  );
};

export default Body;
