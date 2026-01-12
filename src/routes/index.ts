import express from 'express';
import { authRouter } from './authRouter';
import { userRouter } from './userRouter';

const mainRouter = express.Router();

mainRouter.use('/', authRouter);
mainRouter.use('/', userRouter);

export default mainRouter;