import runWithCheck from "../../utils/runWithCheck";
import { collaboratoRepository } from "./collaborator.repository";

export const collaboratorService = {
    async createCollaborator(name: string) {
        return runWithCheck(
            name,
            'Name is required',
            'Failed to create Collaborator',
            () => collaboratoRepository.create({ name })
        )
    },

    async deleteCollaborator(id: number) {
        return runWithCheck(
            id,
            'Id is required',
            'Failed to delete Collaborator',
            () => collaboratoRepository.deleteById(id)
        )
    },

    async updateCollaboratorName(id: number, name: string) {
        return runWithCheck(
            id,
            'You are missing ID or name',
            'Failed to update Collaborator name',
            () => collaboratoRepository.updateName(id, name)
        )
    },

    async findCollaboratorById(id: number) {
        return runWithCheck(
            id,
            'Id is required',
            'Failed to find Collaborator',
            () => collaboratoRepository.findById(id)
        )
    }
}