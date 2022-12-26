"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsername1672022710291 = void 0;
class updateUsername1672022710291 {
    constructor() {
        this.name = 'updateUsername1672022710291';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`name\` \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`username\` \`name\` varchar(255) NOT NULL`);
    }
}
exports.updateUsername1672022710291 = updateUsername1672022710291;
//# sourceMappingURL=1672022710291-updateUsername.js.map