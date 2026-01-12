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

export const getMe = async (userId: number) => {
    const user = await prisma.users.findUnique({
        where: { id: userId },
        select: { id: true, email: true }
    });

    if(!user) {
        throw new Error("User not found");
    }

    return user;
}