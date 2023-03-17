import {
  headersDto,
  payloadDto,
} from '@src/modules/user/apllication/dto/Auth.dto';
import jwt_decode from 'jwt-decode';

export function tokenExtract(headers: headersDto): string {
  const bearerToken: string = headers.authorization;
  const token: string = bearerToken.split(' ')[1];
  return token;
}

export function tokenDecode(token: string) {
  const payload: payloadDto = jwt_decode(token);
  return payload;
}
