import { Controller, UseInterceptors } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientMicroserviceInterceptor } from 'src/interceptors/client-microservice.interceptor';
import { RollbackService } from './rollback.service';

@Controller('rollback')
export class RollbackController {
  constructor(private readonly rollbackService: RollbackService) {}

  @MessagePattern('rollback')
  @UseInterceptors(ClientMicroserviceInterceptor)
  async rollback(@Payload() message: any): Promise<boolean> {
    return await this.rollbackService.rollback(message.body);
  }
}
