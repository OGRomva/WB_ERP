import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {UserCreationDto} from "../user/dto/userCreation.dto";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/user.model";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async login(dto: UserCreationDto) {
        const user = await this.validateUser(dto);
        return this.generateToken(user);
    }

    async registration(dto: UserCreationDto) {
        const candidate = await this.userService.getUserByEmail(dto.email);

        if (candidate) {
            throw new HttpException('пользователь с такой электронной почтой уже существует ', HttpStatus.BAD_REQUEST)
        }

        const user = await this.userService.createUser(dto);
        return this.generateToken(user);
    }

    private async generateToken(user: User) {
        const payload = {
            email: user.email,
            id: user.id,
            roles: user.roles
        }

        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(dto: UserCreationDto) {
        const user = await this.userService.getUserByEmail(dto.email);
        const passwordEquals = (dto.password === user.password);

        if (user && passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({message: 'неправильный email или пароль'})
    }
}
