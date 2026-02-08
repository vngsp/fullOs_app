import { Router } from 'express';
import { userRouter } from '../modules/user/user.router';
import { authRouter } from '../modules/auth/auth.router';
import { collaboratorRouter } from '../modules/collaborator/collaborator.router';
import { resourceRouter } from '../modules/resource/resource.router';
import { orderRouter } from '../modules/order/order.router';

export const mainRouter = Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/users', userRouter);
mainRouter.use('/collaborator', collaboratorRouter);
mainRouter.use('/resource', resourceRouter);
mainRouter.use('/order', orderRouter);