import {SupplierKeys} from "../modules/supplier-key/supplier-key.model";

export class OldWBKeyError extends Error {
    constructor(entity: SupplierKeys) {
        const msg = `The token of ${entity.supplierName} is invalid. Token id: ${entity.id} Date of his dead: ${entity.tokenDeadDate}. Description of token: ${entity.description}`
        super(msg);
        Object.setPrototypeOf(this, OldWBKeyError.prototype)
    }

    getMessage() {
        return this.message;
    }
}