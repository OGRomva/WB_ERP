import {Column, DataType, Model, Table} from "sequelize-typescript";

interface OrdersCreationAttrs {
    date: string;
    lastChangeDate: string;
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
    finishedPrice: number;
    priceWithDisc: number;
    isCancel: boolean;
    cancelDate: string;
    orderType: string;
    sticker: string;
    gNumber: string;
    srid: string;
}


@Table({tableName: 'orders'})
export class Orders extends Model<Orders, OrdersCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    date: string;

    @Column({type: DataType.STRING})
    lastChangeDate: string;

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

    @Column({type: DataType.STRING})
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

    @Column({type: DataType.STRING})
    incomeID: string;

    @Column({type: DataType.BOOLEAN})
    isSupply: boolean;

    @Column({type: DataType.BOOLEAN})
    isRealization: boolean;

    @Column({type: DataType.NUMBER})
    totalPrice: number;

    @Column({type: DataType.INTEGER})
    discountPercent: number;

    @Column({type: DataType.NUMBER})
    spp: number;

    @Column({type: DataType.NUMBER})
    finishedPrice: number;

    @Column({type: DataType.NUMBER})
    priceWithDisc: number;

    @Column({type: DataType.BOOLEAN})
    isCancel: boolean;

    @Column({type: DataType.STRING})
    cancelDate: string;

    @Column({type: DataType.STRING})
    orderType: string;

    @Column({type: DataType.STRING})
    sticker: string;

    @Column({type: DataType.STRING})
    gNumber: string;

    @Column({type: DataType.STRING})
    srid: string;
}