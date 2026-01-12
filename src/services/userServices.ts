import { prisma } from "../lib/prisma";

export const deleteUser = async (id: number) => {
    if(!id) {
        throw new Error("Email and password is required");
    }

    const deletedUser = await prisma.users.delete({
        where: {
           id,
        },
        select: {
            id: true,
            email: true,
        }
    })

    return deletedUser;
}

export const updateUserEmail = async (id: number, email: string) => {
    return await prisma.users.update({
        where: {
            id,
        },
        data: {
            email,
        },
        select: {
            id: true,
            email: true
        }
    })
}