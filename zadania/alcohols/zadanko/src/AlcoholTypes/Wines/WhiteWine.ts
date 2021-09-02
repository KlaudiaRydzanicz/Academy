import { eHangover } from "../../Enums/eHangoverTypes";
import { Wines } from "./Wines";

export class WhiteWine extends Wines {
  constructor(name: string, percent: number) {
    super(name, percent);
  }
  nextDayEffect(): string {
    return `Kac typu: ${eHangover.helicopterEffect}`;
  }
}
