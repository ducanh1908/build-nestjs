"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixOnetomany1672048784738 = void 0;
class fixOnetomany1672048784738 {
    constructor() {
        this.name = 'fixOnetomany1672048784738';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`categories\` DROP FOREIGN KEY \`FK_40b29caafc0bbdf6d98a3ad2e41\``);
        await queryRunner.query(`ALTER TABLE \`categories\` DROP COLUMN \`productId\``);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`categories\` ADD \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`categories\` ADD CONSTRAINT \`FK_40b29caafc0bbdf6d98a3ad2e41\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.fixOnetomany1672048784738 = fixOnetomany1672048784738;
//# sourceMappingURL=1672048784738-fixOnetomany.js.map