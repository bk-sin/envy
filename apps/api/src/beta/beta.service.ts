import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ResendService } from '../resend/resend.service';

@Injectable()
export class BetaService {
  private readonly logger = new Logger(BetaService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly resendService: ResendService,
  ) {}

  async subscribe(email: string) {
    try {
      const existingSubscription =
        await this.prisma.betaSubscription.findUnique({
          where: { email },
        });

      if (existingSubscription) {
        throw new BadRequestException(
          'Este email ya está registrado en la beta',
        );
      }

      const subscription = await this.prisma.betaSubscription.create({
        data: {
          email,
          subscribedAt: new Date(),
        },
      });

      this.resendService
        .sendBetaWelcomeEmail(email)
        .then(() => {
          this.logger.log(`Welcome email sent to ${email}`);
        })
        .catch((error) => {
          this.logger.error(`Failed to send welcome email to ${email}:`, error);
        });

      this.resendService
        .sendInternalNotification(email)
        .then(() => {
          this.logger.log(`Internal notification sent for ${email}`);
        })
        .catch((error) => {
          this.logger.error(
            `Failed to send internal notification for ${email}:`,
            error,
          );
        });

      return {
        message: 'Te has suscrito exitosamente a la beta',
        email: subscription.email,
        subscribedAt: subscription.subscribedAt,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      this.logger.error('Error subscribing to beta:', error);
      throw new BadRequestException('Error al procesar la suscripción');
    }
  }
}
