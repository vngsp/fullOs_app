import { RequestHandler } from 'express';
import { jwtService } from './tokens/jwt.service';

export const googleCallbackHandler: RequestHandler = (req, res) => {
  const user = req.user as Express.User;

  if (!user) {
    return res.status(400).json({ error: 'Google login failed' });
  }

  const accessToken = jwtService.generateAccessToken(user.id);
  const refreshToken = jwtService.generateRefreshToken(user.id);

  return res.json({
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email,
    },
  });
};