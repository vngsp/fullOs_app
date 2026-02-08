import { Prisma } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

export const orderRepository = {
    create(data: Prisma.OrdersCreateInput) {
        return prisma.orders.create({
        data,
        select: {
            collaborator_id: true,
            collaborator: true,
            resource: true,
            start_datetime: true,
            end_datetime: true,
            duration_min: true,
        },
        });
  },

    getById(id: number) {
        return prisma.orders.findUnique({
            where: {
                id,
            }
        })
    },

    findByDateRange(start: Date, end: Date) {
        return prisma.orders.findMany({
        where: {
            start_datetime: {
            gte: start,
            lte: end,
            },
        },
        });
    },

    findByCollaboratorAndDate(collaboratorId: number, date: Date) {
        const start = new Date(date);
        start.setHours(0, 0, 0, 0);

        const end = new Date(date);
        end.setHours(23, 59, 59, 999);

        return prisma.orders.findMany({
            where: {
            collaborator_id: collaboratorId,
            start_datetime: {
                gte: start,
                lte: end,
            },
            },
        });
    },

    delete(id: number) {
        return prisma.orders.delete({
            where:{
                id,
            },
            select: {
                id: true,
                resource: true,
            }
        })
    },
}