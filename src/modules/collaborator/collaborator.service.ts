import runWithCheck from "../../utils/runWithCheck";
import { collaboratorRepository } from "./collaborator.repository";

export const collaboratorService = {
    async createCollaborator(name: string) {
        return runWithCheck(
            name,
            'Name is required',
            'Failed to create Collaborator',
            () => collaboratorRepository.create({ name })
        )
    },

    async deleteCollaborator(id: number) {
        return runWithCheck(
            id,
            'Id is required',
            'Failed to delete Collaborator',
            () => collaboratorRepository.deleteById(id)
        )
    },

    async updateCollaboratorName(id: number, name: string) {
        return runWithCheck(
            id,
            'You are missing ID or name',
            'Failed to update Collaborator name',
            () => collaboratorRepository.updateName(id, name)
        )
    },

    async findCollaboratorById(id: number) {
        return runWithCheck(
            id,
            'Id is required',
            'Failed to find Collaborator',
            () => collaboratorRepository.findById(id)
        )
    }
}