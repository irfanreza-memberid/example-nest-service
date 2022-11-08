import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class RollbackService {
  constructor(private readonly dataSource: DataSource) {}

  async rollback(message: any[]): Promise<boolean> {
    for (const item of message) {
      await this.dataSource
        .createEntityManager()
        .getRepository(item.entity)
        .delete({ id: item.id });
    }
    return true;
  }
}
