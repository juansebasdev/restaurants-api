import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  name: process.env.NAME,
  baseUrl: process.env.BASE_URL,
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    type: process.env.DB_TYPE,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
}));
