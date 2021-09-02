import { eHangover } from "../../Enums/eHangoverTypes";
import { Beer } from "./Beer";

export class Ipa extends Beer {
  constructor(name: string, percent: number) {
    super(name, percent);
  }
  nextDayEffect(): string {
    return `Kac typu: ${eHangover.helicopterEffect}`;
  }
}
