import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistsException extends HttpException {
  constructor(message: string) {
    super(
      {
        status: `El usuario con el email ${message} ya existe`,
        code: HttpStatus.CONFLICT,
      },
      HttpStatus.CONFLICT,
    );
  }
}
