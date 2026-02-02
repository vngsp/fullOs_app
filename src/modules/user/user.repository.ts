import { Prisma } from '../../../generated/prisma/client';
import { prisma } from '../../lib/prisma';

export const userRepository = {
  create(data: Prisma.UsersCreateInput) {
    return prisma.users.create({
      data,
      select: {
        id: true,
        email: true,
      },
    });
  },

  deleteById(id: number) {
    return prisma.users.delete({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
      },
    });
  },

  updateEmail(id: number, email: string) {
    return prisma.users.update({
      where: {
        id,
      },
      data: {
        email,
      },
      select: {
        id: true,
        email: true,
      },
    });
  },

  findById(id: number) {
    return prisma.users.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
      },
    });
  },

  findByEmail(email: string) {
    return prisma.users.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
      },
    });
  },
};
