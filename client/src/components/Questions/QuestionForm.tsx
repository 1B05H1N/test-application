import React, { useState } from 'react';
import { createQuestion, updateQuestion } from '../../api/questionsApi';

interface QuestionFormProps {
  question?: {
    id: string;
    title: string;
    body: string;
  };
  onSubmitSuccess: () => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ question, onSubmitSuccess }) => {
  const [title, setTitle] = useState(question ? question.title : '');
  const [body, setBody] = useState(question ? question.body : '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (question) {
        await updateQuestion(question.id, { title, body });
      } else {
        await createQuestion({ title, body });
      }
      onSubmitSuccess();
    } catch (error) {
      console.error('Error saving question:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default QuestionForm;
