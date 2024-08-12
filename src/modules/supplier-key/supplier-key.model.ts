import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Supplier} from "../suppliers/suppliers.model";
import {KeyCategories} from "../key-categories/key-categories.model";
import {KeyToCategories} from "./KeyToCategories.model";

interface SupplierKeyModelCreationAttrs {
    supplierId: number;
    apiKey:string;
    tokenDeadDate: string;
}

@Table({tableName: 'supplierKeys'})
export class SupplierKeys extends Model<SupplierKeys, SupplierKeyModelCreationAttrs> {
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false})
    id: number;

    @ForeignKey(() => Supplier)
    @Column({type: DataType.INTEGER, allowNull: false})
    supplierId: number;

    @Column({type: DataType.TEXT})
    apiKey: string;

    @Column({type: DataType.STRING})
    tokenDeadDate: string;

    @BelongsToMany(() => KeyCategories, () => KeyToCategories)
    categories: KeyCategories[]
}