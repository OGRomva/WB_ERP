import {Column, DataType, Model, Table} from "sequelize-typescript";

interface StockCreationAttrs {
    lastChangeDate: Date;
    supplierArticle: string;
    nmId: number;
    barcode: string;
    techSize: string;
    brand: string;
    subject: string;
    category: string;
    warehouseName: string;
    quantity: number;
    inWayToClient: number;
    inWayFromClient: number;
    quantityFull: number;
    Price: number;
    Discount: number;
    dateUpload: Date;
    supplierName: string;
    isSupply: boolean;
    isRealization: boolean;
    SCCode: string;
}

@Table({tableName: 'stocks', timestamps: false})
export class Stocks extends Model<Stocks, StockCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.DATE})
    lastChangeDate: Date;

    @Column({type: DataType.STRING})
    supplierArticle: string;

    @Column({type: DataType.INTEGER})
    nmId: number;

    @Column({type: DataType.STRING})
    barcode: string;

    @Column({type: DataType.STRING})
    techSize: string;

    @Column({type: DataType.STRING})
    brand: string;

    @Column({type: DataType.STRING})
    subject: string;

    @Column({type: DataType.STRING})
    category: string;

    @Column({type: DataType.STRING})
    warehouseName: string;

    @Column({type: DataType.INTEGER})
    quantity: number;

    @Column({type: DataType.INTEGER})
    inWayToClient: number;

    @Column({type: DataType.INTEGER})
    inWayFromClient: number;

    @Column({type: DataType.INTEGER})
    quantityFull: number;

    @Column({type: DataType.INTEGER})
    Price: number;

    @Column({type: DataType.INTEGER})
    Discount: number;

    @Column({type: DataType.DATE})
    dateUpload: Date;

    @Column({type: DataType.STRING})
    supplierName: string;

    @Column({type: DataType.BOOLEAN})
    isSupply: boolean;

    @Column({type: DataType.BOOLEAN})
    isRealization: boolean;

    @Column({type: DataType.STRING})
    SCCode: string;
}