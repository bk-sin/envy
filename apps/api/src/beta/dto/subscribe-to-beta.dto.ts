import { IsEmail, IsNotEmpty } from 'class-validator';

export class SubscribeToBetaDto {
  @IsEmail({}, { message: 'Por favor proporciona un email válido' })
  @IsNotEmpty({ message: 'El email es requerido' })
  email!: string;
}
