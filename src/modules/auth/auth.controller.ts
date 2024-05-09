import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {UserCreationDto} from "../user/dto/userCreation.dto";
import {Roles} from "../../decorators/roles-auth.decorator";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() dto: UserCreationDto) {
        return this.authService.login(dto);
    }

    @Roles('ADMIN')
    @Post('reg')
    reg(@Body() dto: UserCreationDto) {
        return this.authService.registration(dto);
    }
}
