import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeDetailController } from './coffee-detail.controller';

describe('CoffeeDetailController', () => {
  let controller: CoffeeDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeDetailController],
    }).compile();

    controller = module.get<CoffeeDetailController>(CoffeeDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
