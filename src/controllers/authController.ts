import { RequestHandler } from "express";
import { AuthUserService, createUserService } from "../services/authServices";

export const registerController: RequestHandler = async (req, res ) => {
    try {
        const { email, password } = req.body;
        const newUser = await createUserService({ email, password });

        res.status(201).json(newUser);
    } catch(error: any) {
        res.status(400).json({error: error.message});
    }
}

export const loginController: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        const passMatch = await AuthUserService({email, password});

        res.status(200).json(passMatch);
    } catch(error: any) {
        res.status(400).json({error: error.message})
    }
}