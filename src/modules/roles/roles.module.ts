import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./role.model";
import {UserRoles} from "./user-roles.model";
import {User} from "../user/user.model";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([Role, UserRoles, User])],
  exports: [RolesService]
})
export class RolesModule {}
