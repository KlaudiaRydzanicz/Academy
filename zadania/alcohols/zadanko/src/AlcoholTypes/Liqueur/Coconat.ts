import { eHangover } from "../../Enums/eHangoverTypes";
import { Liqueur } from "./Liqueur";

export class Coconat extends Liqueur {
  constructor(name: string, precent: number) {
    super(name, precent);
  }

  nextDayEffect(): string {
    return `Kac typu: ${eHangover.amnesia}`;
  }
}
