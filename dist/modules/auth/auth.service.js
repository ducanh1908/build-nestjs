"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
    }
    async validateUser(email, password) {
        const user = await this.userService.getUserByEmail(email);
        if (!user)
            throw new common_1.BadRequestException();
        if (!await bcrypt.compare(password, user.password))
            throw new common_1.UnauthorizedException();
        return user;
    }
    async register(payload) {
        const user = await this.userService.getUserByName(payload.username);
        if (user)
            throw new common_1.NotFoundException('User already exists');
        const email = await this.userService.getUserByEmail(payload.email);
        if (email)
            throw new common_1.NotFoundException('Email already exists');
        const salt = 10;
        const hashPassword = await bcrypt.hash(payload.password, salt);
        payload.password = hashPassword;
        return await this.userService.create(payload);
    }
    async login(login) { }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map