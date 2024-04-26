import {Column, DataType, Model, Table} from "sequelize-typescript";

interface SupplierKeyModelCreationAttrs {
    supplierName: string;
    apiKey:string;
}

@Table({tableName: 'supplierKeys'})
export class SupplierKeys extends Model<SupplierKeys, SupplierKeyModelCreationAttrs> {
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false})
    id: number;

    @Column({type: DataType.STRING})
    supplierName: string;

    @Column({type: DataType.TEXT})
    apiKey: string;
}