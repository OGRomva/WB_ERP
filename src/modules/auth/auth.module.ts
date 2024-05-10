import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";
import * as process from "process";
import {getJwtSecret} from "../../utils/jwt-constants";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        forwardRef(() => UserModule),
        JwtModule.register({
            global: true,
            secret: getJwtSecret() || 'SECRET',
            signOptions: {
              expiresIn: '8h'
            }
        })
    ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {}
