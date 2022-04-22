const fs = require("fs");

class Car {
  constructor(props) {
    let { id, name, price, size_id, photo } = props;
    this.id = id;
    this.name = name;
    this.price = price;
    this.size_id = size_id;
    this.photo = photo;
  }
  static loadCar() {
    let carList = [];
    try {
      let jsonString = fs.readFileSync("data/cars.json", "utf-8");
      let items = JSON.parse(jsonString);

      for (let i in items) {
        carList.push(new Car(items[i]));
      }
    } catch (e) {
      console.warn(e.emssage);
    }
    return carList;
  }
}
module.exports = Car;
