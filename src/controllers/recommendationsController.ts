import { Request, Response } from 'express';
import { getRecommendations, getRecommendationById, createRecommendation, updateRecommendation, deleteRecommendation } from '../services/recommendationsService';

// Get All Recommendations
export const getAllRecommendations = async (req: Request, res: Response) => {
  try {
    const recommendations = await getRecommendations();
    res.json(recommendations);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).send('Server error');
  }
};

// Get Recommendation by ID
export const getRecommendation = async (req: Request, res: Response) => {
  try {
    const recommendation = await getRecommendationById(req.params.id);
    if (!recommendation) {
      return res.status(404).send('Recommendation not found');
    }
    res.json(recommendation);
  } catch (error) {
    console.error('Error fetching recommendation:', error);
    res.status(500).send('Server error');
  }
};

// Create New Recommendation
export const createNewRecommendation = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    const userId = (req.user as any)?.id;
    const newRecommendation = await createRecommendation({ text, userId });
    res.status(201).json(newRecommendation);
  } catch (error) {
    console.error('Error creating recommendation:', error);
    res.status(500).send('Server error');
  }
};

// Update Recommendation
export const updateExistingRecommendation = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    const updatedRecommendation = await updateRecommendation(req.params.id, { text });
    res.json(updatedRecommendation);
  } catch (error) {
    console.error('Error updating recommendation:', error);
    res.status(500).send('Server error');
  }
};

// Delete Recommendation
export const deleteExistingRecommendation = async (req: Request, res: Response) => {
  try {
    await deleteRecommendation(req.params.id);
    res.json({ message: 'Recommendation deleted' });
  } catch (error) {
    console.error('Error deleting recommendation:', error);
    res.status(500).send('Server error');
  }
};
