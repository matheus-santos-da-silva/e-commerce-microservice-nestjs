import { UnauthorizedException } from '@nestjs/common';
import { verify } from 'jsonwebtoken';

export const ValidateAndReturnToken = async (authorization: string) => {
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedException('Invalid or missing Bearer Token');
  }

  const token = authorization.split(' ')[1];
  if (!token) {
    throw new UnauthorizedException('Invalid Token');
  }
  let payload: { email: string; id: string };

  verify(token, 'secret', (error, decoded) => {
    if (error) {
      throw new UnauthorizedException('Invalid Token');
    }

    if (!decoded || typeof decoded !== 'object') {
      throw new UnauthorizedException('Invalid Token');
    }

    payload = {
      id: decoded.id,
      email: decoded.email,
    };
  });

  return payload.id;
};
