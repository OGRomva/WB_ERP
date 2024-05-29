import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {UserCreationDto} from "../user/dto/userCreation.dto";
import {Roles} from "../../decorators/roles-auth.decorator";
import {RolesGuard} from "../../guards/roles.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() dto: UserCreationDto) {
        return this.authService.login(dto);
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('reg')
    reg(@Body() dto: UserCreationDto) {
        return this.authService.registration(dto);
    }
}
