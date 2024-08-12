export class CreateSupplierKeyDto {
    readonly apiKey:string;
    readonly tokenDeadDate: string;
    readonly supplierId: number;
    readonly categories: number[];
}