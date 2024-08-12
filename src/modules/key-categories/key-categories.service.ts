import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {KeyCategories} from "./key-categories.model";
import {CreateWBKeyCategoryDto} from "./dto/key-categories.dto";

@Injectable()
export class KeyCategoriesService {
    constructor (@InjectModel(KeyCategories) private keyCategoriesRep: typeof KeyCategories) {}

    async create(dto: CreateWBKeyCategoryDto) {
        return await this.keyCategoriesRep.create(dto);
    }

    async getAll() {
        return await this.keyCategoriesRep.findAll();
    }
}
