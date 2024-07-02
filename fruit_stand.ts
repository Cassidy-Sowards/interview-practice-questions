type fruit = {
  name: string,
  quantity: number,
  price: number
}

class FruitStand {

  fruits: Array<fruit> = []

  constructor () {}

  addFruit(name: string, quantity: number, price: number) {
    let newFruit = {name, quantity, price}
    this.fruits.push(newFruit);
    
  }

  updateQuantity(name: string, quantity: number) {
    this.fruits.forEach((fruit) => fruit.quantity = quantity);
    console.log(this.fruits)
  }

  totalValue() {
    let totals: Array<number> = [];
    this.fruits.forEach((fruit) => totals.push(fruit.quantity * fruit.price))
    return totals.reduce((partialSum,a) => partialSum + a, 0);
  }


}

let stand = new FruitStand();
stand.addFruit("quava", 2, 4);
stand.addFruit("banana", 1, 0.5);
stand.addFruit("apple", 3, 1);
stand.addFruit("watermelon", 2, 5);
stand.updateQuantity("banana", 3);
console.log(stand.totalValue());
