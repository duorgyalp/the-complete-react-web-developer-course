var nameVar = 'Kongyot';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jan';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// function getPetName() {
//   let petName = 'Hal';
//   return petName;
// }

// const petName = getPetName();
// console.log(petName);

// Block scoping
const fullName = 'Kongyot Roj';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);