import { RequestHandler } from 'express';
import {AuthUserService, createUserService,} from './auth.service';

export const registerController: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await createUserService({ email, password });
    return res.status(201).json(user);
  } catch (error: any) {
    const isMailError =
      error.message === 'Este e-mail já está em uso';
    return res
      .status(isMailError ? 409 : 400)
      .json({ message: error.message });
  }
};

export const loginController: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await AuthUserService({ email, password });
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
