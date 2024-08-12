import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";
import {SupplierKeys} from "../supplier-key/supplier-key.model";
import {Orders} from "../Orders/orders.model";
import {Sales} from "../Sales/sales.model";
import {Stocks} from "../Stocks/stocks.model";

interface SuppliersModelCreationAttrs {
    supplierName: string;
}

@Table({tableName: 'suppliers'})
export class Supplier extends Model<Supplier, SuppliersModelCreationAttrs> {
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false})
    id: number;

    @Column({type: DataType.STRING, unique: true})
    supplierName: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userCreatorId: number;

    @BelongsTo(() => User)
    creatorUser: User;

    @HasMany(() => SupplierKeys)
    keys: SupplierKeys[];

    @HasMany(() => Orders)
    orders: Orders[];

    @HasMany(() => Sales)
    sales: Sales[];

    @HasMany(() => Stocks)
    stocks: Stocks[];
}