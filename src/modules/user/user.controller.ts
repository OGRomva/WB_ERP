import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserCreationDto} from "./dto/userCreation.dto";
import {AddRoleDto} from "./dto/add-role.dto";
import {Roles} from "../../decorators/roles-auth.decorator";
import {RolesGuard} from "../../guards/roles.guard";

@Roles('ADMIN')
@UseGuards(RolesGuard)
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('create')
    createUser(@Body() dto: UserCreationDto) {
        return this.userService.createUser(dto);
    }

    @Get('get/:id')
    getUserById(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }

    @Get('get-all')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Delete('delete/:id')
    deleteUserById(@Param('id') id: number) {
        this.userService.deleteUserById(id);
    }

    @Post('add-role')
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto);
    }
}
