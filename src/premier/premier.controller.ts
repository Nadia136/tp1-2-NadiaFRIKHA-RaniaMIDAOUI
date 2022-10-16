import { Controller, Get, Post, Delete, Patch, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get('get')
  getHello(): string {
    return this.getHello();
  }

  @Post()
  postHello(): string {
    return this.postHello();
  }
  @Delete()
  deleteHello(): string {
    return this.deleteHello();
  }

  @Put()
  updateHello(): string {
    return this.updateHello();
  }

  @Patch()
  patchHello(): string {
    return this.patchHello();
  }
}
