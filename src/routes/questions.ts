import express from 'express';
import passport from 'passport';
import { getQuestions, getQuestionById, createQuestion, updateQuestion, deleteQuestion } from '../services/questionsService';

const router = express.Router();

router.get('/', async (req, res) => {
  const questions = await getQuestions();
  res.json(questions);
});

router.get('/:id', async (req, res) => {
  const question = await getQuestionById(req.params.id);
  res.json(question);
});

router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { title, body } = req.body;
  const userId = (req.user as any)?.id;  // Using type assertion to avoid TypeScript error
  const newQuestion = await createQuestion({ title, body, userId });
  res.json(newQuestion);
});

router.put('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { title, body } = req.body;
  const updatedQuestion = await updateQuestion(req.params.id, { title, body });
  res.json(updatedQuestion);
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  await deleteQuestion(req.params.id);
  res.json({ message: 'Question deleted' });
});

export default router;
