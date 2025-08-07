import { UserResponseWithPassword } from 'src/users/users.service';

export class LoginResponseDto {
  id: string;
  email: string;
  role: string;
  access_token: string;
  firstName?: string;
  lastName?: string;

  constructor(user: UserResponseWithPassword, access_token: string) {
    this.id = user.id;
    this.email = user.email;
    this.access_token = access_token;
  }
}
