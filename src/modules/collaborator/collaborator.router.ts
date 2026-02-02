import express from 'express'
import { createCollaboratorController, deleteCollaboratorController, findCollaboratorController, updateCollaboratorNameController } from './collaborator.controller';

export const collaboratorRouter = express.Router();

collaboratorRouter.post('/create', createCollaboratorController);
collaboratorRouter.delete('/delete/:id', deleteCollaboratorController);
collaboratorRouter.put('/update/:id', updateCollaboratorNameController);
collaboratorRouter.get('/read', findCollaboratorController);
