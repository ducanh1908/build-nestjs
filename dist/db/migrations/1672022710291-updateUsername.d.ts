import { MigrationInterface, QueryRunner } from "typeorm";
export declare class updateUsername1672022710291 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
