import {Column, DataType, Model, Table} from "sequelize-typescript";


interface FinancialReportCreationAttrs {
    realizationreport_id:number;
    date_from: string;
    date_to: string;
    create_dt: string;
    currency_name: string;
    rrd_id: number;
    gi_id: number;
    subject_name: string;
    nm_id: number;
    brand_name: string;
    sa_name: string;
    ts_name: string;
    barcode: string;
    doc_type_name: string;
    quantity: number;
    retail_price: number;
    retail_amount: number;
    sale_percent: number;
    commission_percent: number;
    office_name: string;
    supplier_oper_name: string;
    order_dt: string;
    sale_dt: string;
    rr_dt: string;
    shk_id: number;
    retail_price_withdisc_rub: number;
    delivery_amount: number;
    return_amount: number;
    delivery_rub: number;
    gi_box_type_name: string;
    product_discount_for_report: number;
    supplier_promo: number;
    rid: number;
    ppvz_spp_prc: number;
    ppvz_kvw_prc_base: number;
    sup_rating_prc_up: number;
    is_kgvp_v2: number;
    ppvz_sales_commission:number;
    ppvz_for_pay: number;
    ppvz_reward: number;
    acquiring_fee:number;
    acquiring_bank: string;
    ppvz_vw: number;
    ppvz_vw_nds: number;
    ppvz_office_id: number;
    ppvz_office_name: string;
    ppvz_supplier_id: number;
    ppvz_supplier_name: string;
    ppvz_inn: string;
    decloration_number: string;
    bonus_type_name: string;
    sticker_id: string;
    site_country: string;
    penalty: number;
    additional_payment: number;
    rebill_logistic_cost: number;
    rebill_logistic_org: string;
    kiz: string;
    storage_fee: number;
    deduction: number;
    acceptance: number;
    srid: string;
    report_type: number;
    supplierName: string;
}

@Table({ tableName: 'financialReport', timestamps: false })
export class FinancialReport extends Model<FinancialReport, FinancialReportCreationAttrs>{
    @Column({type: DataType.BIGINT, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.BIGINT})
    realizationreport_id: number;

    @Column({type: DataType.STRING})
    date_from: string;

    @Column({type: DataType.STRING})
    date_to: string;

    @Column({type: DataType.STRING})
    create_dt: string;

    @Column({type: DataType.STRING})
    currency_name: string;

    @Column({type: DataType.BIGINT})
    rrd_id: number;

    @Column({type: DataType.BIGINT})
    gi_id: number;

    @Column({type: DataType.STRING})
    subject_name: string;

    @Column({type: DataType.BIGINT})
    nm_id: number;

    @Column({type: DataType.STRING})
    brand_name: string;

    @Column({type: DataType.STRING})
    sa_name: string;

    @Column({type: DataType.STRING})
    ts_name: string;

    @Column({type: DataType.STRING})
    barcode: string;

    @Column({type: DataType.STRING})
    doc_type_name: string;

    @Column({type: DataType.BIGINT})
    quantity: number;

    @Column({type: DataType.REAL})
    retail_price: number;

    @Column({type: DataType.REAL})
    retail_amount: number;

    @Column({type: DataType.BIGINT})
    sale_percent: number;

    @Column({type: DataType.REAL})
    commission_percent: number;

    @Column({type: DataType.STRING})
    office_name: string;

    @Column({type: DataType.STRING})
    supplier_oper_name: string;

    @Column({type: DataType.STRING})
    order_dt: string;

    @Column({type: DataType.STRING})
    sale_dt: string;

    @Column({type: DataType.STRING})
    rr_dt: string;

    @Column({type: DataType.BIGINT})
    shk_id: number;

    @Column({type: DataType.REAL})
    retail_price_withdisc_rub: number;

    @Column({type: DataType.BIGINT})
    delivery_amount: number;

    @Column({type: DataType.BIGINT})
    return_amount: number;

    @Column({type: DataType.REAL})
    delivery_rub: number;

    @Column({type: DataType.STRING})
    gi_box_type_name: string;

    @Column({type: DataType.REAL})
    product_discount_for_report: number;

    @Column({type: DataType.REAL})
    supplier_promo: number;

    @Column({type: DataType.BIGINT})
    rid: number;

    @Column({type: DataType.REAL})
    ppvz_spp_prc: number;

    @Column({type: DataType.REAL})
    ppvz_kvw_prc_base: number;

    @Column({type: DataType.REAL})
    ppvz_kvw_prc:number;

    @Column({type: DataType.REAL})
    sup_rating_prc_up: number;

    @Column({type: DataType.REAL})
    is_kgvp_v2: number;

    @Column({type: DataType.REAL})
    ppvz_sales_commission:number;

    @Column({type: DataType.REAL})
    ppvz_for_pay: number;

    @Column({type: DataType.REAL})
    ppvz_reward: number;

    @Column({type: DataType.REAL})
    acquiring_fee:number;

    @Column({type: DataType.STRING})
    acquiring_bank: string;

    @Column({type: DataType.REAL})
    ppvz_vw: number;

    @Column({type: DataType.REAL})
    ppvz_vw_nds: number;

    @Column({type: DataType.BIGINT})
    ppvz_office_id: number;

    // @Column({type: DataType.STRING})
    // ppvz_office_name: string;

    @Column({type: DataType.BIGINT})
    ppvz_supplier_id: number;

    @Column({type: DataType.STRING})
    ppvz_supplier_name: string;

    @Column({type: DataType.STRING})
    ppvz_inn: string;

    @Column({type: DataType.STRING})
    decloration_number: string;

    // @Column({type: DataType.STRING})
    // bonus_type_name: string;

    @Column({type: DataType.STRING})
    sticker_id: string;

    @Column({type: DataType.STRING})
    site_country: string;

    @Column({type: DataType.REAL})
    penalty: number;

    @Column({type: DataType.REAL})
    additional_payment: number;

    @Column({type: DataType.REAL})
    rebill_logistic_cost: number;

    @Column({type: DataType.STRING})
    rebill_logistic_org: string;

    @Column({type: DataType.STRING})
    kiz: string;

    @Column({type: DataType.REAL})
    storage_fee: number;

    @Column({type: DataType.REAL})
    deduction: number;

    @Column({type: DataType.REAL})
    acceptance: number;

    @Column({type: DataType.STRING})
    srid: string;

    @Column({type: DataType.BIGINT})
    report_type: number;

    @Column({type: DataType.STRING})
    supplierName: string;
}