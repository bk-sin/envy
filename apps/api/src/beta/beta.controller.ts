import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { BetaService } from './beta.service';
import { SubscribeToBetaDto } from './dto/subscribe-to-beta.dto';
import { IsPublic } from '../auth/decorators/public.decorator';

@Controller('api/beta')
export class BetaController {
  constructor(private readonly betaService: BetaService) {}

  @Post('subscribe')
  @HttpCode(HttpStatus.OK)
  @IsPublic()
  async subscribe(@Body() subscribeToBetaDto: SubscribeToBetaDto) {
    return await this.betaService.subscribe(subscribeToBetaDto.email);
  }
}
