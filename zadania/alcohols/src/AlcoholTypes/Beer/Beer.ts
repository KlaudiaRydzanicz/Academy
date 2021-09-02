import { Alcohol } from "../../Alcohol";
import { eTaxTypes } from "../../Enums/eTaxTypes";

export abstract class Beer extends Alcohol {
  exciseTax(): string {
    return `Akcyza alkoholowa: ${eTaxTypes.firtsLevel}`;
  }
}
