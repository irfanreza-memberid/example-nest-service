import { Injectable } from '@nestjs/common';
import { CoffeeService } from '../coffee/coffee.service';
@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeeService: CoffeeService) {}

  async findAll(): Promise<string> {
    return this.coffeeService.findAll();
  }
}
