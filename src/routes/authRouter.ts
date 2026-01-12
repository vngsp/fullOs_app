import express from 'express'
import { loginController, registerController } from '../controllers/authController';
import { validate } from '../middlewares/validate';
import { LoginSchema } from '../schemas/loginSchema';

export const authRouter = express.Router();

authRouter.post('/register', registerController);
authRouter.post('/login', validate(LoginSchema) ,loginController);