import { Request, Response } from 'express';
import { jwtService } from '../services/jwtTokenService';

export const googleAuthCallback = (req: Request, res: Response) => {
  const user = req.user as any;

  const userId = user.id;

  const accessToken = jwtService.generateAccessToken(userId);
  const refreshToken = jwtService.generateRefreshToken(userId);

  res.redirect(
    `http://localhost:3000/home` +
    `?accessToken=${accessToken}&refreshToken=${refreshToken}`
  );
};

export const profileController = (req: Request, res: Response) => {
  const user = req.user as Express.User;
  res.status(200).json({ message: "Success" });
};

export const logoutController = (req: Request, res: Response) => {
  req.logOut(() => {
    res.redirect('/');
  });
};
