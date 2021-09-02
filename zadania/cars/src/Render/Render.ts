import carsJSON from "../../cars.json";
import { Acura } from "../Acura/Acura";
import { AstonMartin } from "../Aston-martin/Aston";
import { Audi } from "../Audi/Audi";
import { Bmw } from "../BMW/Bmw";
import { Car } from "../Car";
import { iCars } from "../Interfaces/iCars";

export class Render {
  cars: Car[] = [];

   displayByYear(year: number) {
    carsJSON.forEach((car) => this.createCars(car as iCars));
    for (let car of this.cars) {
      if (car.getYear() === year) {
        console.log(car.toString(), car.carHistory());
        console.log(car.getYear());
      }
    }
   }

  createCars(data: iCars) {
    let car: Car;
  
    switch (data.make) {
      case "bmw":
        car = new Bmw(
          data.value.year,
          data.value.model,
          data.value.horsepower,
          data.value.price,
          data.make
         
        );
        break;
      case "acura":
        car = new Acura(
          data.value.year,
          data.value.model,
          data.value.horsepower,
          data.value.price,
          data.make
        );
        break;
      case "aston-martin":
        car = new AstonMartin(
          data.value.year,
          data.value.model,
          data.value.horsepower,
          data.value.price,
          data.make
        );
        break;
      case "audi":
        car = new Audi(
          data.value.year,
          data.value.model,
          data.value.horsepower,
          data.value.price,
          data.make
        );
        break;

      default:
        throw new Error("There is not such a car");
    }
    this.cars.push(car);
  }
}
