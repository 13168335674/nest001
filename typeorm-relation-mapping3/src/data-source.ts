import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Tag } from './entity/Tag';
import { Article } from './entity/Article';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'adiadi',
  database: 'typeorm_test',
  synchronize: true,
  logging: true,
  entities: [Article, Tag],
  migrations: [],
  subscribers: [],
  poolSize: 10,
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password',
  },
});
