import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeDetailService } from './coffee-detail.service';

describe('CoffeeDetailService', () => {
  let service: CoffeeDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeDetailService],
    }).compile();

    service = module.get<CoffeeDetailService>(CoffeeDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
