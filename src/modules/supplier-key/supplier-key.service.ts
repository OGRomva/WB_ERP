import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {SupplierKeys} from "./supplier-key.model";
import {CreateSupplierKeyDto} from "./dto/supplier-key.dto";
import * as dayjs from "dayjs";
import {OldWBKeyError} from "../../exceptions/OldWBKeyError";
import {Cron} from "@nestjs/schedule";

@Injectable()
export class SupplierKeyService {
    constructor(@InjectModel(SupplierKeys) private supplierKeysRep: typeof SupplierKeys) {}

    async createKey(dto: CreateSupplierKeyDto) {
        await  this.supplierKeysRep.sync({alter: true})
        return await this.supplierKeysRep.create(dto);
    }

    async updateKey(dto: CreateSupplierKeyDto, id: number) {
        return await this.supplierKeysRep.update({apiKey: `${dto.apiKey}`}, {
            where: {
                id: id
            }
        });
    }

    async getKeyById(id: number) {
        return await this.supplierKeysRep.findOne({where: {id: id}});
    }

    async getKeyByName(brandName: string) {
        return this.supplierKeysRep.findOne({where: {supplierName: brandName}});
    }

    async getAllKeys() {
        return this.supplierKeysRep.findAll();
    }

    async deleteKeyByName(id: number) {
        return this.supplierKeysRep.destroy({
            where: {id: id}
        });
    }



    @Cron('* 50 01 * * *')
    async checkRelevanceOfKeys() {
        const keys = await this.supplierKeysRep.findAll()
        const todayDate = dayjs()
        for (const key of keys) {
            const checkDate = dayjs(key.tokenDeadDate)
            console.log(checkDate.diff(todayDate, 'day'))

            if (checkDate.diff(todayDate, 'day') < 1) {
                throw new OldWBKeyError(key)
            }
        }
    }
}
