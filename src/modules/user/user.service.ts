import runWithCheck from "../../utils/runWithCheck";
import { userRepository } from "./user.repository";

export const userService = {
  async createUser(email: string, password: string) {
    return runWithCheck(
      [email, password],
      'Email and password are required',
      'Failed to create user',
      () => userRepository.create({ email, password })
    );
  },

  async deleteUser(id: number) {
    return runWithCheck(
      id,
      'User id is required',
      'Failed to delete user',
      () => userRepository.deleteById(id)
    );
  },

  async updateUserEmail(id: number, email: string) {
    return runWithCheck(
      [id, email],
      'Id and email are required',
      'Failed to update user email',
      () => userRepository.updateEmail(id, email)
    );
  },

  async getMe(userId: number) {
    return runWithCheck(
      userId,
      'User id is required',
      'Failed to get user',
      () => userRepository.findById(userId)
    );
  },

  async getUserByEmail(email: string) {
    return runWithCheck(
      email,
      'Email is required',
      'Failed to get user by email',
      () => userRepository.findByEmail(email)
    );
  }
};
