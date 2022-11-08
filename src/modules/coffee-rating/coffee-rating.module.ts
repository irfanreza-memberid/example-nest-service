import { forwardRef, Module } from '@nestjs/common';
import { CoffeeModule } from 'src/modules/coffee/coffee.module';
import { CoffeeRatingDetailModule } from '../coffee-rating-detail/coffee-rating-detail.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    forwardRef(() => CoffeeModule),
    forwardRef(() => CoffeeRatingDetailModule),
  ],
  providers: [CoffeeRatingService],
  exports: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
