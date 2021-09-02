import { eHangover } from "../../Enums/eHangoverTypes";
import { Beer } from "./Beer";

export class Lager extends Beer {
  constructor(name: string, percent: number) {
    super(name, percent);
  }

  nextDayEffect(): string {
    return `Kac typu : ${eHangover.amnesia}`;
  }
}
