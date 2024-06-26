import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {RoleCreationDto} from "./dto/role-creation.dto";
import {Roles} from "../../decorators/roles-auth.decorator";
import {RolesGuard} from "../../guards/roles.guard";

@Roles('ADMIN')
@UseGuards(RolesGuard)
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @Post('create')
    createRole(@Body() dto: RoleCreationDto) {
        return this.rolesService.createRole(dto);
    }

    @Get('get-all')
    getAllRoles() {
        return this.rolesService.getAllRoles();
    }

    @Get('get-by-value/:value')
    getRoleByValue(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value);
    }

    @Delete('delete/:value')
    deleteRoleByValue(@Param('value') value: string) {
        return this.rolesService.deleteRoleByValue(value);
    }
}
