import { RequestHandler } from 'express';
import { userService } from './user.service';

export const deleteUserController: RequestHandler = async (req, res) => {
  const { id } = req.body;
  const deletedUser = await userService.deleteUser(Number(id));
  return res.status(200).json(deletedUser);
};

export const updateUserEmailController: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);
  const { email } = req.body;

  const updatedUser = await userService.updateUserEmail(id, email);
  return res.status(200).json(updatedUser);
};

export const getMeController: RequestHandler = async (req, res) => {
  const userId = req.user!.id;
  const user = await userService.getMe(userId);
  return res.status(200).json(user);
};
