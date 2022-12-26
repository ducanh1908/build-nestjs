"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
exports.dataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    entities: [
        'dist/**/*.entity{.ts,.js}',
    ],
    extra: {
        charset: "utf8mb4_unicode_ci",
    },
    migrations: ['dist/db/migrations/*.js'],
    logging: false,
    synchronize: false,
    migrationsRun: false
};
console.log("Data config", exports.dataSourceOptions);
const dataSource = new typeorm_1.DataSource(Object.assign(Object.assign({}, exports.dataSourceOptions), { migrationsRun: true }));
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map