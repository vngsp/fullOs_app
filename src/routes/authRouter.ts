import express from 'express'
import { loginController, registerController } from '../controllers/authController';
import session from 'express-session';
import { validate } from '../middlewares/validate';
import { LoginSchema } from '../schemas/loginSchema';
import passport from 'passport';
import { googleAuthCallback, logoutController, profileController } from '../controllers/googleAuthController';
import { GoogleAuthService } from '../services/googleAuthService';

export const authRouter = express.Router();
GoogleAuthService.initialize();

authRouter.post('/register', registerController);
authRouter.post('/login', validate(LoginSchema) ,loginController);

authRouter.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
    })
);

authRouter.use(passport.initialize());
authRouter.use(passport.session());

authRouter.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

authRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  googleAuthCallback
);

authRouter.get('/profile', profileController);
authRouter.get('/logout', logoutController);