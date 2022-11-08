import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeRatingDetailService } from './coffee-rating-detail.service';

describe('CoffeeRatingDetailService', () => {
  let service: CoffeeRatingDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeRatingDetailService],
    }).compile();

    service = module.get<CoffeeRatingDetailService>(CoffeeRatingDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
