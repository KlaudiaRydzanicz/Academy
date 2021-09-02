import candiesJSON from "../../candies.json";
import { IceCream } from "../IceCream/IceCream";
import { Cakes } from "../Cakes/Cakes";
import { Chocolate } from "../Chocolate/Chocolate";
import { Candy } from "../Candy";
import { iCandies } from "../Interfaces/iCandies";

export class Render {
  candies: Candy[] = [];

  display() {
    candiesJSON.forEach((candy) => this.createCandy(candy));
    for (let candy of this.candies) {
      const container = document.createElement("div");
      const allInfo = document.createElement("div");
      const string = document.createElement("h3");
      const howToMake = document.createElement("p");
      string.textContent = `${candy.toString()}`;
      howToMake.textContent = `${candy.howToMake()}`;
      const body = document.querySelector("body") as HTMLElement;
      allInfo.appendChild(string);
      allInfo.appendChild(howToMake);
      container.appendChild(allInfo);
      body.append(container);
    }
  }

  createCandy(data: iCandies) {
    let candy: Candy;
    switch (data.class) {
      case "IceCream":
        candy = new IceCream(data.value.name, data.value.percents);
        break;
      case "Cakes":
        candy = new Cakes(data.value.name, data.value.percents);
        break;
      case "Chocolate":
        candy = new Chocolate(data.value.name, data.value.percents);
        break;
      default:
        throw new Error("There is not such an alcohol");
    }
    this.candies.push(candy);
  }
}
