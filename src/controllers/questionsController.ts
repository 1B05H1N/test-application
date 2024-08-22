import { Request, Response } from 'express';
import { getQuestions, getQuestionById, createQuestion, updateQuestion, deleteQuestion } from '../services/questionsService';

// Get All Questions
export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await getQuestions();
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).send('Server error');
  }
};

// Get Question by ID
export const getQuestion = async (req: Request, res: Response) => {
  try {
    const question = await getQuestionById(req.params.id);
    if (!question) {
      return res.status(404).send('Question not found');
    }
    res.json(question);
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).send('Server error');
  }
};

// Create New Question
export const createNewQuestion = async (req: Request, res: Response) => {
  try {
    const { title, body } = req.body;
    const userId = (req.user as any)?.id;
    const newQuestion = await createQuestion({ title, body, userId });
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).send('Server error');
  }
};

// Update Question
export const updateExistingQuestion = async (req: Request, res: Response) => {
  try {
    const { title, body } = req.body;
    const updatedQuestion = await updateQuestion(req.params.id, { title, body });
    res.json(updatedQuestion);
  } catch (error) {
    console.error('Error updating question:', error);
    res.status(500).send('Server error');
  }
};

// Delete Question
export const deleteExistingQuestion = async (req: Request, res: Response) => {
  try {
    await deleteQuestion(req.params.id);
    res.json({ message: 'Question deleted' });
  } catch (error) {
    console.error('Error deleting question:', error);
    res.status(500).send('Server error');
  }
};
