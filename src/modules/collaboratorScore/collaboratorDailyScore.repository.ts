import { prisma } from "../../lib/prisma";

export const collaboratorDailyScoreRepository = {
  upsert: ({
    collaboratorId,
    date,
    score
  }: {
    collaboratorId: number;
    date: Date;
    score: number;
  }) => {
    return prisma.collaboratorDailyScore.upsert({
      where: {
        collaborator_id_date: {
          collaborator_id: collaboratorId,
          date
        }
      },
      create: {
        collaborator_id: collaboratorId,
        date,
        score
      },
      update: {
        score
      }
    });
  }
};