import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { userRepository } from '../modules/user/user.repository';

export const setupPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        callbackURL: 'https://fullos-app.onrender.com/auth/google/callback',
      },
      async (_accessToken, _refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value;
          if (!email) return done(null, false);

          let user = await userRepository.findByEmail(email);

          if (!user) {
            user = await userRepository.create(email, 'GOOGLE_AUTH');
          }

          const passportUser: Express.User = {
            id: user.id,
            email: user.email,
          };

          return done(null, passportUser);
        } catch (err) {
          return done(err as Error);
        }
      }
    )
  );

  passport.serializeUser((user: Express.User, done) => {
    done(null, user);
  });

  passport.deserializeUser((user:Express.User, done) => {
    done(null, user);
  });
};
