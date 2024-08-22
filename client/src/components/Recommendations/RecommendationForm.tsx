import React, { useState } from 'react';
import { createRecommendation, updateRecommendation } from '../../api/recommendationsApi';

interface RecommendationFormProps {
  recommendation?: {
    id: string;
    text: string;
  };
  onSubmitSuccess: () => void;
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({ recommendation, onSubmitSuccess }) => {
  const [text, setText] = useState(recommendation ? recommendation.text : '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (recommendation) {
        await updateRecommendation(recommendation.id, { text });
      } else {
        await createRecommendation({ text });
      }
      onSubmitSuccess();
    } catch (error) {
      console.error('Error saving recommendation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter your recommendation"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default RecommendationForm;
