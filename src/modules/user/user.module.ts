import {forwardRef, Module} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "../roles/role.model";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "./user.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [
        SequelizeModule.forFeature([Role, User, UserRoles]),
        RolesModule,
        forwardRef(() => AuthModule)
    ],
    exports: [
        UserService,
    ]
})
export class UserModule {}
