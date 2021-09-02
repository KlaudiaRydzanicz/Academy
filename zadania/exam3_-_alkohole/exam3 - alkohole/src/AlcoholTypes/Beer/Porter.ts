import { eHangoverType } from "../../enums/eHangoverType";
import { Beer } from "./Beer";

export class Porter extends Beer {
  constructor(name: string, percent: number, taste: string) {
    super(name, percent, taste);
  }
  nextDayEffect() {
    return `${eHangoverType.MassiveHeadahe}`;
  }
}
