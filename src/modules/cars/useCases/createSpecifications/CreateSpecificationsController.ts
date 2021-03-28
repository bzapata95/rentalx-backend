import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationsController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const specification = await this.createSpecificationUseCase.execute({
      name,
      description,
    });

    return response.status(201).json(specification);
  }
}
