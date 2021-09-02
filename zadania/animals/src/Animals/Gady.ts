import { Animal } from "../Animal";
import { eDangerous } from "../Enums/eDangerous";
import { eType } from "../Enums/eType";

export class Gady extends Animal {
  static voices: Set<string> = new Set<string>();


  howDangerous(): string {
    return `Poziom zagrożenia dla człowieka : ${eDangerous.thirdLevel}`;
  }
  whatType(): string{
    return `Jestem zrodzajem zwierząt : ${eType.dzikie}`
  }
  static getVoices(): string[] {
    const gadyVoice = Array.from(this.voices);
    return gadyVoice;
  }
  
}
