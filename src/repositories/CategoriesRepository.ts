import { Category } from '../models/Category';

interface IRequest {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  public async create({ name, description }: IRequest): Promise<Category> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);

    return category;
  }

  public async list(): Promise<Category[]> {
    return this.categories;
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find(
      category => category.name.toLowerCase() === name.toLowerCase(),
    );
    return category;
  }
}

export { CategoriesRepository };
