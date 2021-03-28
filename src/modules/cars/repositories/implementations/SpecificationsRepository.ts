import { Specification } from '../../models/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationsDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  public async create({
    name,
    description,
  }: ICreateSpecificationsDTO): Promise<Specification> {
    const specification = new Specification();

    const data = {
      name,
      description,
      created_at: new Date(),
    };

    Object.assign(specification, data);
    this.specifications.push(data);

    return data;
  }

  public async findByName(name: string): Promise<Specification | undefined> {
    const specification = this.specifications.find(
      specification => specification.name.toLowerCase() === name.toLowerCase(),
    );

    return specification;
  }
}

export { SpecificationsRepository };
