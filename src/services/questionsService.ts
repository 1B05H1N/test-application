import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getQuestions = async () => {
  return await prisma.question.findMany();
};

export const getQuestionById = async (id: string) => {
  return await prisma.question.findUnique({
    where: { id },
  });
};

export const createQuestion = async (data: { title: string; body: string; userId: string }) => {
  return await prisma.question.create({
    data,
  });
};

export const updateQuestion = async (id: string, data: { title?: string; body?: string }) => {
  return await prisma.question.update({
    where: { id },
    data,
  });
};

export const deleteQuestion = async (id: string) => {
  return await prisma.question.delete({
    where: { id },
  });
};
