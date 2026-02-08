import { RequestHandler } from "express";
import { resourceService } from "./resource.service";

export const createResourceController: RequestHandler = async (req, res) => {
    const { resource_number } = req.body;
    const createdResource = await resourceService.createResource(resource_number);
    return res.status(201).json(createdResource);
}

export const deleteResourceController: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
    const deletedUser = await resourceService.deleteResource(id);
    return res.status(200).json(deletedUser);
}

export const updateResourceNumberController: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
    const { resource_number } = req.body;
    const updatedUser = await resourceService.updateResource(id, resource_number);
    return res.status(200).json(updatedUser);
}

export const getResourceByIdController: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
    const user = await resourceService.getResourceById(id);
    return res.status(200).json(user);
}