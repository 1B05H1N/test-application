import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../../api/questionsApi';

interface Question {
  id: string;
  title: string;
  body: string;
}

const QuestionDetail = () => {
  const { id = '' } = useParams<{ id: string }>();
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const data: Question = await getQuestionById(id);
        setQuestion(data);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchQuestion();
  }, [id]);

  if (!question) return <div>Loading...</div>;

  return (
    <div>
      <h1>{question.title}</h1>
      <p>{question.body}</p>
    </div>
  );
};

export default QuestionDetail;
