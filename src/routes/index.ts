import express from 'express';
import { authRouter } from './authRouter';

const mainRouter = express.Router();

mainRouter.use('/', authRouter);

export default mainRouter;