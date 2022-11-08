import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { ClientMicroserviceInterceptor } from 'src/interceptors/client-microservice.interceptor';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}
  // @Get()
  // async getCoffee(): Promise<number> {
  //   const find = await this.coffeeService.findAll()

  // }

  @MessagePattern('get.test', Transport.REDIS)
  async killDragon(@Payload() message: any) {
    // await this.delay(6000);
    const items = [
      { id: 1, name: 'Mythical Sword' },
      { id: 2, name: 'Key to Dungeon' },
    ];
    return items;
  }

  @MessagePattern('create.coffee')
  @UseInterceptors(ClientMicroserviceInterceptor)
  async createCoffee(@Payload() message: any) {
    return await this.coffeeService.createCoffee(message.body.memberId);
  }

  async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
