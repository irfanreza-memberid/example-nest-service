import { Injectable } from '@nestjs/common';
import { CoffeeRatingService } from '../coffee-rating/coffee-rating.service';

@Injectable()
export class CoffeeRatingDetailService {
  constructor() // private readonly coffeeRatingService: CoffeeRatingService
  {}
}
