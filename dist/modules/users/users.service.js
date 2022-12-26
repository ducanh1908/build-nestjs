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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const page_meta_dto_1 = require("../../paginations/page-meta.dto");
const page_dto_1 = require("../../paginations/page.dto");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        const user = await this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }
    async findAll(pageOptionsDto) {
        const queryBuilder = this.userRepository.createQueryBuilder('user');
        queryBuilder
            .orderBy('user.username', pageOptionsDto.order)
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take);
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({ itemCount, pageOptionsDto });
        return new page_dto_1.PageDto(entities, pageMetaDto);
    }
    async findOne(id) {
        return this.userRepository.findOneBy({ id });
    }
    async findUsername(username) {
        return this.userRepository.findOne({ where: { username } });
    }
    async findEmail(email) {
        return this.userRepository.findOne({ where: { email } });
    }
    async update(id, updateUserDto) {
        const username = await this.findUsername(updateUserDto.username);
        if (username)
            throw new common_1.NotFoundException('username already exists');
        const email = await this.findEmail(updateUserDto.email);
        console.log(email);
        if (email)
            throw new common_1.NotFoundException('Email already exists');
        const user = await this.findOne(id);
        return this.userRepository.save(Object.assign(Object.assign({}, user), updateUserDto));
    }
    async remove(id) {
        const user = await this.findOne(id);
        return this.userRepository.remove(user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map