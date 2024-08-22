import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecommendationById } from '../../api/recommendationsApi';

interface Recommendation {
  id: string;
  text: string;
}

const RecommendationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchRecommendation = async () => {
      try {
        // Make sure `getRecommendationById` returns `Promise<Recommendation>`
        const data = await getRecommendationById(id);
        setRecommendation(data as Recommendation);
      } catch (error) {
        console.error('Error fetching recommendation:', error);
      }
    };

    fetchRecommendation();
  }, [id]);

  if (!recommendation) return <div>Loading...</div>;

  return (
    <div>
      <h1>Recommendation</h1>
      <p>{recommendation.text}</p>
      {/* Add more details if necessary */}
    </div>
  );
};

export default RecommendationDetail;
