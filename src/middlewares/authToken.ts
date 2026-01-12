import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { JWT_SECRET } from "../configs/jwt";

export const authToken: RequestHandler = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if(!token) {
        return res.sendStatus(401);
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as {id: number};
        req.user = { id: decoded.id };
        return next();
    } catch(error: any){
        return res.status(401).json({ error: error });
    }
}