import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingDetailModule } from '../coffee-rating-detail/coffee-rating-detail.module';
import { CoffeeRatingModule } from '../coffee-rating/coffee-rating.module';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { Coffee } from './entities/coffee.entity';

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService],
  exports: [CoffeeService],
  imports: [
    forwardRef(() => CoffeeRatingModule),
    forwardRef(() => CoffeeRatingDetailModule),
    TypeOrmModule.forFeature([Coffee]),
  ],
})
export class CoffeeModule {}
