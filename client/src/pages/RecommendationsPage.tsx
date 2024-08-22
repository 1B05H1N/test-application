import React from 'react';
import { Link } from 'react-router-dom';
import RecommendationList from '../components/Recommendations/RecommendationList';
import '../styles/RecommendationsPage.css';

const RecommendationsPage: React.FC = () => {
  return (
    <div className="container">
      <div className="recommendations-header">
        <h1>Recommendations</h1>
        <Link to="/recommendations/new" className="home-button">
          Add a New Recommendation
        </Link>
      </div>
      <RecommendationList />
    </div>
  );
};

export default RecommendationsPage;
