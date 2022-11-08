import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity';

export interface IMicroserviceResponse<T> {
  id: number;
  entity: string;
  data: T;
}

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepo: Repository<Coffee>,
    private readonly dataSource: DataSource,
  ) {}
  async findAll(): Promise<string> {
    return 'FindAll Coffee';
  }

  findTest(): { name: string; id: number } {
    return {
      id: 1,
      name: 'test',
    };
  }

  async createCoffee(memberId: number): Promise<IMicroserviceResponse<Coffee>> {
    const transaction = this.dataSource.createQueryRunner();
    await transaction.startTransaction();
    const entityManager = transaction.manager;
    try {
      const insert = await entityManager.save(
        Coffee,
        this.coffeeRepo.create({ memberId }),
      );
      // throw new BadRequestException('error create coffee');
      transaction.commitTransaction();
      return {
        id: insert.id,
        entity: Coffee.name,
        data: insert,
      };
    } catch (error) {
      transaction.rollbackTransaction();
      return null;
    }
  }
}
