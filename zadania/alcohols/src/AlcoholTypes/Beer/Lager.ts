import { eHangover } from "../../Enums/eHangoverTypes";
import { Beer } from "./Beer";

export class Lager extends Beer {

  nextDayEffect(): string {
    return `Kac typu : ${eHangover.amnesia}`;
  }
}
