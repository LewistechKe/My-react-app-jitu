import React from 'react';
import BlogItem from './BlogItem';
import './BlogList.css'; // Import the CSS file

const BlogList = () => {
  const blogData = [
    { title: 'Blog Title 1', content: 'Lorem Consectetur adipiscing elit Sed do eiusmod tempor incididunt. Lorem Consectetur adipiscing elit Sed do eiusmod tempor incididunt. Lorem Consectetur adipiscing elit Sed do eiusmod tempor incididunt' },
    { title: 'Blog Title 2', content: 'Consectetur adipiscing elit. Lorem Consectetur adipiscing elit Sed do eiusmod tempor incididunt. Lorem Consectetur adipiscing elit Sed do eiusmod tempor incididunt' },
    { title: 'Blog Title 3', content: 'Sed do eiusmod tempor incididunt. Lorem Consectetur adipiscing elit Sed do eiusmod tempor incididunt. Lorem Consectetur adipiscing elit Sed do eiusmod tempor incididunt' },
  ];

  return (
    <div className="blog-list">
      {blogData.map((blog, index) => (
        <BlogItem key={index} title={blog.title} content={blog.content} />
      ))}
    </div>
  );
};

export default BlogList;
