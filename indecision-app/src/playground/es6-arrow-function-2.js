// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  return a * b;
}
console.log(add(55, 1, 20));

// this keyword - no longer bound

const user = {
  name: 'Alan',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + 'has lived in ' + city);

    // this.cities.forEach((city) => {
    //   console.log(this.name + 'has lived in ' + city);
    // });
  }
};
console.log(user.printPlacesLived());

// Chanllenge area

const multipier = {
  number: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.number.map((number) => number * this.multiplyBy);
  }
};

console.log(multipier.multiply());