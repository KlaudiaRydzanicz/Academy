import { Alcohol } from "../../Alcohol";
import { eTaxTypes } from "../../enums/eTaxTypes";

export class Beer extends Alcohol {
  exciseTax() {
    return `${eTaxTypes.FirstLevel}`;
  }
}
