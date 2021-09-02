import { Alcohol } from "../../Alcohol";
import { eTaxTypes } from "../../Enums/eTaxTypes";

export abstract class Wines extends Alcohol {
    exciseTax(): string {
        return `Akcyza alkoholowa: ${eTaxTypes.secondLevel}`;
    }
}