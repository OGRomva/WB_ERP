import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {KeyCategoriesService} from "./key-categories.service";
import {CreateWBKeyCategoryDto} from "./dto/key-categories.dto";
import {Roles} from "../../decorators/roles-auth.decorator";
import {RolesGuard} from "../../guards/roles.guard";


@Roles("ADMIN", "SUPPLIER")
@UseGuards(RolesGuard)
@Controller('wb-key-categories')
export class KeyCategoriesController {
    constructor(private keyCategoriesService: KeyCategoriesService) {}

    @Post('add')
    async createCategory(@Body() dto: CreateWBKeyCategoryDto) {
        return this.keyCategoriesService.create(dto)
    }

    @Get('get-all')
    async getAllCategories() {
        return this.keyCategoriesService.getAll();
    }

}
