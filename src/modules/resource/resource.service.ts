import runWithCheck from "../../utils/runWithCheck";
import { resourceRepository } from "./resource.repository";

export const resourceService = {
    async createResource(resourceNumber: number) {
        return runWithCheck(
            resourceNumber,
            'Resource number is required',
            'Failed to create resource',
            () => resourceRepository.create({resource_number: resourceNumber})
        )
    },

    async deleteResource(id: number) {
        return runWithCheck(
            id,
            'Id is required',
            'Failed to delete resource',
            () => resourceRepository.delete(id)
        )
    },

    async updateResource(id: number, resourceNumber: number) {
        return runWithCheck(
            [id, resourceNumber],
            'Id and resource number is required',
            'Failed to update resource',
            () => resourceRepository.updateNumber( id, resourceNumber )
        )
    },

    async getResourceById(id: number) {
        return runWithCheck(
            id,
            'Id is required',
            'Failed to read resource',
            () => resourceRepository.getById(id)
        )
    }
}