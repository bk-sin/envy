import { Module } from '@nestjs/common';
import { BetaController } from './beta.controller';
import { BetaService } from './beta.service';
import { PrismaModule } from '../prisma/prisma.module';
import { ResendModule } from '../resend/resend.module';

@Module({
  imports: [PrismaModule, ResendModule],
  controllers: [BetaController],
  providers: [BetaService],
  exports: [BetaService],
})
export class BetaModule {}
