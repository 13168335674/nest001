// import { createClient } from 'redis';

// const client = createClient({
//   socket: {
//     host: 'localhost',
//     port: 6379,
//   },
// });

// client.on('error', (err) => console.log('Redis Client Error', err));

// await client.connect();

// await client.hSet('hadi1', '111', 'value111');
// await client.hSet('hadi1', '222', 'value222');
// await client.hSet('hadi1', '333', 'value333');

// const value = await client.keys('*');

// console.log(value);

// await client.disconnect();

import Redis from 'ioredis';

const redis = new Redis();

const res = await redis.keys('*');

console.log(`res`, res);
