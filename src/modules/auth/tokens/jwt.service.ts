// modules/auth/jwtTokenService.ts
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../../configs/jwt';

const REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || 'refresh_secret';

export const jwtService = {
  generateAccessToken(userId: number) {
    return jwt.sign({ id: userId }, JWT_SECRET, {
      expiresIn: '15m',
    });
  },

  generateRefreshToken(userId: number) {
    return jwt.sign({ id: userId }, REFRESH_SECRET, {
      expiresIn: '7d',
    });
  },
};
