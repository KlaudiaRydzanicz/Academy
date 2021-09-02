import { eHangoverType } from "../../enums/eHangoverType";
import { Wines } from "./Wines";

export class WhiteWine extends Wines {
  constructor(name: string, percent: number, taste: string) {
    super(name, percent, taste);
  }
  nextDayEffect() {
    return `${eHangoverType.HelicopterEffect}`;
  }
}
