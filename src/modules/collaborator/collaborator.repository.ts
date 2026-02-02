import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma"

export const collaboratoRepository = {
    create(data: Prisma.CollaboratorsCreateInput) {
        return prisma.collaborators.create({
            data,
        });
    },

    deleteById(id:number) {
        return prisma.collaborators.delete({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
            }
        })
    },

    updateName(id: number, name: string) {
        return prisma.collaborators.update({
            where: {
                id,
            },
            data: {
                name,
            },
            select: {
                name: true,
                id: true,
            }
        })
    },

    findById(id: number) {
        return prisma.collaborators.findUnique({
            where: {
                id,
            },
        })
    }
}