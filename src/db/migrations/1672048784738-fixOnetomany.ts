import { MigrationInterface, QueryRunner } from "typeorm";

export class fixOnetomany1672048784738 implements MigrationInterface {
    name = 'fixOnetomany1672048784738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`categories\` DROP FOREIGN KEY \`FK_40b29caafc0bbdf6d98a3ad2e41\``);
        await queryRunner.query(`ALTER TABLE \`categories\` DROP COLUMN \`productId\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`categories\` ADD \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`categories\` ADD CONSTRAINT \`FK_40b29caafc0bbdf6d98a3ad2e41\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
