import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {UserCreationDto} from "./dto/userCreation.dto";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "./dto/add-role.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User) private userRep: typeof User,
        private rolesService: RolesService
    ) {}

    async createUser(dto: UserCreationDto) {
        await this.userRep.sync({alter: true})
        const user = await this.userRep.create(dto)
        const role = await this.rolesService.getRoleByValue('ADMIN')
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getUserById(id: number) {
        return await this.userRep.findByPk(id);
    }

    async getAllUsers() {
        return await this.userRep.findAll({include: {all: true}});
    }

    async deleteUserById(id: number) {
        return await this.userRep.destroy({
            where: {id: id}
        });
    }

    async getUserByEmail(email: string) {
        return await this.userRep.findOne({
            where: {
                email: email
            },
            include: {
                all: true
            }
        })
    }

    async setRole(userId: number, userRole: string) {
        const user = await this.userRep.findByPk(userId);
        const role = await this.rolesService.getRoleByValue(userRole);
        await user.$set('roles', [role.id])
        user.roles = [role];
        return user;
    }
}
