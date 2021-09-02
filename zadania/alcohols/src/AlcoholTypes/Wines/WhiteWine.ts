import { eHangover } from "../../Enums/eHangoverTypes";
import { Wines } from "./Wines";

export class WhiteWine extends Wines {

  nextDayEffect(): string {
    return `Kac typu: ${eHangover.helicopterEffect}`;
  }
}
