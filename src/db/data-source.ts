import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv'

dotenv.config()

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT,10),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    entities: [
       'dist/**/*.entity{.ts,.js}',
    ],
    extra: {
        charset: "utf8mb4_unicode_ci",
    },
    migrations : ['dist/db/migrations/*.js'],
    // options: {
    //     encrypt: false,
    //     enableArithAbort: true,

    //   },
    logging:false,
    synchronize: false,
    migrationsRun: false
}
console.log("Data config",dataSourceOptions)
const dataSource = new DataSource({...dataSourceOptions, migrationsRun: true})
export default dataSource

