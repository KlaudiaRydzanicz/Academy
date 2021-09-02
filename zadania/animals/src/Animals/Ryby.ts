import { Animal } from "../Animal";
import { eDangerous } from "../Enums/eDangerous";
import { eType } from "../Enums/eType";

export class Ryby extends Animal {
  static voices: Set<string> = new Set<string>();

  howDangerous(): string {
    return `Poziom zagrożenia dla człowieka : ${eDangerous.secondLevel}`;
  };
  whatType(): string{
    return `Jestem zrodzajem zwierząt : ${eType.wodne}`
  }
  static getVoices(): string[] {
    return Array.from(this.voices);
  }
}
