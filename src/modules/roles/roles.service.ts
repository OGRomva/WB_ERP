import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./role.model";
import {RoleCreationDto} from "./dto/role-creation.dto";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private rolesRep: typeof Role) {}

    async createRole(dto: RoleCreationDto) {
        await this.rolesRep.sync({alter: true})
        return await this.rolesRep.create(dto);
    }

    async getAllRoles() {
        return await this.rolesRep.findAll();
    }

    async getRoleByValue(value: string) {
        return await this.rolesRep.findOne({
            where: {
                value: value
            }
        })
    }

    async deleteRoleByValue(value: string) {
        return await this.rolesRep.destroy({
            where: {
                value: value
            }
        })
    }
}
