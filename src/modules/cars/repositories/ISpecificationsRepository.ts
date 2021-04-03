import { Specification } from '../entities/Specification';

export interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  create(data: ICreateSpecificationsDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification | undefined>;
}
