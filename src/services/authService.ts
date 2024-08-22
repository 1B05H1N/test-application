import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/db';  // Ensure the path to db.ts is correct

export const signupUser = async (username: string, email: string, password: string) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error('User already exists');

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });

  return { token, user };
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });

  return { token, user };
};
