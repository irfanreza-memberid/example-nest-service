import { Test, TestingModule } from '@nestjs/testing';
import { RollbackController } from './rollback.controller';

describe('RollbackController', () => {
  let controller: RollbackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RollbackController],
    }).compile();

    controller = module.get<RollbackController>(RollbackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
