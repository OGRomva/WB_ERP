import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreateSupplierDto} from "./dto/supplier.dto";
import {SuppliersService} from "./suppliers.service";

@Controller('suppliers')
export class SuppliersController {
    constructor(private suppliersService: SuppliersService) {}

    @Post('create')
    async createSupplier(@Body() dto: CreateSupplierDto) {
        return this.suppliersService.createSupplier(dto);
    }

    @Delete('delete/id=:id')
    async deleteSupplierById(@Param('id') id: number) {
        return this.suppliersService.deleteSupplierById(id);
    }

    @Get('get-all')
    async getAllSuppliers() {
        return this.suppliersService.getAllSuppliers();
    }
}
