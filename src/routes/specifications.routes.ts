import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecifications';

const specificationsRouter = Router();

specificationsRouter.post('/', async (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRouter };
