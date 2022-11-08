import { Module } from '@nestjs/common';
import { RollbackController } from './rollback.controller';
import { RollbackService } from './rollback.service';

@Module({
  controllers: [RollbackController],
  providers: [RollbackService],
})
export class RollbackModule {}
