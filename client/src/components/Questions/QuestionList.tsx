import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getQuestions } from '../../api/questionsApi';

interface Question {
  id: string;
  title: string;
  body: string;
}

const QuestionList: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Link to={`/questions/${question.id}`}>
              {question.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
