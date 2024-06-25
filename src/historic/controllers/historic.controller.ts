import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { HistoricService } from '../services/historic.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('historic')
export class HistoricController {
  constructor(private readonly historicService: HistoricService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getHistoric(@Req() req) {
    return this.historicService.findByUser(req.user.id);
  }
}
