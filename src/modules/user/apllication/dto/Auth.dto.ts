import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
export class payloadDto {
  @IsNotEmpty()
  @IsString()
  iss: string;

  @IsNotEmpty()
  aud: string[];

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  sub: string;
}

export class headersDto {
  @IsNotEmpty()
  @IsString()
  authorization: string;
}
