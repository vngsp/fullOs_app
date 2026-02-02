import { RequestHandler } from "express";
import { collaboratorService } from "./collaborator.service";

export const createCollaboratorController: RequestHandler = async (req, res) => {
    const { name } = req.body;
    const createdUser = await collaboratorService.createCollaborator(name);
    return res.status(200).json(createdUser);
}

export const deleteCollaboratorController: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
    const deletedUser = await collaboratorService.deleteCollaborator(id);
    return res.status(200).json(deletedUser);
}

export const updateCollaboratorNameController: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
    const { name } = req.body;
    const updatedUser = await collaboratorService.updateCollaboratorName(id, name);
    return res.status(200).json(updatedUser);
}

export const findCollaboratorController: RequestHandler = async (req, res) => {
    const { id } = req.body;
    const user = await collaboratorService.findCollaboratorById(id);
    return res.status(200).json(user);
}