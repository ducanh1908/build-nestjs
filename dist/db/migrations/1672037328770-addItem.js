"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItem1672037328770 = void 0;
class addItem1672037328770 {
    constructor() {
        this.name = 'addItem1672037328770';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`update_at\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`create_at\``);
    }
}
exports.addItem1672037328770 = addItem1672037328770;
//# sourceMappingURL=1672037328770-addItem.js.map