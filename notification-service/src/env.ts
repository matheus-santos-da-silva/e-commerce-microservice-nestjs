import { config } from 'dotenv';
config();

export const PORT: number = parseInt(process.env.PORT);
export const ACCESS_KEY: string = String(process.env.ACCESS_KEY);
export const SECRET_KEY: string = String(process.env.SECRET_KEY);
export const REGION: string = String(process.env.REGION);
export const AWS_EMAIL: string = String(process.env.AWS_EMAIL);
