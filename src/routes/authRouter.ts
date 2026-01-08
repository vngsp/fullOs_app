import express from 'express'
import { loginController, registerController } from '../controllers/authServicesController';
import { validate } from '../middlewares/validate';
import { LoginSchema } from '../schemas/loginSchema';

export const authRouter = express.Router();

authRouter.use('/register', registerController);
authRouter.use('/login', validate(LoginSchema) ,loginController);