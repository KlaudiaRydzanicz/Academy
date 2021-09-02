import { eHangoverType } from "../../enums/eHangoverType";
import { Beer } from "./Beer";
export class Lager extends Beer {

  constructor(name: string, percent: number, taste: string) {
    super(name, percent, taste);
  }
  nextDayEffect() {
    return `${eHangoverType.Amnesia}`;
  }
}
