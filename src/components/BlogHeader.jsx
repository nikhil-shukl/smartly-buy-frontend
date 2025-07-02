import React from "react";

const BlogHeader = ({ title, description }) => {
  return (
    <header className="text-center mb-10 px-4 sm:px-0">
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight"
        aria-level="1"
      >
        {title}
      </h1>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
        {description}
      </p>
    </header>
  );
};

export default BlogHeader;
