import { MigrationInterface, QueryRunner } from "typeorm";

export class addItem1672037328770 implements MigrationInterface {
    name = 'addItem1672037328770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`update_at\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`create_at\``);
    }

}
