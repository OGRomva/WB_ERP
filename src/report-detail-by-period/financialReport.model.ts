import {Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

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
}

@Table({ tableName: 'realization_reports', timestamps: false })
export class FinancialReport extends Model<FinancialReport, FinancialReportCreationAttrs>{
    @PrimaryKey
    @Column(DataType.INTEGER)
    realizationreport_id: number;

    @Column(DataType.STRING)
    date_from: string;

    @Column(DataType.STRING)
    date_to: string;

    @Column(DataType.STRING)
    create_dt: string;

    @Column(DataType.STRING)
    currency_name: string;

    @Column(DataType.INTEGER)
    rrd_id: number;

    @Column(DataType.INTEGER)
    gi_id: number;

    @Column(DataType.STRING)
    subject_name: string;

    @Column(DataType.INTEGER)
    nm_id: number;

    @Column(DataType.STRING)
    brand_name: string;

    @Column(DataType.STRING)
    sa_name: string;

    @Column(DataType.STRING)
    ts_name: string;

    @Column(DataType.STRING)
    barcode: string;

    @Column(DataType.STRING)
    doc_type_name: string;

    @Column(DataType.INTEGER)
    quantity: number;

    @Column(DataType.NUMBER)
    retail_price: number;

    @Column(DataType.NUMBER)
    retail_amount: number;

    @Column(DataType.INTEGER)
    sale_percent: number;

    @Column(DataType.NUMBER)
    commission_percent: number;

    @Column(DataType.INTEGER)
    office_name: number;

    @Column(DataType.STRING)
    supplier_oper_name: string;

    @Column(DataType.STRING)
    order_dt: string;

    @Column(DataType.STRING)
    sale_dt: string;

    @Column(DataType.STRING)
    rr_dt: string;

    @Column(DataType.INTEGER)
    shk_id: number;

    @Column(DataType.NUMBER)
    retail_price_withdisc_rub: number;

    @Column(DataType.INTEGER)
    delivery_amount: number;

    @Column(DataType.INTEGER)
    return_amount: number;

    @Column(DataType.NUMBER)
    delivery_rub: number;

    @Column(DataType.STRING)
    gi_box_type_name: string;

    @Column(DataType.NUMBER)
    product_discount_for_report: number;

    @Column(DataType.NUMBER)
    supplier_promo: number;

    @Column(DataType.INTEGER)
    rid: number;

    @Column(DataType.NUMBER)
    ppvz_spp_prc: number;

    @Column(DataType.NUMBER)
    ppvz_kvw_prc_base: number;

    @Column(DataType.NUMBER)
    ppvz_kvw_prc:number;

    @Column(DataType.NUMBER)
    sup_rating_prc_up: number;

    @Column(DataType.NUMBER)
    is_kgvp_v2: number;

    @Column(DataType.NUMBER)
    ppvz_sales_commission:number;

    @Column(DataType.NUMBER)
    ppvz_for_pay: number;

    @Column(DataType.NUMBER)
    ppvz_reward: number;

    @Column(DataType.NUMBER)
    acquiring_fee:number;

    @Column(DataType.STRING)
    acquiring_bank: string;

    @Column(DataType.NUMBER)
    ppvz_vw: number;

    @Column(DataType.NUMBER)
    ppvz_vw_nds: number;

    @Column(DataType.INTEGER)
    ppvz_office_id: number;

    @Column(DataType.STRING)
    ppvz_office_name: string;

    @Column(DataType.INTEGER)
    ppvz_supplier_id: number;

    @Column(DataType.STRING)
    ppvz_supplier_name: string;

    @Column(DataType.STRING)
    ppvz_inn: string;

    @Column(DataType.STRING)
    decloration_number: string;

    @Column(DataType.STRING)
    bonus_type_name: string;

    @Column(DataType.STRING)
    sticker_id: string;

    @Column(DataType.STRING)
    site_country: string;

    @Column(DataType.NUMBER)
    penalty: number;

    @Column(DataType.NUMBER)
    additional_payment: number;

    @Column(DataType.NUMBER)
    rebill_logistic_cost: number;

    @Column(DataType.STRING)
    rebill_logistic_org: string;

    @Column(DataType.STRING)
    kiz: string;

    @Column(DataType.NUMBER)
    storage_fee: number;

    @Column(DataType.NUMBER)
    deduction: number;

    @Column(DataType.NUMBER)
    acceptance: number;

    @Column(DataType.STRING)
    srid: string;

    @Column(DataType.INTEGER)
    report_type: number;
}