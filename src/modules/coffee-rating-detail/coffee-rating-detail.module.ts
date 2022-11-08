import { forwardRef, Module } from '@nestjs/common';
import { CoffeeRatingModule } from '../coffee-rating/coffee-rating.module';
import { CoffeeModule } from '../coffee/coffee.module';
import { CoffeeRatingDetailService } from './coffee-rating-detail.service';

@Module({
  imports: [
    forwardRef(() => CoffeeRatingModule),
    forwardRef(() => CoffeeModule),
  ],
  providers: [CoffeeRatingDetailService],
  exports: [CoffeeRatingDetailService],
})
export class CoffeeRatingDetailModule {}
