import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { IdCard } from './entity/IdCard';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'adiadi',
  database: 'typeorm_test',
  synchronize: true,
  logging: false,
  entities: [User, IdCard],
  migrations: [],
  subscribers: [],
  poolSize: 10,
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password',
  },
});
