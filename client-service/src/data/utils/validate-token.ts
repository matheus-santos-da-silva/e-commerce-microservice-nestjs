import { UnauthorizedException } from '@nestjs/common';
import { verify } from 'jsonwebtoken';

export const ValidateToken = async (authorization: string, id: string) => {
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedException('Invalid or missing Bearer Token');
  }

  const token = authorization.split(' ')[1];
  const payload = verify(token, 'secret') as {
    email: string;
    id: string;
  };

  if (payload.id !== id) {
    throw new UnauthorizedException('This User is not yours');
  }
};
