import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getRecommendations = async () => {
  return await prisma.recommendation.findMany();
};

export const getRecommendationById = async (id: string) => {
  return await prisma.recommendation.findUnique({
    where: { id },
  });
};

export const createRecommendation = async (data: { text: string; userId: string }) => {
  return await prisma.recommendation.create({
    data,
  });
};

export const updateRecommendation = async (id: string, data: { text?: string }) => {
  return await prisma.recommendation.update({
    where: { id },
    data,
  });
};

export const deleteRecommendation = async (id: string) => {
  return await prisma.recommendation.delete({
    where: { id },
  });
};
