import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Department } from './entity/Department';
import { Employee } from './entity/Employee';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'adiadi',
  database: 'typeorm_test',
  synchronize: true,
  logging: false,
  entities: [Department, Employee],
  migrations: [],
  subscribers: [],
  poolSize: 10,
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password',
  },
});
