import { eHangover } from "../../Enums/eHangoverTypes";
import { Beer } from "./Beer";

export class Ipa extends Beer {

  nextDayEffect(): string {
    return `Kac typu: ${eHangover.helicopterEffect}`;
  }
}
