"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    ssl: {
        rejectUnauthorized: false,
    },
};
exports.default = config;
