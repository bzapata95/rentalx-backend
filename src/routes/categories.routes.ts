import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', async (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = await categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'category already exists' });
  }

  const category = await categoriesRepository.create({ name, description });

  return response.status(201).json(category);
});

categoriesRouter.get('/', async (request, response) => {
  const categories = await categoriesRepository.list();

  return response.json(categories);
});

export { categoriesRouter };
