import { Prisma } from "../../../generated/prisma/client";
import runWithCheck from "../../utils/runWithCheck";
import { orderRepository } from "./order.repository";
import { collaboratorRepository } from "../collaborator/collaborator.repository";
import { collaboratorScoreService } from "../collaboratorScore/collaboratorDailyScore.service";

export const orderService = {
    async createOrder(data: Prisma.OrdersCreateInput) {
    return runWithCheck(
        data,
        'Data is required',
        'Failed to create order',
        async () => {
            const start = new Date(data.start_datetime);
            const end = new Date(data.end_datetime);

            if (isNaN(start.getTime()) || isNaN(end.getTime())) {
                throw new Error('Invalid date');
            }

            const diffMs = end.getTime() - start.getTime();
            const durationMin = Math.round(diffMs / 60000);

            const order = await orderRepository.create({
                ...data,
                start_datetime: start,
                end_datetime: end,
                duration_min: durationMin,
            });

            const collaboratorId = data.collaborator.connect?.id;
            if (!collaboratorId) {
                throw new Error('Collaborator is required');
            }

            await collaboratorRepository.incrementCounters(
                collaboratorId,
                data.is_rework
            );

            await collaboratorScoreService.recalculateDailyScore(
                collaboratorId,
                start
            );

            return order;
        }
    );
  },


    getOrderById(id: number) {
        return runWithCheck(
            id,
            'Id is required',
            'Failed to get Order',
            () => orderRepository.getById(id)
        )
    },

    async getOrdersByDate(start: Date, end: Date) {
       return runWithCheck(
        [start, end],
        'Start and end dates are required',
        'Failed to fetch orders',
        () => orderRepository.findByDateRange(start, end)
  );
    },

    deleteOrder(id: number) {
        return runWithCheck(
            id,
            'Id is required',
            'Failed to delete order',
            () => orderRepository.delete(id)
        )
    }
}