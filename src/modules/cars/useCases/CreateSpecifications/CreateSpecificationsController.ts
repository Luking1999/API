import { Request, Response } from "express";
import { CreateSpecificationUseCases } from "./CreateSpecificationUseCase";


class CreateSpecificationsController {
    constructor(private createSpecificationUseCases: CreateSpecificationUseCases) { }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body
        this.createSpecificationUseCases.execute({ name, description })

        return response.status(201).send();
    }

}

export { CreateSpecificationsController }