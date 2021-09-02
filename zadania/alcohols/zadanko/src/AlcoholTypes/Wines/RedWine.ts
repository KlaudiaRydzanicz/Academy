import { eHangover } from "../../Enums/eHangoverTypes";
import { Wines } from "./Wines";

export class RedWine extends Wines {
  constructor(name: string, percent: number) {
    super(name, percent);
  }
  nextDayEffect(): string {
    return `Kac typu: ${eHangover.massiveHeadahe}`;
  }
}
