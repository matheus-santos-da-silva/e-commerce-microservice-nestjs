import { sign } from 'jsonwebtoken';

interface payload {
  id: string;
  email: string;
}

export const createUserToken = async (payload: payload) => {
  const token = sign(payload, `${process.env.JWT_SECRET}`, {
    expiresIn: '24h',
  });
  return token;
};
