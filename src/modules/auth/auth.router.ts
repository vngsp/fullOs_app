import { Router } from 'express';
import passport from 'passport';
import { loginController, registerController } from './auth.controller';
import { googleCallbackHandler } from './auth.handlers';

export const authRouter = Router();

authRouter.post('/register', registerController);
authRouter.post('/login', loginController);

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })
);

authRouter.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  googleCallbackHandler
);
