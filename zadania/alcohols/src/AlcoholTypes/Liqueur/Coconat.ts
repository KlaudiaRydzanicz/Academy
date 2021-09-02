import { eHangover } from "../../Enums/eHangoverTypes";
import { Liqueur } from "./Liqueur";

export class Coconat extends Liqueur {

  nextDayEffect(): string {
    return `Kac typu: ${eHangover.amnesia}`;
  }
}
