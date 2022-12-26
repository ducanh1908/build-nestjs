"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEmail1671786901489 = void 0;
class addEmail1671786901489 {
    constructor() {
        this.name = 'addEmail1671786901489';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }
}
exports.addEmail1671786901489 = addEmail1671786901489;
//# sourceMappingURL=1671786901489-add-email.js.map