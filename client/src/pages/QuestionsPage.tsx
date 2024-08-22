import React from 'react';
import { Link } from 'react-router-dom';
import QuestionList from '../components/Questions/QuestionList';
import '../styles/QuestionsPage.css';

const QuestionsPage: React.FC = () => {
  return (
    <div className="container">
      <div className="questions-header">
        <h1>Questions</h1>
        <Link to="/questions/new" className="home-button">
          Ask a New Question
        </Link>
      </div>
      <QuestionList />
    </div>
  );
};

export default QuestionsPage;
