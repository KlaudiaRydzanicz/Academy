import { Animal } from "../Animal";
import { eDangerous } from "../Enums/eDangerous";
import { eType } from "../Enums/eType";

export class Ptaki extends Animal {
  static voices: Set<string> = new Set<string>();

  howDangerous(): string {
    return `Poziom zagrożenia dla człowieka : ${eDangerous.firtsLevel}`;
  };
  whatType(): string{
    return `Jestem zrodzajem zwierząt : ${eType.latajace}`
  }
  static getVoices(): string[] {
    return Array.from(this.voices);
  }
}
