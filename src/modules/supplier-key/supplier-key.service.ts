import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {SupplierKeys} from "./supplier-key.model";
import {CreateSupplierKeyDto} from "./dto/supplier-key.dto";
import * as dayjs from "dayjs";
import {OldWBKeyError} from "../../exceptions/OldWBKeyError";
import {Cron} from "@nestjs/schedule";
import {KeyCategories} from "../key-categories/key-categories.model";

@Injectable()
export class SupplierKeyService {
    constructor(
        @InjectModel(SupplierKeys) private supplierKeysRep: typeof SupplierKeys,
        @InjectModel(KeyCategories) private keyCategoriesRep: typeof KeyCategories
    ) {}

    async createKey(dto: CreateSupplierKeyDto) {
        await this.supplierKeysRep.sync({alter: true})
        const key = await this.supplierKeysRep.create(dto);
        let categories: KeyCategories[]
        for (const item of dto.categories) {
            const cat = await this.keyCategoriesRep.findByPk(item);
            await key.$set('categories', [cat.id]);
            categories?.push(cat);
        }

        key.categories = categories;
        return key
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

    async getAllKeys() {
        return this.supplierKeysRep.findAll({
            include: {
                all: true
            }
        });
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
