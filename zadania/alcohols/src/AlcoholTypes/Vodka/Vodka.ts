import { Alcohol } from "../../Alcohol";
import { eTaxTypes } from "../../Enums/eTaxTypes";

export abstract class Vodka extends Alcohol {
    exciseTax(): string {
        return `Akcyza alkoholowa: ${eTaxTypes.thirdLevel}`;
    }
}