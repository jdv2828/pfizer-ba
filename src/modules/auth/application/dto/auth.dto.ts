import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class Credentials {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Password' })
  readonly password: string;
}
