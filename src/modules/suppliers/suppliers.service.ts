import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Supplier} from "./suppliers.model";
import {CreateSupplierDto} from "./dto/supplier.dto";

@Injectable()
export class SuppliersService {
    constructor(@InjectModel(Supplier) private suppliersRep: typeof Supplier) {}

    async createSupplier(dto: CreateSupplierDto) {
        await this.suppliersRep.sync({alter: true});
        return this.suppliersRep.create(dto);
    }

    async deleteSupplierById(id: number) {
        await this.suppliersRep.sync({alter: true})
        return this.suppliersRep.destroy({where: {id: id}});
    }

    async getAllSuppliers() {
        return this.suppliersRep.findAll({include: {
            all: true
        }})
    }
}
