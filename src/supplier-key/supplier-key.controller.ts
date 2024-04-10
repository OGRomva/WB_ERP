import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {SupplierKeyService} from "./supplier-key.service";
import {CreateSupplierKeyDto} from "./dto/supplier-key.dto";

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

    @Get('id=:id')
    async getKeyById(@Param('id') id: number) {
        return this.supplierKeyService.getKeyById(id);
    }

    @Get('get-by-name/name=:name')
    async getKeyByName(@Param('name') name: string) {
        return this.supplierKeyService.getKeyByName(name);
    }

    @Get('getAll')
    async getAllKeys() {
        return this.supplierKeyService.getAllKeys();
    }

    @Delete('deleteKey/id=:id')
    async deleteKeyByName(@Param('id') id: number) {
        return this.supplierKeyService.deleteKeyByName(id);
    }
}
