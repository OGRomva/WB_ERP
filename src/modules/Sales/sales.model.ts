import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Supplier} from "../suppliers/suppliers.model";

interface SalesCreationAttrs {
    date: Date;
    lastChangeDate: Date;
    warehouseName: string;
    countryName: string;
    oblastOkrugName: string;
    regionName: string;
    supplierArticle: string;
    nmId: number;
    barcode: string;
    category: string;
    subject: string;
    brand: string;
    techSize: string;
    incomeID: number;
    isSupply: boolean;
    isRealization: boolean;
    totalPrice: number;
    discountPercent: number;
    spp: number;
    paymentSaleAmount: number;
    forPay: number;
    finishedPrice: number;
    priceWithDisc: number;
    saleID: string;
    orderType: string;
    sticker: string;
    gNumber: string;
    srid: string;
    supplierId: number;
}

@Table({tableName: 'sales', createdAt: false, updatedAt: false})
export class Sales extends Model<Sales, SalesCreationAttrs> {
    @Column({autoIncrement: true, primaryKey: true, type: DataType.BIGINT, unique: true})
    id: number;

    @Column({type: DataType.DATE})
    date: Date;


    @Column({type: DataType.DATE})
    lastChangeDate: Date;

    @Column({type: DataType.STRING})
    warehouseName: string;

    @Column({type: DataType.STRING})
    countryName: string;

    @Column({type: DataType.STRING})
    oblastOkrugName: string;

    @Column({type: DataType.STRING})
    regionName: string;

    @Column({type: DataType.STRING})
    supplierArticle: string;

    @Column({type: DataType.BIGINT})
    nmId: number;

    @Column({type: DataType.STRING})
    barcode: string;

    @Column({type: DataType.STRING})
    category: string;

    @Column({type: DataType.STRING})
    subject: string;

    @Column({type: DataType.STRING})
    brand: string;

    @Column({type: DataType.STRING})
    techSize: string;

    @Column({type: DataType.BIGINT})
    incomeID: number;

    @Column({type: DataType.BOOLEAN})
    isSupply: boolean;

    @Column({type: DataType.BOOLEAN})
    isRealization: boolean;

    @Column({type: DataType.REAL})
    totalPrice: number;

    @Column({type: DataType.REAL})
    discountPercent: number;

    @Column({type: DataType.REAL})
    spp: number;

    @Column({type: DataType.REAL})
    paymentSaleAmount: number;

    @Column({type: DataType.REAL})
    forPay: number;

    @Column({type: DataType.REAL})
    finishedPrice: number;

    @Column({type: DataType.REAL})
    priceWithDisc: number;

    @Column({type: DataType.STRING})
    saleID: string;

    @Column({type: DataType.STRING})
    orderType: string;

    @Column({type: DataType.STRING})
    sticker: string;

    @Column({type: DataType.STRING})
    gNumber: string;

    @Column({type: DataType.STRING, unique: true})
    srid: string;

    @ForeignKey(() => Supplier)
    @Column({type: DataType.INTEGER})
    supplierId: number;

    @BelongsTo(() => Supplier)
    supplier: Supplier
}
