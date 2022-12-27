"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategotyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_categoty_dto_1 = require("./create-categoty.dto");
class UpdateCategotyDto extends (0, mapped_types_1.PartialType)(create_categoty_dto_1.CreateCategotyDto) {
}
exports.UpdateCategotyDto = UpdateCategotyDto;
//# sourceMappingURL=update-categoty.dto.js.map