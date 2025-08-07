import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { IsPublic } from './decorators/public.decorator';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({
    summary: 'User login',
    description: 'Authenticate a user and return JWT token',
  })
  @ApiBody({
    type: LoginDto,
    examples: {
      owner: {
        summary: 'Owner Login',
        description: 'Login as an owner user',
        value: {
          email: 'owner@test.com',
          password: 'owner123',
        },
      },
      admin: {
        summary: 'Admin Login',
        description: 'Login as an admin user',
        value: {
          email: 'admin@test.com',
          password: 'admin123',
        },
      },
      developer: {
        summary: 'Developer Login',
        description: 'Login as a developer user',
        value: {
          email: 'developer@test.com',
          password: 'developer123',
        },
      },
    },
  })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @IsPublic()
  @Post('register')
  @ApiOperation({
    summary: 'User registration',
    description: 'Register a new user account',
  })
  @ApiBody({
    type: RegisterDto,
    examples: {
      user: {
        summary: 'Register as User',
        description: 'Register a new user account',
        value: {
          firstName: 'Ana',
          lastName: 'López',
          email: 'ana.lopez@email.com',
          password: 'password123',
        },
      },
    },
  })
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
