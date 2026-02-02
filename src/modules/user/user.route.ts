import express from 'express';
import { deleteUserController, getMeController, updateUserEmailController } from './user.controller';
import { authToken } from '../../middlewares/authToken';

export const userRouter = express.Router();

userRouter.delete('/delete', deleteUserController);
userRouter.put('/:id/email', updateUserEmailController);
userRouter.get('/me', authToken, getMeController);