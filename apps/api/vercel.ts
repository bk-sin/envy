import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { INestApplication } from '@nestjs/common';

let app: INestApplication;

async function bootstrap(): Promise<INestApplication> {
  if (!app) {
    try {
      app = await NestFactory.create(AppModule);
      app.enableCors({
        origin: true,
        credentials: true,
      });
      await app.init();
      console.log('NestJS app initialized successfully');
    } catch (error) {
      console.error('Failed to create NestJS app:', error);
      throw error;
    }
  }
  return app;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const server = await bootstrap();
    const httpAdapter = server.getHttpAdapter();
    const instance = httpAdapter.getInstance();
    
    // Ensure Express handles the request properly
    return new Promise<void>((resolve, reject) => {
      instance(req, res, (err: any) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  } catch (error) {
    console.error('Vercel function error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
