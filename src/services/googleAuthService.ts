import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';

export class GoogleAuthService {
  static initialize() {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          callbackURL: 'http://localhost:1000/auth/google/callback',
        },
        (accessToken, refreshToken, profile: Profile, done) => {
          return done(null, profile as Express.User);
        }
      )
    );

    passport.serializeUser((user: Express.User, done) => done(null, user));
    passport.deserializeUser((user: Express.User, done) => done(null, user));
  }
}
