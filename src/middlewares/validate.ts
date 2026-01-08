import { NextFunction, Response, Request } from "express";
import { ZodType } from "zod";

export const validate = (schema: ZodType<unknown>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.errors });
      }
      res.status(400).json({ error: error.message });
    }
  };
};