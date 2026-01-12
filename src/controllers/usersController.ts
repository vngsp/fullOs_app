import { RequestHandler } from "express";
import { deleteUser, updateUserEmail } from "../services/userServices";

export const deleteUserController: RequestHandler = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedUser = await deleteUser(id);

        return res.status(201).json(deletedUser);
    } catch(error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const updateUserEmailController: RequestHandler = async (req, res) => {
    try {
       const id = Number(req.params.id);
       const { email } = req.body;

       if(!id || !email) {
        return res.status(400).json({ error: "Id and email are required" });
       }

       const modifiedEmail = await updateUserEmail(id, email)

        return res.status(200).json(modifiedEmail);
    } catch(error: any) {
        res.status(400).json({ error: error.message });
    }
}