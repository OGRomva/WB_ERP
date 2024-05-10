import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {SupplierKeyService} from "./supplier-key.service";
import {CreateSupplierKeyDto} from "./dto/supplier-key.dto";
import {JwtAuthGuard} from "../../guards/jwt-auth.guard";
import {Roles} from "../../decorators/roles-auth.decorator";
import {RolesGuard} from "../../guards/roles.guard";

@Roles("ADMIN", "SUPPLIER")
@UseGuards(RolesGuard)
@Controller('supplier-key')
export class SupplierKeyController {
    constructor(private supplierKeyService: SupplierKeyService) {}

    @Post('create')
    async createKey(@Body() creationKeyDto: CreateSupplierKeyDto) {
        return this.supplierKeyService.createKey(creationKeyDto)
    }

    @Put('update/id=:id')
    async updateKey(@Param('id') id: number, @Body() creationKeyDto: CreateSupplierKeyDto) {
        return this.supplierKeyService.updateKey(creationKeyDto, id);
    }


    @Get('get-by-id/:id')
    async getKeyById(@Param('id') id: number) {
        return this.supplierKeyService.getKeyById(id);
    }

    @Get('get-by-name/:name')
    async getKeyByName(@Param('name') name: string) {
        return this.supplierKeyService.getKeyByName(name);
    }

    @Get('get-all')
    async getAllKeys() {
        return this.supplierKeyService.getAllKeys();
    }

    @Delete('delete/:id')
    async deleteKeyByName(@Param('id') id: number) {
        return this.supplierKeyService.deleteKeyByName(id);
    }
}
