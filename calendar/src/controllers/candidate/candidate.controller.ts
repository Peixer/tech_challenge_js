import { CalendarioService } from '@app/core/calendar/services/calendario.service';
import { Body, Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly calendarioService: CalendarioService) {}

  @Get(':id')
  async get(@Req() request: Request) {
    return await this.calendarioService.find(request.params.id);
  }

  @Post()
  async post(@Req() request: Request, @Body() body: any) {
    return await this.calendarioService.create(body);
  }

  @Put(':id')
  async put(@Req() request: Request, @Body() body: any) {
    return await this.calendarioService.update(request.params.id, body);
  }

  @Delete(':id')
  async delete(@Req() request: Request): Promise<void> {
    await this.calendarioService.remove(request.params.id);
  }
}
