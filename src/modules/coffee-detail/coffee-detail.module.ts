import { Module } from '@nestjs/common';
import { CoffeeDetailService } from './coffee-detail.service';
import { CoffeeDetailController } from './coffee-detail.controller';

@Module({
  providers: [CoffeeDetailService],
  controllers: [CoffeeDetailController],
})
export class CoffeeDetailModule {}
