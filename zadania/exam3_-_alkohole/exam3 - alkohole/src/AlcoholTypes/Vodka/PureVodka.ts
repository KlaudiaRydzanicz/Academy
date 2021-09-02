import { eHangoverType } from "../../enums/eHangoverType";
import { Vodka } from "./Vodka";

export class PureVodka extends Vodka {
  constructor(name: string, percent: number, taste: string) {
    super(name, percent, taste);
  }
  nextDayEffect() {
    return `${eHangoverType.GrassIsGrowingToLoud}`;
  }
}
