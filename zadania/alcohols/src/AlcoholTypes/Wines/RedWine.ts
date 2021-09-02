import { eHangover } from "../../Enums/eHangoverTypes";
import { Wines } from "./Wines";

export class RedWine extends Wines {

  nextDayEffect(): string {
    return `Kac typu: ${eHangover.massiveHeadahe}`;
  }
}
