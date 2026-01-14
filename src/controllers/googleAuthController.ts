import { Request, Response } from 'express';

export const googleAuthCallback = (req: Request, res: Response) => {
  res.redirect('/profile');
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
