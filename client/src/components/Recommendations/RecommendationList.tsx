import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecommendations } from '../../api/recommendationsApi';

interface Recommendation {
  id: string;
  text: string;
}

const RecommendationList: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const data = await getRecommendations();
        setRecommendations(data as Recommendation[]);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <ul>
        {recommendations.map((recommendation) => (
          <li key={recommendation.id}>
            <Link to={`/recommendations/${recommendation.id}`}>
              {recommendation.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
