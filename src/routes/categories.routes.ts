import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', async (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  const category = await createCategoryService.execute({ name, description });

  return response.status(201).json(category);
});

categoriesRouter.get('/', async (request, response) => {
  const categories = await categoriesRepository.list();

  return response.json(categories);
});

export { categoriesRouter };
