import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";
import {UserRoles} from "../roles/user-roles.model";
import {KeyToCategories} from "../supplier-key/KeyToCategories.model";
import {SupplierKeys} from "../supplier-key/supplier-key.model";

interface KeyCategoriesModelCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'keyCategories', timestamps: false})
export class KeyCategories extends Model<KeyCategoriesModelCreationAttrs, KeyCategories>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @Column({type: DataType.STRING})
    description: string;

    @BelongsToMany(() => SupplierKeys, () => KeyToCategories )
    keys: SupplierKeys[];
}