'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  //console.log(arguments);
  return a * b;
};
console.log(add(55, 1, 20));

// this keyword - no longer bound

var user = {
  name: 'Alan',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + 'has lived in ' + city;
    });

    // this.cities.forEach((city) => {
    //   console.log(this.name + 'has lived in ' + city);
    // });
  }
};
console.log(user.printPlacesLived());

// Chanllenge area

var multipier = {
  number: [10, 20, 30],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.number.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multipier.multiply());
