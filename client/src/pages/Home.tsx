import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="container center-content">
      <div className="home-content">
        <h1>Welcome to the Security App</h1>
        <p className="home-description">
          Navigate through the app using the buttons below.
        </p>
        <nav className="home-nav">
          <Link to="/questions" className="home-button">
            View Questions
          </Link>
          <Link to="/questions/new" className="home-button">
            Ask a Question
          </Link>
          <Link to="/login" className="home-button">
            Login
          </Link>
          <Link to="/signup" className="home-button">
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
