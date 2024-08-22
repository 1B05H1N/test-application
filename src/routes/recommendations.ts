import express from 'express';
import passport from 'passport';
import { getRecommendations, getRecommendationById, createRecommendation, updateRecommendation, deleteRecommendation } from '../services/recommendationsService';

const router = express.Router();

router.get('/', async (req, res) => {
  const recommendations = await getRecommendations();
  res.json(recommendations);
});

router.get('/:id', async (req, res) => {
  const recommendation = await getRecommendationById(req.params.id);
  res.json(recommendation);
});

router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { text } = req.body;
  const userId = (req.user as any)?.id;  // Using type assertion to avoid TypeScript error
  const newRecommendation = await createRecommendation({ text, userId });
  res.json(newRecommendation);
});

router.put('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { text } = req.body;
  const updatedRecommendation = await updateRecommendation(req.params.id, { text });
  res.json(updatedRecommendation);
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  await deleteRecommendation(req.params.id);
  res.json({ message: 'Recommendation deleted' });
});

export default router;
