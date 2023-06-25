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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const jwt_1 = require("@nestjs/jwt");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    ttt(authorization, response) {
        if (authorization) {
            try {
                const token = authorization.split(' ')[1];
                const data = this.jwtService.verify(token);
                const newToken = this.jwtService.sign({
                    count: data.count + 1,
                });
                response.setHeader('authorization', 'bearer ' + newToken);
                return data.count + 1;
            }
            catch (e) {
                console.log(e);
                throw new common_1.UnauthorizedException();
            }
        }
        else {
            const newToken = this.jwtService.sign({
                count: 1,
            });
            response.setHeader('authorization', 'bearer ' + newToken);
            return 1;
        }
    }
    sss(session) {
        console.log(session);
        session.count = session.count ? session.count + 1 : 1;
        return session.count;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    common_1.Inject(jwt_1.JwtService),
    __metadata("design:type", jwt_1.JwtService)
], AppController.prototype, "jwtService", void 0);
__decorate([
    common_1.Get('ttt'),
    __param(0, common_1.Headers('authorization')),
    __param(1, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "ttt", null);
__decorate([
    common_1.Get('sss'),
    __param(0, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "sss", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map