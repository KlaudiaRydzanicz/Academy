export abstract class Car {
  private _model: string;
  private _horsepower: number;
  private _price: number;
  private _mark: string;
  private _year : number;
  constructor(year: number, model: string, horsepower: number, price: number, mark: string) {
    this._mark = mark;
    this._model = model;
    this._horsepower = horsepower;
    this._price = price;
    this._year = year;
  }

  toString(): string {
    return `Marka: ${this._mark}, model: ${this._model}, cena: ${this._price}, konie mechaniczne: ${this._horsepower}`;
  }
  getYear(): number{
    return this._year ;
  }
  carHistory(): string {
    throw new Error ( "Metod not implemented");
  }
}
