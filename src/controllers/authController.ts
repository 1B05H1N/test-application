import { Request, Response } from 'express';
import { signupUser, loginUser } from '../services/authService'; // Ensure this path is correct

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const result = await signupUser(username, email, password);
    res.status(201).json(result);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error during signup:', error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error('Unknown error during signup');
      res.status(500).json({ error: 'An unknown error occurred during signup' });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await loginUser(email, password);
    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error during login:', error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error('Unknown error during login');
      res.status(500).json({ error: 'An unknown error occurred during login' });
    }
  }
};
