"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategotiesModule = void 0;
const common_1 = require("@nestjs/common");
const categoties_service_1 = require("./categoties.service");
const categoties_controller_1 = require("./categoties.controller");
const typeorm_1 = require("@nestjs/typeorm");
const categoty_entity_1 = require("./entities/categoty.entity");
let CategotiesModule = class CategotiesModule {
};
CategotiesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([categoty_entity_1.Categoty])],
        controllers: [categoties_controller_1.CategotiesController],
        providers: [categoties_service_1.CategotiesService]
    })
], CategotiesModule);
exports.CategotiesModule = CategotiesModule;
//# sourceMappingURL=categoties.module.js.map