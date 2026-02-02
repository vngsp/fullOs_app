import { Request, Response } from 'express';
import { jwtService } from '../tokens/jwt.service';

export const googleCallbackController = (
  req: Request,
  res: Response
) => {
  const userId = 1;

  const accessToken =
    jwtService.generateAccessToken(userId);
  const refreshToken =
    jwtService.generateRefreshToken(userId);

  return res.redirect(
    `https://fullos-app.onrender.com/home` +
      `?accessToken=${accessToken}` +
      `&refreshToken=${refreshToken}`
  );
};
