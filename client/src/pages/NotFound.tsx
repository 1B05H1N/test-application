import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="container center-content">
      <div className="notfound-content">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="notfound-button">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
