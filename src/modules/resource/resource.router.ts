import express from 'express';
import { createResourceController, deleteResourceController, getResourceByIdController, updateResourceNumberController } from './resource.controller';

export const resourceRouter = express.Router();

resourceRouter.post('/create', createResourceController);
resourceRouter.delete('/delete/:id', deleteResourceController);
resourceRouter.put('/update/:id', updateResourceNumberController);
resourceRouter.get('/read/:id', getResourceByIdController);