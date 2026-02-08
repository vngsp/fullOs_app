import { calculateCollaboratorScore } from "./calculateCollaboratorScore";
import { collaboratorDailyScoreRepository } from "./collaboratorDailyScore.repository";
import { orderRepository } from "../order/order.repository";

export const collaboratorScoreService = {
  recalculateDailyScore: async (collaboratorId: number, date: Date) => {
    const orders = await orderRepository.findByCollaboratorAndDate(
      collaboratorId,
      date
    );

    const osCount = orders.length;
    const reworkCount = orders.filter(o => o.is_rework).length;
    const totalTimeMinutes = orders.reduce(
      (acc, o) => acc + o.duration_min,
      0
    );

    const score = calculateCollaboratorScore({
      osCount,
      reworkCount,
      totalTimeMinutes
    });

    return collaboratorDailyScoreRepository.upsert({
      collaboratorId,
      date,
      score
    });
  }
};