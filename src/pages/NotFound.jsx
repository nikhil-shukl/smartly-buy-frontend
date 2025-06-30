import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center p-10 min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">
        Looks like the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block text-blue-600 underline hover:text-blue-800"
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
