import { Animal } from "../Animal";
import { iAnimals } from "../Interfaces/iAnimals";
import animalsJSON from "../../animals.json";
import { Ssaki } from "../Animals/Ssaki";
import { Ryby } from "../Animals/Ryby";
import { Gady } from "../Animals/Gady";
import { Ptaki } from "../Animals/Ptaki";

export class Render {
  animals: Animal[] = [];

  display() {
    animalsJSON.forEach((animal) => this.createAnimal(animal));
    for (let animal of this.animals) {
      console.log(animal.toString(), animal.howDangerous(), animal.whatType());
    }
    console.log(
      Ssaki.getVoices(),
      Gady.getVoices(),
      Ptaki.getVoices(),
      Ryby.getVoices()
    );
  }
  createAnimal(data: iAnimals) {
    let animal;
    switch (data.gatunek) {
      case "Ssaki":
        animal = new Ssaki(
          data.gatunek,
          data.value.nazwa,
          data.value.nogi,
          data.value.odglosy
        );
        Ssaki.voices.add(data.value.odglosy);

        break;
      case "Ryby":
        animal = new Ryby(
          data.gatunek,
          data.value.nazwa,
          data.value.nogi,
          data.value.odglosy
        );
        Ryby.voices.add(data.value.odglosy);

        break;
      case "Gady":
        animal = new Gady(
          data.gatunek,
          data.value.nazwa,
          data.value.nogi,
          data.value.odglosy
        );
        Gady.voices.add(data.value.odglosy);
        break;
      case "Ptaki":
        animal = new Ptaki(
          data.gatunek,
          data.value.nazwa,
          data.value.nogi,
          data.value.odglosy
        );
        Ptaki.voices.add(data.value.odglosy);
        break;
      default:
        throw new Error("There is not such an animal");
    }
    this.animals.push(animal);
  }
}
