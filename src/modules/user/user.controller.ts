import { RequestHandler } from 'express';
import { userService } from './user.service';

export const createUserController: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const createdUser = await userService.createUser(email, password);
  return res.status(201).json(createdUser);
}

export const deleteUserController: RequestHandler = async (req, res) => {
  const  id  = Number(req.params.id);
  const deletedUser = await userService.deleteUser(id);
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

export const getUserByEmailController: RequestHandler = async (req, res) => {
  const { email } = req.body;
  const user = await userService.getUserByEmail(email);
  return res.status(200).json(user);
}
