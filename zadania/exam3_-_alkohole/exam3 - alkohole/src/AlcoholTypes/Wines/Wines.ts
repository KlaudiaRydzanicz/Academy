import { Alcohol } from "../../Alcohol";
import { eTaxTypes } from "../../enums/eTaxTypes";

export class Wines extends Alcohol {
    exciseTax()  {
    return `${eTaxTypes.SecondLevel}`;
  }
}
