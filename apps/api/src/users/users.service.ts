import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

export type UserResponse = Prisma.UserGetPayload<{
  include: typeof userInclude;
  omit: { password: true };
}>;

export type UserResponseWithPassword = Prisma.UserGetPayload<{
  include: typeof userInclude;
}>;

const userInclude = {
  projectMemberships: {
    include: {
      project: true,
    },
  },
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
      include: userInclude,
    });
  }

  async findOne(id: string): Promise<UserResponse | null> {
    const user = this.prisma.user.findUnique({
      where: { id },
      include: userInclude,
      omit: { password: true },
    });
    return user;
  }

  async findOneByEmail(
    email: string,
  ): Promise<UserResponseWithPassword | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: userInclude,
    });
    console.log(user);
    return user;
  }

  /*   async findAll(): Promise<UserResponse[]> {
    return this.prisma.user.findMany({
      include: userInclude,
      omit: { password: true },
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  

  

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponse> {
    return await this.prisma.user.update({
      where: { id },
      data: {
        firstName: updateUserDto?.firstName,
        lastName: updateUserDto?.lastName,
        phone: updateUserDto?.phone,
      },
      include: userInclude,
      omit: { password: true },
    });
  }

  async remove(id: number): Promise<boolean> {
    const userToDelete = await this.prisma.user.findUnique({
      where: { id },
      include: {
        role: true,
      },
    });

    if (!userToDelete) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    if (isSuperAdmin(userToDelete)) {
      throw new ForbiddenException(
        'Cannot delete superadmin user for security reasons',
      );
    }

    await this.prisma.user.delete({
      where: { id },
    });
    return true;
  } */
}
