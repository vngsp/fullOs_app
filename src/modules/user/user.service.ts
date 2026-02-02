import { userRepository } from './user.repository';

export const userService = {
  async deleteUser(id: number) {
    if (!id) throw new Error('User id is required');
    return userRepository.deleteById(id);
  },

  async updateUserEmail(id: number, email: string) {
    if (!email) throw new Error('Email is required');
    return userRepository.updateEmail(id, email);
  },

  async getMe(userId: number) {
    const user = await userRepository.findById(userId);
    if (!user) throw new Error('User not found');
    return user;
  },
};
