/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable spaced-comment */

import dotenv from 'dotenv';

dotenv.config();

interface IEnvironmentConfig {
  isProduction: boolean;
  app: {
    environment: string;
    port: number;
  };

  postgresConnectionUrl?: string;
  redisConnectionUrl?: string;
}

const NODE_ENV = process.env.NODE_ENV?.toLowerCase() ?? 'development';
const isProduction = NODE_ENV === 'production';

export const env: IEnvironmentConfig = {
  isProduction,
  app: {
    environment: NODE_ENV,
    port: +process.env.APP_PORT! || 8080,
  },
  postgresConnectionUrl: process.env.POSTGRES_CONNECTION_URL,
  redisConnectionUrl: process.env.REDIS_CONNECTION_URL,
};

// Environment defaults
if (!isProduction) {
  env.postgresConnectionUrl = env.postgresConnectionUrl || 'postgresql://postgres:password@db:5432/db';
  env.redisConnectionUrl = env.redisConnectionUrl || 'redis://redis';
}

console.info(`${'='.repeat(30)}`);
console.info(`NODE_ENV: ${env.app.environment}`);
console.info(`${'='.repeat(30)}`);
