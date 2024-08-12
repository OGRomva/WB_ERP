import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {SupplierKeys} from "./supplier-key.model";
import {KeyCategories} from "../key-categories/key-categories.model";

@Table({tableName: 'keyToCategories', timestamps: false})
export class KeyToCategories extends Model<KeyToCategories> {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, allowNull: false, autoIncrement: true})
    id: number

    @ForeignKey(() => SupplierKeys)
    @Column({type: DataType.INTEGER})
    key_id: number

    @ForeignKey(() => KeyCategories)
    @Column({type: DataType.INTEGER})
    category_id: number
}