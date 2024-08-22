import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(helmet());  // Security headers
//app.use(cors());  // Enable CORS
app.use(express.json());  // Parse JSON bodies
app.use(passport.initialize());  // Initialize Passport.js

// Simple logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Basic route to verify server is running
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, there !');
});

// Example protected route
app.get('/protected', passport.authenticate('jwt', { session: false }), (req: Request, res: Response) => {
  res.send('This is a protected route');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
