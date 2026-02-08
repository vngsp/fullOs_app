import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

export const resourceRepository = {
    create(data: Prisma.ResourcesCreateInput) {
        return prisma.resources.create({
            data,
            select: {
                id:true,
                resource_number: true,
            }
        })
    },

    delete(id: number) {
        return prisma.resources.delete({
            where: {
                id,
            }
        })
    },

    updateNumber(id: number, resourceNumber: number) {
        return prisma.resources.update({
            where: {
                id,
            },
            data: {
                resource_number: resourceNumber
            },
            select: {
                id: true,
                resource_number: true
            }
        })
    },

    getById(id: number) {
        return prisma.resources.findUnique({
            where: {
                id,
            }
        })
    }
}