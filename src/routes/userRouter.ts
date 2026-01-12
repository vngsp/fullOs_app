import express from 'express';
import { deleteUserController, updateUserEmailController } from '../controllers/usersController';

export const userRouter = express.Router();

userRouter.delete('/delete', deleteUserController);
userRouter.put('/:id/email', updateUserEmailController);