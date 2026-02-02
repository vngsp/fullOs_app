import { Router } from 'express';
import passport from 'passport';
import { googleCallbackController } from './google.controller';

const googleRouter = Router();

googleRouter.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

googleRouter.get(
  '/callback',
  passport.authenticate('google', {
    session: false,
  }),
  googleCallbackController
);

export { googleRouter };