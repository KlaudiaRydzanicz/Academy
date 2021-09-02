import { Alcohol } from "../../Alcohol";
import { eTaxTypes } from "../../enums/eTaxTypes";

export class Vodka extends Alcohol {
  exciseTax() {
    return `${eTaxTypes.ThirdLevel}`;
  }
}
