import { createConnection } from 'towa';
export const { storeControl, getBlendDB } = createConnection({
    typeorm: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'zanllp',
        password: 'zanllp',
        database: 'db',
        charset: 'utf8mb4',
        synchronize: true,
        logging: false,
        entities: [ 'entity/*.ts' ],
        subscribers: [ 'subscriber/*.ts' ],
    },
    redis: {
        port: 6379,
        host: '127.0.0.1',
    },
});
