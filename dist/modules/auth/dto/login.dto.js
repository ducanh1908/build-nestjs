"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const register_dto_1 = require("./register.dto");
class LoginDto extends (0, mapped_types_1.PartialType)(register_dto_1.RegisterDto) {
}
exports.LoginDto = LoginDto;
//# sourceMappingURL=login.dto.js.map